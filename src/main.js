import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './analytics';
import { ThemeProvider, CssBaseline } from '@mui/material';
import muiTheme from './theme/muiTheme';
import { BrowserRouter } from 'react-router-dom';
import { AppStateProvider } from './context/AppStateContext';
import '/index.css';
import './typography.css';
async function enableMocking() {
    if (import.meta.env.DEV) {
        const { worker } = await import('./mocks/browser');
        await worker.start({
            onUnhandledRequest: 'bypass',
        });
        console.log('[MSW] started');
    }
}
enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(AppStateProvider, { children: _jsx(BrowserRouter, { children: _jsxs(ThemeProvider, { theme: muiTheme, children: [_jsx(CssBaseline, {}), _jsx(App, {})] }) }) }) }));
});
