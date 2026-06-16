import { useState } from "react";
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="nav">

      {/* LOGO */}
      <div className="nav__logo">TodoApp</div>

      {/* HAMBURGER */}
      <button
        className="nav__hamburger"
        onClick={handleToggle}
        aria-label="Otwórz menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* MENU */}
      <ul className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}>
        <li><Link to="/">Zadania</Link></li>
        <li><Link to="/register">Rejestracja</Link></li>
        <li><a href="#">Kategorie</a></li>
        <li><a href="#">Profil</a></li>
      </ul>

    </nav>
  );
};