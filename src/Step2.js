import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext, useFieldArray } from 'react-hook-form';
export default function Step2() {
    const { control, register, formState: { errors }, } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'categories',
    });
    const categoryError = errors.categories?.message ||
        errors.categories?.root?.message;
    return (_jsxs("div", { className: "step2", children: [_jsxs("div", { className: "step2__block", children: [_jsx("label", { className: "step2__label", children: "Kategorie *" }), fields.map((field, index) => (_jsxs("div", { className: "flex gap-2 mb-2", children: [_jsx("input", { id: `category-${index}`, className: "register__input", placeholder: `Kategoria ${index + 1}`, "aria-required": "true", "aria-invalid": !!errors.categories?.[index], "aria-describedby": `category-${index}-error`, ...register(`categories.${index}`) }), _jsx("button", { type: "button", "aria-label": `Usuń kategorię ${index + 1}`, onClick: () => remove(index), children: "Usu\u0144" })] }, field.id))), _jsx("button", { type: "button", "aria-label": "Dodaj kategori\u0119", onClick: () => append(''), children: "+ Dodaj kategori\u0119" }), categoryError && (_jsx("span", { role: "alert", className: "register__error", children: categoryError }))] }), _jsxs("div", { className: "step2__block", children: [_jsx("label", { className: "step2__label", children: "Powiadomienia" }), _jsxs("label", { className: "step2__checkbox", children: [_jsx("input", { type: "checkbox", "aria-describedby": "notif-email-help", ...register('notifications.email') }), "Email"] }), _jsxs("label", { className: "step2__checkbox", children: [_jsx("input", { type: "checkbox", "aria-describedby": "notif-push-help", ...register('notifications.push') }), "Push"] })] }), _jsx("div", { className: "step2__block", children: _jsxs("label", { className: "step2__checkbox", children: [_jsx("input", { type: "checkbox", ...register('newsletter') }), "Newsletter (opcjonalnie)"] }) })] }));
}
