import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <header className="header">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="src/assets/logo.png" alt="Website Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-open" : ""}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </nav>

        {/* Button */}
        <Link
          to="/contact"
          className="header-btn"
          onClick={closeMenu}
        >
          Get Started
        </Link>
      </header>

      <main id="home"></main>
    </div>
  );
}

export default Header;
