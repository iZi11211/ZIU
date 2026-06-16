import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/dashboard/AppHeader.tsx
import { AppBar, Toolbar, Typography, IconButton, Stack, } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export const AppHeader = () => {
    return (_jsx(AppBar, { position: "static", color: "transparent", elevation: 0, children: _jsxs(Toolbar, { sx: { justifyContent: 'space-between' }, children: [_jsx(Typography, { variant: "h5", children: "Dashboard" }), _jsxs(Stack, { direction: "row", spacing: 1, children: [_jsx(IconButton, { children: _jsx(DarkModeIcon, {}) }), _jsx(IconButton, { children: _jsx(NotificationsIcon, {}) })] })] }) }));
};
