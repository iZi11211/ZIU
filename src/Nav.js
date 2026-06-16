import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from 'react-router-dom';
export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };
    return (_jsxs("nav", { className: "nav", children: [_jsx("div", { className: "nav__logo", children: "TodoApp" }), _jsxs("button", { className: "nav__hamburger", onClick: handleToggle, "aria-label": "Otw\u00F3rz menu", "aria-expanded": isOpen, children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsxs("ul", { className: `nav__menu ${isOpen ? "nav__menu--open" : ""}`, children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Zadania" }) }), _jsx("li", { children: _jsx(Link, { to: "/register", children: "Rejestracja" }) }), _jsx("li", { children: _jsx("a", { href: "#", children: "Kategorie" }) }), _jsx("li", { children: _jsx("a", { href: "#", children: "Profil" }) })] })] }));
};
