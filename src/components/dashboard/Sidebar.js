import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/dashboard/Sidebar.tsx
import { Drawer, List, ListItemButton, ListItemText, Avatar, Box, Typography, } from '@mui/material';
const drawerWidth = 240;
export const Sidebar = () => {
    return (_jsxs(Drawer, { variant: "permanent", sx: {
            width: drawerWidth,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }, children: [_jsx(Box, { sx: { p: 2 }, children: _jsx(Typography, { variant: "h6", children: "TodoApp" }) }), _jsxs(List, { children: [_jsx(ListItemButton, { children: _jsx(ListItemText, { primary: "Dashboard" }) }), _jsx(ListItemButton, { children: _jsx(ListItemText, { primary: "Zadania" }) }), _jsx(ListItemButton, { children: _jsx(ListItemText, { primary: "Ustawienia" }) })] }), _jsx(Box, { sx: { mt: 'auto', p: 2 }, children: _jsx(Avatar, { children: "U" }) })] }));
};
