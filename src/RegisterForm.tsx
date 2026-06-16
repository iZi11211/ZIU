import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

import { registerUser, getUser } from './api/mockApi';

import {
  FormData,
  fullSchema,
  step1Schema,
  step2Schema,
  step3Schema,
} from './schemas/register.schema';

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
  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // =========================
  // DOUBLE SUBMIT LOCK
  // =========================
  const [isLocked, setIsLocked] = useState(false);

  const methods = useForm<FormData>({
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

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = methods;

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
    const schema = schemas[step as keyof typeof schemas];
    const values = methods.getValues();

    const result = schema.safeParse(values);

    if (!result.success) {
      result.error.errors.forEach((err) => {
        methods.setError(err.path[0] as any, {
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
  const onSubmit = async (data: FormData) => {
    if (isLocked) return;

    setIsLocked(true);

    try {
      dispatch({ type: 'LOADING' });

      const res = await registerUser(data);

      console.log('SUCCESS:', res);

      dispatch({ type: 'SUCCESS' });
    } catch (err: any) {
      dispatch({
        type: 'ERROR',
        payload: err.message || 'Błąd sieci',
      });
    } finally {
      setIsLocked(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="register-form"
        aria-busy={isSubmitting || loadingUser || isLocked}
      >

        {/* ================= GET LIVE REGION ================= */}
        <div role="status" aria-live="polite" className="sr-only">
          {loadingUser && 'Ładowanie użytkownika'}
          {user && `Zalogowany jako ${user.email}`}
        </div>

        {/* ================= LOADING ================= */}
        {state.loading && (
          <p role="status" aria-live="polite">
            Ładowanie...
          </p>
        )}

        {/* ================= SUCCESS (ANIMATED) ================= */}
        {state.success && (
          <motion.p
            className="register__success"
            role="status"
            aria-live="polite"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            Rejestracja zakończona sukcesem!
          </motion.p>
        )}

        {/* ================= ERROR (ANIMATED) ================= */}
        {state.error && (
          <motion.p
            className="register__error"
            role="alert"
            aria-live="assertive"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {state.error}
          </motion.p>
        )}

        {/* ================= STEPS ================= */}
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}

        {/* ================= NAV ================= */}
        <div className="flex gap-2 mt-4">

          {step > 1 && (
            <button type="button" onClick={prev}>
              Wstecz
            </button>
          )}

          {step < 3 && (
            <button type="button" onClick={next}>
              Dalej
            </button>
          )}

          {step === 3 && (
            <button
              type="submit"
              disabled={isSubmitting || isLocked || state.loading}
              aria-busy={isSubmitting || isLocked || state.loading}
            >
              {isSubmitting || isLocked
                ? 'Rejestrowanie...'
                : 'Zarejestruj się'}
            </button>
          )}

        </div>

      </form>
    </FormProvider>
  );
}