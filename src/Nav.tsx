import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const location = useLocation();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
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

        <li>
          <Link to="/" onClick={handleClose}>
            Zadania
          </Link>
        </li>

        <li>
          <Link to="/register" onClick={handleClose}>
            Rejestracja
          </Link>
        </li>

<li>
  <Link to="/categories" onClick={handleClose}>
    Kategorie
  </Link>
</li>
        <li>
          <Link to="/profile" onClick={handleClose}>
            Profil
          </Link>
        </li>

      </ul>

    </nav>
  );
};