import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { TodoProvider } from './context/TodoContext';
import { Nav } from './Nav';
import AppContent from './AppContent';
import RegisterPage from './pages/RegisterPage';
import { PageTransition } from './components/PageTransition';
export default function App() {
    const location = useLocation();
    return (_jsxs(TodoProvider, { children: [_jsx("a", { href: "#main-content", className: "skip-link", children: "Przejd\u017A do tre\u015Bci" }), _jsx("header", { children: _jsx(Nav, {}) }), _jsx("main", { id: "main-content", children: _jsx(AnimatePresence, { mode: "wait", children: _jsxs(Routes, { location: location, children: [_jsx(Route, { path: "/", element: _jsx(PageTransition, { children: _jsx(AppContent, {}) }) }), _jsx(Route, { path: "/register", element: _jsx(PageTransition, { children: _jsx(RegisterPage, {}) }) })] }, location.pathname) }) })] }));
}
