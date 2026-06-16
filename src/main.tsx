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
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AppStateProvider>
        <BrowserRouter>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </AppStateProvider>
    </React.StrictMode>
  );
});