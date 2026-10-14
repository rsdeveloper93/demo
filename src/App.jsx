import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import AboutUs from "./Components/AboutUs.jsx"
import Home from "./Components/Home.jsx"
import Services from "./Components/Services.jsx"; 
import Contact from "./Components/Contact.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}
export default App;