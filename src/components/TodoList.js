import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
// src/components/TodoList.tsx
import { Card, CardContent } from '@mui/material';
import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';
export const TodoList = () => {
    const { todos, filter } = useTodo();
    const filtered = todos.filter((todo) => {
        if (filter === 'active')
            return !todo.completed;
        if (filter === 'completed')
            return todo.completed;
        return true;
    });
    const isEmpty = filtered.length === 0;
    return (_jsxs("section", { "aria-label": "Lista zada\u0144", children: [_jsxs("div", { role: "status", "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: [isEmpty && "Brak zadań", !isEmpty && `Liczba zadań: ${filtered.length}`] }), _jsx(Card, { children: _jsx(CardContent, { children: _jsx("div", { className: "task-grid", children: filtered.map((todo) => (_jsx(TodoItem, { todo: todo }, todo.id))) }) }) })] }));
};
