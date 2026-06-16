import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { FocusTrap } from './components/FocusTrap';
export const ConfirmDeleteModal = ({ open, onClose, onConfirm, }) => {
    const triggerRef = useRef(null);
    if (!open)
        return null;
    return (_jsx("div", { className: "modal-overlay", onClick: onClose, children: _jsx(FocusTrap, { onEscape: onClose, triggerRef: triggerRef, children: _jsxs("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title", className: "modal-content", onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { id: "modal-title", children: "Usu\u0144 zadanie?" }), _jsx("p", { children: "Czy na pewno chcesz usun\u0105\u0107 to zadanie?" }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsx("button", { onClick: onConfirm, children: "Usu\u0144" }), _jsx("button", { onClick: onClose, children: "Anuluj" })] })] }) }) }));
};
