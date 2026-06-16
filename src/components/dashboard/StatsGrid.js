import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/dashboard/StatsGrid.tsx
import { Grid } from '@mui/material';
import { StatsCard } from './StatsCard';
import { useTodo } from '../../context/TodoContext';
export const StatsGrid = () => {
    const { todos } = useTodo();
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active = todos.filter(t => !t.completed).length;
    return (_jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(StatsCard, { title: "Wszystkie zadania", value: total }) }), _jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(StatsCard, { title: "Uko\u0144czone", value: completed }) }), _jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(StatsCard, { title: "Oczekuj\u0105ce", value: active }) })] }));
};
