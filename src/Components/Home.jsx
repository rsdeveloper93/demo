import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ---------- SEO ---------- */
const META = {
  title: "ISO Certification Training India | ISO & EHS | Egrowth India",
  description:
    "Build practical ISO and EHS skills with ISO certification training India teams can apply at work. Explore ISO 9001, 14001 and 45001 courses. Enquire now.",
  slug: "/iso-certification-training-india",
};

/* ---------- Content ---------- */
const FAQS = [
  {
    q: "What is ISO certification training?",
    a: "ISO certification training is structured learning that teaches you to implement, audit and maintain an ISO management system standard such as ISO 9001 or ISO 14001. Courses range from awareness sessions to internal auditor and lead implementer programmes. ISO certification training India professionals attend helps them apply a standard correctly in daily work.",
  },
  {
    q: "Who should attend ISO and EHS training?",
    a: "Managers, auditors, engineers and officers who implement or oversee a management system should attend. That includes HR and compliance heads, quality and EHS managers, IT security teams, plant supervisors, internal auditors and working professionals who want to move into quality, safety, environmental or information security roles.",
  },
  {
    q: "What is the difference between ISO training and ISO certification of an organisation?",
    a: "ISO training builds the skills of individuals, while ISO certification confirms that an organisation's management system meets a standard. Training prepares your people to implement and audit the system. Certification is awarded after an independent certification body audits the organisation. ISO certification training India courses support the first step, not the audit itself.",
  },
  {
    q: "What are the benefits of ISO 27001 training India?",
    a: "ISO 27001 training helps teams build and maintain an information security management system. Participants learn to assess information risks, choose controls and prepare for audits. ISO 27001 training India teams complete strengthens data protection, supports customer confidence and gives IT security staff a shared compliance framework.",
  },
  {
    q: "What are the benefits of ISO 9001 training India?",
    a: "ISO 9001 training helps you run a quality management system that delivers consistent products and services. Participants learn process control, risk-based thinking, internal audits and corrective action. ISO 9001 training India quality teams attend helps reduce repeat errors and supports continual improvement.",
  },
  {
    q: "What are the benefits of ISO 14001 training India?",
    a: "ISO 14001 training helps organisations manage environmental responsibilities in a structured way. Participants learn to identify environmental aspects, meet legal requirements and control waste, emissions and resource use. ISO 14001 training India sites invest in also builds readiness for environmental incidents and audits.",
  },
  {
    q: "What are the benefits of ISO 45001 training India?",
    a: "ISO 45001 training helps employers prevent workplace injury and ill health through a structured occupational health and safety system. Participants learn hazard identification, risk assessment, incident investigation and worker participation. ISO 45001 training India safety teams complete supports legal compliance and a stronger safety culture.",
  },
  {
    q: "What does EHS training cover?",
    a: "EHS training covers environment, health and safety controls at work. Topics include work at height, confined space, permit to work, toolbox talks, waste management and energy reviews. EHS training India employers arrange can also include NEBOSH IGC preparation for safety professionals working towards a formal qualification.",
  },
  {
    q: "How does ISO training help careers or compliance?",
    a: "ISO training builds the auditing, implementation and risk management skills that quality, EHS and IT roles rely on. Trained staff keep documentation, controls and internal audits ready for certification and surveillance audits, which supports both career progression and long-term organisational compliance.",
  },
  {
    q: "How can I enquire or enrol with Egrowth India?",
    a: "Visit the Egrowth India website, browse the course list and use the Contact page to share your requirements. You can ask about public courses or request in-house training for your team, at your site or online. Egrowth India can help you identify the programme that fits your role.",
  },
];

const COURSES = [
  {
    code: "ISO 27001",
    tag: "Information security",
    h: "ISO 27001 training India: information security management",
    p: "ISO 27001 is the international standard for information security management systems (ISMS). ISO 27001 training India teams look for covers information risk, control selection and audit readiness. To discuss ISO 27001 requirements, contact Egrowth India.",
  },
  {
    code: "ISO 9001",
    tag: "Quality",
    h: "ISO 9001 training India: quality management",
    p: "ISO 9001 is the international standard for quality management systems (QMS). ISO 9001 training India quality teams take runs from awareness to internal auditor and lead implementer levels, covering process control, risk-based thinking and corrective action.",
  },
  {
    code: "ISO 14001",
    tag: "Environment",
    h: "ISO 14001 training India: environmental management",
    p: "ISO 14001 is the international standard for environmental management systems (EMS). ISO 14001 training India sites choose explains environmental aspects, legal compliance, operational control and emergency preparedness, which suits plants and facilities managing waste, emissions and resources.",
  },
  {
    code: "ISO 45001",
    tag: "Health & safety",
    h: "ISO 45001 training India: occupational health and safety",
    p: "ISO 45001 is the international standard for occupational health and safety (OH&S) management systems. ISO 45001 training India safety teams attend focuses on hazard identification, risk assessment and incident investigation, helping employers protect workers and meet safety obligations.",
  },
  {
    code: "EHS",
    tag: "Workplace controls",
    h: "EHS training India: environment, health and safety",
    p: "EHS training covers the practical controls that protect people and the environment at work. EHS training India programmes from Egrowth India include work at height, confined space, permit to work, toolbox talks, NEBOSH IGC preparation, waste management and energy reviews under ISO 50001.",
  },
];

const ATTENDEES = [
  "HR and compliance heads who need audit-ready policies and evidence",
  "Quality managers and process owners seeking ISO 9001 training India for stronger QMS performance",
  "Plant and site managers who plan ISO 14001 training India for waste, emissions and resource control",
  "Safety officers and supervisors who need ISO 45001 training India to control workplace hazards",
  "EHS managers who need EHS training India for day-to-day workplace controls",
  "IT security teams and risk managers who need ISO 27001 training India for ISMS work",
  "Internal auditors, aspiring lead auditors and working professionals in manufacturing, cement, power, mining, construction and services",
];

const LEARN = [
  "Read clauses and requirements in plain workplace terms",
  "Plan, conduct and report internal audits and raise corrective actions",
  "Apply risk management to daily operations",
  "Build manuals, procedures and checklists that auditors can follow",
  "Prepare for certification audits and lead auditor exams",
];

const WHY = [
  "Practising QHSE and ESG professionals build and deliver every programme",
  "Onsite training is built around your sector, processes and team",
  "Implementation support includes manuals, procedures, audit checklists and gap assessments",
  "A free library of templates and checklists supports learning after the course",
];

const STEPS = [
  "Decide your goal: awareness, internal auditor, lead implementer or EHS skills.",
  "Choose your format: a public course, or in-house training at your site or online.",
  "Browse the course list on the Egrowth India website.",
  "Contact Egrowth India with your requirements and enquire about dates and options.",
];

/* ---------- Component ---------- */
export default function IsoCertificationTrainingIndia({
  contactHref = "/contact",
}) {
  const [open, setOpen] = useState(0);

  // Meta tags + FAQPage JSON-LD (use react-helmet / Next <Head> instead if your app has it)
  useEffect(() => {
    document.title = META.title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", META.description);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <main className="eg">
      <style>{CSS}</style>

      <header className="eg-hero">
        <div className="eg-wrap">
          <p className="eg-brand">Egrowth India · QHSE &amp; ESG learning</p>
          <h1>
            ISO Certification Training India: Practical Courses for Compliance
            and Careers
          </h1>
          <p className="eg-lead">
            ISO certification training India professionals can use at work
            teaches them to implement, audit and improve management systems
            built on international standards. Egrowth India, the flagship QHSE
            and ESG learning venture of Bexex Global, delivers ISO and EHS
            courses through public programmes and in-house training.
          </p>
          <p>
            Learn alongside a free community of more than 48,000 practitioners.
            Enquire now to find the right course for your role or team.
          </p>
          <a className="eg-btn" href={"#Our-ISO"}>
            Enquire now
          </a>
        </div>
      </header>

      <section className="eg-wrap eg-section">
        <h2>
          What is ISO certification training, and why do Indian organisations
          need it?
        </h2>
        <div className="eg-cols">
          <p>
            ISO certification training teaches professionals how an ISO
            management system standard works and how to apply, audit or maintain
            it inside an organisation. Programmes range from awareness sessions
            to internal auditor, lead implementer and lead auditor exam
            preparation.
          </p>
          <p>
            Indian organisations need this skill because customers, regulators
            and supply-chain partners often expect proof of controlled quality,
            safety, environmental and information security practices. Trained
            staff help a business prepare for certification and keep its systems
            effective afterwards.
          </p>
        </div>
      </section>

      <section className="eg-band" id="Our-ISO">
        <div className="eg-wrap eg-section">
          <h2>Our ISO certification training India programmes</h2>
          <p className="eg-intro">
            Egrowth India builds its standards training around the roles people
            actually hold, from awareness inductions to internal auditor and
            lead implementer levels. Courses are mapped to certification bodies
            and can run at your site or online.
          </p>
          <div className="eg-courses">
            {COURSES.map((c) => (
              <article key={c.code} className="eg-course">
                <div className="eg-plate">
                  <strong>{c.code}</strong>
                  <span>{c.tag}</span>
                </div>
                <div>
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eg-wrap eg-section">
        <h2>Who should attend ISO and EHS training?</h2>
        <p>
          ISO and EHS training suits anyone who implements, audits or is
          accountable for a management system or workplace controls. Typical
          participants include:
        </p>
        <ul className="eg-list">
          {ATTENDEES.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <h3>Who should attend ISO 27001 training?</h3>
        <p>
          IT security teams, ISMS coordinators, compliance managers and risk
          owners gain the most. Anyone supporting customer security reviews also
          benefits.
        </p>
      </section>

      <section className="eg-band">
        <div className="eg-wrap eg-section eg-cols">
          <div>
            <h2>
              What will you learn, and how does it help careers and compliance?
            </h2>
            <p>
              ISO training gives you the skills to interpret a standard, assess
              risk, audit a system and drive continual improvement. You learn
              to:
            </p>
            <ul className="eg-list">
              {LEARN.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p>
              For careers, our ISO certification training India courses build
              the skills behind roles such as internal auditor, quality manager,
              EHS officer and ISMS coordinator. For compliance, trained teams
              keep documentation, controls and audits ready year after year.
            </p>
          </div>
          <div>
            <h2>Why choose Egrowth India?</h2>
            <p>
              Egrowth India combines practical ISO and EHS training with a free
              community and ready-to-use resources. The benefits are
              straightforward:
            </p>
            <ul className="eg-list">
              {WHY.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="eg-wrap eg-section">
        <h2>How to get started with ISO certification training India</h2>
        <p>
          You can start ISO certification training India in four simple steps:
        </p>
        <ol className="eg-steps">
          {STEPS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
      </section>

      <section className="eg-cta">
        <div className="eg-wrap">
          <h2>Ready to start ISO certification training India?</h2>
          <p>
            Egrowth India helps you build ISO and EHS skills that hold up in
            audits and in daily operations. Choose ISO 9001, ISO 14001, ISO
            45001 or EHS training, or ask about ISO 27001 for your team.
          </p>
          <Link to="/"
           className="eg-btn eg-btn-dark" >
            Enquire now
          </Link>
          <p className="eg-small">
            Or contact Egrowth India today to take the next step.
          </p>
        </div>
      </section>

      <section className="eg-wrap eg-section">
        <h2>Frequently Asked Questions</h2>
        <div className="eg-faq">
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              className={`eg-faq-item${open === i ? " is-open" : ""}`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  {f.q}
                  <span aria-hidden="true">{open === i ? "−" : "+"}</span>
                </button>
              </h3>
              {open === i && <p id={`faq-${i}`}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ---------- Styles ---------- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap');
.eg{--ink:#0b2a4a;--paper:#ffffff;--band:#eef3f9;--signal:#f47b20;--rule:#d3deea;--muted:#4a5b6a;
  font-family:'Public Sans',system-ui,sans-serif;color:var(--ink);background:var(--paper);line-height:1.65;font-size:17px}
.eg *{box-sizing:border-box}
.eg-wrap{max-width:1080px;margin:0 auto;padding:0 24px}
.eg-section{padding-top:56px;padding-bottom:56px}
.eg h1,.eg h2{font-family:'Fraunces',Georgia,serif;line-height:1.15;margin:0 0 20px;letter-spacing:-.01em}
.eg h1{font-size:clamp(2rem,5vw,3.4rem);max-width:20ch}
.eg h2{font-size:clamp(1.5rem,3vw,2.1rem);max-width:28ch}
.eg h3{font-size:1.1rem;margin:0 0 8px}
.eg p{margin:0 0 16px;max-width:68ch}
.eg-hero{background:var(--ink);color:#f4f6f3;padding:72px 0 64px;border-bottom:8px solid var(--signal)}
.eg-hero .eg-lead{font-size:1.15rem}
.eg-brand{font-size:.9rem;color:var(--signal);margin-bottom:20px}
.eg-btn{display:inline-block;background:var(--signal);color:var(--ink);font-weight:700;text-decoration:none;
  padding:14px 28px;border-radius:2px;margin-top:8px}
.eg-btn:hover{filter:brightness(.95)}
.eg-btn-dark{background:var(--ink);color:#fff}
.eg a:focus-visible,.eg button:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
.eg-hero a:focus-visible{outline-color:#fff}
.eg-band{background:var(--band)}
.eg-cols{display:grid;grid-template-columns:1fr 1fr;gap:40px}
.eg-intro{margin-bottom:32px}
.eg-courses{display:grid;gap:0;border-top:1px solid var(--rule)}
.eg-course{display:grid;grid-template-columns:180px 1fr;gap:28px;padding:28px 0;border-bottom:1px solid var(--rule)}
.eg-course p{margin:0}
.eg-plate{align-self:start;border:2px solid var(--ink);background:var(--signal);padding:10px 14px;display:flex;flex-direction:column}
.eg-plate strong{font-size:1.15rem}
.eg-plate span{font-size:.85rem}
.eg-list{padding-left:20px;margin:0 0 20px;max-width:68ch}
.eg-list li{margin-bottom:10px;padding-left:4px}
.eg-list li::marker{color:var(--signal)}
.eg-steps{padding-left:0;margin:0;list-style:none;counter-reset:s;display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.eg-steps li{counter-increment:s;border-top:4px solid var(--ink);padding-top:14px}
.eg-steps li::before{content:"Step " counter(s);display:block;font-weight:700;margin-bottom:6px;color:var(--muted)}
.eg-cta{background:var(--signal);padding:56px 0}
.eg-cta h2{max-width:24ch}
.eg-small{margin:16px 0 0;font-size:.95rem}
.eg-faq{border-top:1px solid var(--rule);max-width:820px}
.eg-faq-item{border-bottom:1px solid var(--rule)}
.eg-faq-item h3{margin:0}
.eg-faq-item button{width:100%;display:flex;justify-content:space-between;gap:16px;align-items:center;text-align:left;
  background:none;border:0;padding:18px 0;font:inherit;font-weight:700;color:inherit;cursor:pointer}
.eg-faq-item p{padding-bottom:18px;margin:0}
@media(max-width:820px){
  .eg-cols{grid-template-columns:1fr;gap:8px}
  .eg-course{grid-template-columns:1fr;gap:14px}
  .eg-steps{grid-template-columns:1fr}
  .eg-plate{flex-direction:row;gap:12px;align-items:baseline}
}
`;
