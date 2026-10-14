import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <h2 className="logo">MyWebsite</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <button className="header-btn">Get Started</button>
      </header>

      <main id="home">
        {/* <h1>Welcome to My Website</h1>
        <p>My first React JS website.</p> */}
      </main>
    </div>
  );
}

export default Header;
