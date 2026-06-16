import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { registerUser, getUser } from './api/mockApi';
import { fullSchema, step1Schema, step2Schema, step3Schema, } from './schemas/register.schema';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useAppState } from './context/AppStateContext';
const schemas = {
    1: step1Schema,
    2: step2Schema,
    3: step3Schema,
};
export default function RegisterForm() {
    const [step, setStep] = useState(1);
    // =========================
    // GLOBAL STATE (Context)
    // =========================
    const { state, dispatch } = useAppState();
    // =========================
    // GET USER STATE
    // =========================
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);
    // =========================
    // DOUBLE SUBMIT LOCK
    // =========================
    const [isLocked, setIsLocked] = useState(false);
    const methods = useForm({
        resolver: zodResolver(fullSchema),
        mode: 'onChange',
        defaultValues: {
            categories: [],
            notifications: { email: false, push: false },
            newsletter: false,
            password: '',
            confirmPassword: '',
            rodo: false,
        },
    });
    const { handleSubmit, formState: { isSubmitting, errors }, setError, } = methods;
    // =========================
    // GET REQUEST (MSW)
    // =========================
    useEffect(() => {
        getUser()
            .then((data) => setUser(data))
            .catch(() => {
            setError('root.serverError', {
                message: 'Błąd pobierania danych użytkownika',
            });
        })
            .finally(() => setLoadingUser(false));
    }, [setError]);
    // =========================
    // STEP VALIDATION
    // =========================
    const next = async () => {
        const schema = schemas[step];
        const values = methods.getValues();
        const result = schema.safeParse(values);
        if (!result.success) {
            const error = result.error;
            error.issues.forEach((err) => {
                methods.setError(err.path[0], {
                    message: err.message,
                });
            });
            return;
        }
        setStep((s) => s + 1);
    };
    const prev = () => setStep((s) => s - 1);
    // =========================
    // POST REQUEST (MSW)
    // =========================
    const onSubmit = async (data) => {
        if (isLocked)
            return;
        setIsLocked(true);
        try {
            dispatch({ type: 'LOADING' });
            const res = await registerUser(data);
            console.log('SUCCESS:', res);
            dispatch({ type: 'SUCCESS' });
        }
        catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.message || 'Błąd sieci',
            });
        }
        finally {
            setIsLocked(false);
        }
    };
    return (_jsx(FormProvider, { ...methods, children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "register-form", "aria-busy": isSubmitting || loadingUser || isLocked, children: [_jsxs("div", { role: "status", "aria-live": "polite", className: "sr-only", children: [loadingUser && 'Ładowanie użytkownika', user && `Zalogowany jako ${user.email}`] }), state.loading && (_jsx("p", { role: "status", "aria-live": "polite", children: "\u0141adowanie..." })), state.success && (_jsx(motion.p, { className: "register__success", role: "status", "aria-live": "polite", initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.25 }, children: "Rejestracja zako\u0144czona sukcesem!" })), state.error && (_jsx(motion.p, { className: "register__error", role: "alert", "aria-live": "assertive", initial: { x: -10, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.25 }, children: state.error })), step === 1 && _jsx(Step1, {}), step === 2 && _jsx(Step2, {}), step === 3 && _jsx(Step3, {}), _jsxs("div", { className: "flex gap-2 mt-4", children: [step > 1 && (_jsx("button", { type: "button", onClick: prev, children: "Wstecz" })), step < 3 && (_jsx("button", { type: "button", onClick: next, children: "Dalej" })), step === 3 && (_jsx("button", { type: "submit", disabled: isSubmitting || isLocked || state.loading, "aria-busy": isSubmitting || isLocked || state.loading, children: isSubmitting || isLocked
                                ? 'Rejestrowanie...'
                                : 'Zarejestruj się' }))] })] }) }));
}
