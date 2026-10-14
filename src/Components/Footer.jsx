
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>MyWebsite</h2>

      <p>Learn. Build. Grow.</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © 2026 MyWebsite. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;