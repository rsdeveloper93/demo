import "./AboutUs.css";

function AboutUs() 
{ return ( <section className="about-section" id="about"> 
<div className="about-container"> <div className="about-image"> 
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" alt="Our team working together" /> 
</div>

<div className="about-content"> 
<span className="about-tag">ABOUT US</span>

<h2> Building a Better Future <span> Together</span> </h2>

<p> We are a passionate team dedicated to delivering innovative 
solutions and exceptional experiences. Our goal is to help people and 
businesses grow through creativity, collaboration, and technology. </p>

<p> With a focus on quality, trust, and customer satisfaction, we turn ideas into meaningful results. </p>

<div className="about-stats"> 
<div><h3>5+</h3> 
        <p>Years Experience</p> 
</div> 
<div> <h3>100+</h3> 
<p>Happy Clients</p> </div> <div> <h3>50+</h3> <p>Projects Done</p> </div> </div>

<button className="about-button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", }) } > Learn More </button> </div> </div> 
</section> ); }

export default AboutUs;