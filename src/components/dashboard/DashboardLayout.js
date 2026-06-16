import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/dashboard/DashboardLayout.tsx
import { Box } from '@mui/material';
import { Sidebar } from './Sidebar';
import { AppHeader } from './AppHeader';
export const DashboardLayout = ({ children }) => {
    return (_jsxs(Box, { sx: { display: 'flex' }, children: [_jsx(Sidebar, {}), _jsxs(Box, { sx: { flexGrow: 1 }, children: [_jsx(AppHeader, {}), _jsx(Box, { sx: { p: 3 }, children: children })] })] }));
};
