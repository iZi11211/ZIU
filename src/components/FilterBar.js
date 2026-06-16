import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/FilterBar.tsx
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTodo } from '../context/TodoContext';
export const FilterBar = () => {
    const { filter, setFilter } = useTodo();
    return (_jsxs(ToggleButtonGroup, { value: filter, exclusive: true, onChange: (_, value) => value && setFilter(value), children: [_jsx(ToggleButton, { value: "all", children: "Wszystkie" }), _jsx(ToggleButton, { value: "active", children: "Aktywne" }), _jsx(ToggleButton, { value: "completed", children: "Uko\u0144czone" })] }));
};
