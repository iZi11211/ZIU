import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
// src/pages/TodoPage.tsx
import { Typography, Stack, Paper } from '@mui/material';
import { useTodo } from '../context/TodoContext';
import { AddTodoForm } from '../components/AddTodoForm';
import { FilterBar } from '../components/FilterBar';
import { TodoList } from '../components/TodoList';
const Stats = () => {
    const { todos } = useTodo();
    const active = todos.filter(t => !t.completed).length;
    return (_jsxs(Typography, { variant: "body2", children: [active, " / ", todos.length, " aktywnych"] }));
};
export default function TodoPage() {
    return (_jsx("div", { className: "max-w-xl mx-auto p-4", children: _jsx(Paper, { sx: { p: 4 }, children: _jsxs(Stack, { spacing: 3, children: [_jsx(Typography, { variant: "h4", children: "Todo App" }), _jsx(Stats, {}), _jsx(AddTodoForm, {}), _jsx(FilterBar, {}), _jsx(TodoList, {})] }) }) }));
}
