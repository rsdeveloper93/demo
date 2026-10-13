import "./Header.css"

function App() {
  return (
    <div>
      <header className="header">
        <h2 className="logo">MyWebsite</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="header-btn">
          Get Started
        </button>
      </header>

      <main id="home">
        {/* <h1>Welcome to My Website</h1>
        <p>My first React JS website.</p> */}
      </main>
    </div>
  );
}

export default App;