import "./Services.css";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "We build fast, responsive and modern websites tailored to your business needs.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "We create attractive, intuitive and user-friendly digital experiences.",
  },
  {
    icon: "📱",
    title: "App Development",
    description:
      "We develop reliable and scalable mobile applications for your business.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "We help businesses grow through digital campaigns and online strategies.",
  },
  {
    icon: "⚙️",
    title: "IT Solutions",
    description:
      "We provide technology solutions to simplify your business operations.",
  },
  {
    icon: "🚀",
    title: "Business Growth",
    description:
      "We help brands improve their digital presence and reach more customers.",
  },
];

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <span className="services-tag">WHAT WE DO</span>

        <h1>
          Our Services, <span>Our Expertise.</span>
        </h1>

        <p>
          At AGS, we deliver innovative digital solutions that help businesses
          grow, evolve and succeed.
        </p>

        <a href="#all-services" className="services-btn">
          Explore Services →
        </a>
      </section>

      <section className="services-section" id="all-services">
        <div className="services-heading">
          <span>OUR EXPERTISE</span>
          <h2>Solutions Designed for You</h2>
          <p>
            Everything you need to build and grow your digital business in one
            place.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <span className="service-number">0{index + 1}</span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Learn More <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta" id="contact">
        <h2>Have a Project in Mind?</h2>
        <p>Let's work together to turn your ideas into reality.</p>
        <a href="mailto:hello@yourdomain.com">Let's Talk →</a>
      </section>
    </main>
  );
}
