import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { TodoProvider } from './context/TodoContext';
import { Nav } from './Nav';

import AppContent from './AppContent';
import RegisterPage from './pages/RegisterPage';

import { PageTransition } from './components/PageTransition';

export default function App() {
  const location = useLocation();

  return (
    <TodoProvider>
      {/* SKIP LINK */}
      <a href="#main-content" className="skip-link">
        Przejdź do treści
      </a>

      <header>
        <Nav />
      </header>

      <main id="main-content">

        {/* 🔥 ANIMACJE ROUTER */}
        <AnimatePresence mode="wait">

          <Routes location={location} key={location.pathname}>

            <Route
              path="/"
              element={
                <PageTransition>
                  <AppContent />
                </PageTransition>
              }
            />

            <Route
              path="/register"
              element={
                <PageTransition>
                  <RegisterPage />
                </PageTransition>
              }
            />

          </Routes>

        </AnimatePresence>

      </main>
    </TodoProvider>
  );
}

/*//
import { TodoProvider } from './context/TodoContext';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { StatsGrid } from './components/dashboard/StatsGrid';


function AppContent() {
  return (
    <DashboardLayout>
      <StatsGrid />
    </DashboardLayout>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
}
  //*/