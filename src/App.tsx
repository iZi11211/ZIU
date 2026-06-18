import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { TodoProvider } from './context/TodoContext';
import { Nav } from './Nav';

import AppContent from './AppContent';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CategoriesPage from './pages/CategoriesPage';

import { PageTransition } from './components/PageTransition';

export default function App() {
  const location = useLocation();

  return (
    <TodoProvider>
      <a href="#main-content" className="skip-link">
        Przejdź do treści
      </a>

      <header>
        <Nav />
      </header>

      <main id="main-content" className="page-container">
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

            <Route
              path="/profile"
              element={
                <PageTransition>
                  <ProfilePage />
                </PageTransition>
              }
            />

            <Route
              path="/categories"
              element={
                <PageTransition>
                  <CategoriesPage />
                </PageTransition>
              }
            />

          </Routes>
        </AnimatePresence>
      </main>
    </TodoProvider>
  );
}