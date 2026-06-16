import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { TextField, Button, Stack, } from '@mui/material';
import { useTodo } from '../context/TodoContext';
import { trackCTA } from '../analytics';
export const AddTodoForm = () => {
    const [text, setText] = useState('');
    const { dispatch } = useTodo();
    const handleAdd = () => {
        if (!text.trim())
            return;
        // ANALITYKA — kliknięcie CTA
        trackCTA('todo_add');
        dispatch({
            type: 'ADD',
            payload: {
                title: text,
            },
        });
        setText('');
    };
    return (_jsxs(Stack, { direction: "row", spacing: 2, children: [_jsx(TextField, { fullWidth: true, label: "Nowe zadanie", value: text, onChange: (e) => setText(e.target.value), onKeyDown: (e) => {
                    if (e.key === 'Enter') {
                        handleAdd();
                    }
                } }), _jsx(Button, { variant: "contained", onClick: handleAdd, children: "Dodaj" })] }));
};
