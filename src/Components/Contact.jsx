import React, { useState } from "react";
import "./Contact.css";

const contactItems = [
  {
    icon: "✉",
    title: "Email Us",
    detail: "Have a project in mind?",
    value: "Let's discuss your ideas",
  },
  {
    icon: "📍",
    title: "Our Location",
    detail: "Find us on the map",
    value: "New Delhi, India",
  },
  {
    icon: "🕒",
    title: "Working Hours",
    detail: "Monday – Friday",
    value: "Add your business hours",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Connect an API or email service to send real messages.
    setStatus(
      "Thank you for reaching out! The form is ready to connect to your email service."
    );
  }

  return (
    <main className="ags-contact">
      {/* HERO */}
      <section className="ags-hero">
        <div className="ags-hero-content">
          <span className="ags-eyebrow">
            <span className="ags-status-dot" />
            WE'RE HERE TO HELP
          </span>

          <h1>
            Let's Start a
            <br />
            <span>Conversation.</span>
          </h1>

          <p>
            Every great idea starts with a conversation.
            Tell us about your goals, your challenges,
            and how we can help you move forward.
          </p>

          <a href="#ags-form" className="ags-primary-btn">
            Get in Touch <span>↗</span>
          </a>
        </div>

        <div className="ags-hero-art" aria-hidden="true">
          <div className="ags-orbit ags-orbit-one" />
          <div className="ags-orbit ags-orbit-two" />
          <div className="ags-art-card">
            <div className="ags-art-icon">✦</div>
            <span>LET'S CONNECT</span>
            <h2>Great things<br />start here.</h2>
            <div className="ags-art-line" />
            <div className="ags-art-footer">
              <span>Ideas</span>
              <span>+</span>
              <span>People</span>
            </div>
          </div>
          <div className="ags-floating-dot ags-dot-one" />
          <div className="ags-floating-dot ags-dot-two" />
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="ags-info-grid">
        {contactItems.map((item, index) => (
          <article
            className="ags-info-card"
            key={item.title}
            style={{ "--card-index": index }}
          >
            <div className="ags-info-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            <span>{item.value}</span>
          </article>
        ))}
      </section>

      {/* FORM + MAP */}
      <section className="ags-contact-section">
        <div className="ags-form-panel" id="ags-form">
          <div className="ags-section-label">SEND AN ENQUIRY</div>
          <h2>Tell us about your project.</h2>
          <p className="ags-section-description">
            Fill in the form below. We'd love to hear
            what you're working on.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="ags-form-row">
              <div className="ags-field">
                <label htmlFor="ags-name">Full name</label>
                <input
                  id="ags-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="ags-field">
                <label htmlFor="ags-email">Email address</label>
                <input
                  id="ags-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="ags-field">
              <label htmlFor="ags-subject">Subject</label>
              <input
                id="ags-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="ags-field">
              <label htmlFor="ags-message">Your message</label>
              <textarea
                id="ags-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a little about your project..."
                rows="5"
                required
              />
            </div>

            <button className="ags-submit-btn" type="submit">
              Send Message <span>→</span>
            </button>

            {status && (
              <p className="ags-form-status" role="status">
                {status}
              </p>
            )}

            <p className="ags-privacy-note">
              Your details should be handled securely.
            </p>
          </form>
        </div>

        {/* MAP */}
        <aside className="ags-map-panel">
          <div className="ags-section-label">COME SAY HELLO</div>
          <h2>Find our location.</h2>
          <p className="ags-section-description">
            Explore our location on the map. Replace the
            sample location with your office address.
          </p>

          <div className="ags-map">
            <iframe
              title="AGS office location"
              src="https://maps.google.com/maps?q=New%20Delhi%2C%20India&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <a
            className="ags-directions"
            href="https://www.google.com/maps/search/?api=1&query=New+Delhi+India"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps <span>↗</span>
          </a>

          <div className="ags-map-note">
            <span>✦</span>
            <p>
              <strong>Have questions?</strong>
              <br />
              Use the form to tell us what you need.
            </p>
          </div>
        </aside>
      </section>

      {/* FINAL CTA */}
      <section className="ags-bottom-cta">
        <div>
          <span>YOUR NEXT STEP STARTS HERE</span>
          <h2>Have an idea? Let's make it happen.</h2>
          <p>
            We'd love to hear from you and explore
            what's possible together.
          </p>
        </div>
        <a href="#ags-form">Start a Conversation ↗</a>
      </section>
    </main>
  );
}