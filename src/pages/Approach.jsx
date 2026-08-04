import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { Icon } from "../components/Icon.jsx";

const trl = [
  ["Stage 01", "TRL 1–2", "Ideation & Strategic Concept", "Formulation of the project concept, market feasibility, and business model design."],
  ["Stage 02", "TRL 3–4", "Proof of Concept & Studio Prototype", "Simulation, algorithm testing, and controlled laboratory validation."],
  ["Stage 03", "TRL 5–6", "Field Validation & Pilot Testing", "Prototype testing in real-world environments under controlled partner conditions."],
  ["Stage 04", "TRL 7–8", "System Qualification & Industrialization", "Finalizing product architecture, regulatory clearances, and operational scale-up."],
  ["Stage 05", "TRL 9", "Commercial Deployment", "Full market launch executed by the dedicated project subsidiary."],
];

const model = [
  ["clock", "Originated internally", "Ideas conceived and owned by WGL from day one."],
  ["plus", "Funded & structured", "Capital, legal and technical frameworks in-house."],
  ["lines", "Co-developed", "Alongside strategic domain experts where relevant."],
  ["factory", "Spun out", "A dedicated subsidiary at commercial maturity."],
];

export default function Approach() {
  return (
    <>
      <PageHero crumb="Our Approach" title="How we transform an idea into an enterprise.">
        A disciplined, end-to-end methodology — from strategic concept to full commercial deployment
        — governed by a structured Technology Readiness Level framework.
      </PageHero>

      {/* Venture studio model */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">The Venture Studio Model</p>
              <h2 className="section-head" style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 24 }}>
                Architects and builders of our own ventures.
              </h2>
              <div className="prose">
                <p>
                  WGL operates as a true Venture Studio: we are the architects and builders of our own
                  ventures. Every project in our pipeline is{" "}
                  <strong>originated, funded, and structured internally</strong> — or co-developed
                  alongside strategic domain experts.
                </p>
                <p>
                  When a venture reaches full commercial maturity, WGL incorporates a{" "}
                  <strong>dedicated operating subsidiary</strong> in the optimal jurisdiction to
                  commercialize the product independently.
                </p>
              </div>
            </div>
            <div className="reveal split__media">
              <div className="grid grid-2" style={{ gap: 20 }}>
                {model.map(([icon, title, text]) => (
                  <div className="card" key={title}>
                    <div className="card__ico"><Icon name={icon} /></div>
                    <h3 style={{ fontSize: 17 }}>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRL framework */}
      <section className="section section--paper">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: 680 }}>
            <p className="eyebrow">Our Development Framework</p>
            <h2>A structured TRL framework, from ideation to deployment.</h2>
            <p className="lead">
              To manage execution risks and guarantee rigorous quality control, all projects are
              developed according to a structured Technology Readiness Level (TRL) framework.
            </p>
          </div>
          <div className="trl">
            {trl.map(([stage, badge, title, text], i) => (
              <div className="trl__item reveal" key={stage}>
                <div>
                  <div className="trl__stage">{stage}</div>
                  <span
                    className="trl__badge"
                    style={i === trl.length - 1 ? { background: "var(--navy)", color: "#fff" } : undefined}
                  >
                    {badge}
                  </span>
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section">
        <div className="container">
          <div className="split split--reverse">
            <div className="reveal">
              <p className="eyebrow">Governance &amp; Active Support</p>
              <h2 className="section-head" style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 24 }}>
                Active oversight, so teams can focus on execution.
              </h2>
              <div className="prose">
                <p>
                  Once an operating subsidiary is spun out at TRL 9, WGL maintains active oversight by
                  providing <strong>ongoing strategic leadership, corporate governance, and centralized
                  support services</strong>.
                </p>
                <p>
                  This allows our operating teams to focus entirely on market execution while
                  leveraging WGL’s corporate infrastructure.
                </p>
              </div>
            </div>
            <div className="reveal split__media">
              <ul className="objectives" style={{ marginTop: 0 }}>
                <li><span className="num">●</span><div><h4>Strategic Leadership</h4><p>Ongoing direction at board and executive level.</p></div></li>
                <li><span className="num">●</span><div><h4>Corporate Governance</h4><p>Audit-ready, compliant, and accountable structures.</p></div></li>
                <li><span className="num">●</span><div><h4>Centralized Support</h4><p>Shared infrastructure and services across ventures.</p></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="See the framework applied across our ventures."
        text="Explore the projects currently moving through the WGL pipeline."
        to="/projects"
        label="View projects"
      />
    </>
  );
}
