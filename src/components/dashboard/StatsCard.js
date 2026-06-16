import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/dashboard/StatsCard.tsx
import { Card, CardContent, Typography } from '@mui/material';
export const StatsCard = ({ title, value }) => {
    return (_jsx(Card, { children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", children: title }), _jsx(Typography, { variant: "h4", children: value })] }) }));
};
