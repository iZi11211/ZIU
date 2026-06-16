import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { Checkbox, IconButton, TextField, ListItem, ListItemText, Stack, Button, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodo } from '../context/TodoContext';
import { FocusTrap } from './FocusTrap';
export const TodoItem = ({ todo }) => {
    const { dispatch } = useTodo();
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.title);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const deleteBtnRef = useRef(null);
    const handleSave = () => {
        if (!text.trim())
            return;
        dispatch({ type: 'EDIT', payload: { id: todo.id, title: text } });
        setEditing(false);
    };
    const handleDelete = () => {
        dispatch({ type: 'DELETE', payload: { id: todo.id } });
        setConfirmOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(ListItem, { secondaryAction: _jsx(IconButton, { ref: deleteBtnRef, edge: "end", onClick: () => setConfirmOpen(true), "aria-label": "Usu\u0144 zadanie", children: _jsx(DeleteIcon, {}) }), children: _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, width: "100%", children: [_jsx(Checkbox, { checked: todo.completed, onChange: () => dispatch({ type: 'TOGGLE', payload: { id: todo.id } }), "aria-label": "Oznacz jako wykonane" }), editing ? (_jsx(TextField, { fullWidth: true, value: text, onChange: (e) => setText(e.target.value), onBlur: handleSave, onKeyDown: (e) => e.key === 'Enter' && handleSave(), autoFocus: true })) : (_jsx(ListItemText, { primary: todo.title, onDoubleClick: () => setEditing(true), sx: {
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            } }))] }) }), confirmOpen && (_jsx("div", { className: "modal-overlay", onClick: () => setConfirmOpen(false), children: _jsx(FocusTrap, { onEscape: () => setConfirmOpen(false), triggerRef: deleteBtnRef, children: _jsxs("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": "delete-title", className: "modal-content", onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { id: "delete-title", children: "Usun\u0105\u0107 zadanie?" }), _jsx("p", { children: todo.title }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsx(Button, { variant: "contained", color: "error", onClick: handleDelete, children: "Usu\u0144" }), _jsx(Button, { variant: "outlined", onClick: () => setConfirmOpen(false), children: "Anuluj" })] })] }) }) }))] }));
};
