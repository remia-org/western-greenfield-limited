import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { Icon } from "../components/Icon.jsx";

const objectives = [
  ["01", "Capital-Efficiency", "Maximizing value creation through structured incubation and lean operational models."],
  ["02", "IP Protection", "Securing and insulating core intellectual property assets at the highest international standards."],
  ["03", "Regulatory Compliance", "Structuring every venture to be fully compliant, audit-ready, and governance-aligned."],
  ["04", "Global Scalability", "Building purpose-driven subsidiaries optimized for rapid deployment across international markets."],
];

export default function About() {
  return (
    <>
      <PageHero crumb="About Us" title="Business engineers of high-impact ventures.">
        Western Greenfield Limited is a London-based Venture Studio specializing in Business
        Engineering and Venture Development — identifying, conceiving, and building projects from
        early-stage ideas through to complete operational readiness.
      </PageHero>

      {/* Who we are */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">Who We Are</p>
              <h2 className="section-head" style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 24 }}>
                End-to-end owners of every venture we build.
              </h2>
              <div className="prose">
                <p>
                  Western Greenfield Limited (WGL) is a London-based Venture Studio specializing in{" "}
                  <strong>Business Engineering and Venture Development</strong>. We identify, conceive,
                  and build high-impact technological, commercial, and scientific projects — from
                  early-stage ideas through to complete operational readiness.
                </p>
                <p>
                  Unlike traditional advisory firms or incubators, WGL acts exclusively as a{" "}
                  <strong>project initiator, developer, and long-term shareholder</strong>. We maintain
                  end-to-end ownership over our incubated assets, providing the strategic, technical,
                  and legal frameworks required to build resilient and bankable enterprises.
                </p>
              </div>
            </div>
            <div className="reveal split__media">
              <div className="card">
                <div className="card__ico"><Icon name="building" /></div>
                <h3>Not an incubator. A builder.</h3>
                <p style={{ color: "#3d4757", fontSize: 16 }}>
                  WGL originates, funds, and structures ventures internally — retaining ownership and
                  governance from the first concept to commercial deployment.
                </p>
              </div>
              <div className="card" style={{ marginTop: 20 }}>
                <div className="card__ico"><Icon name="star" /></div>
                <h3>Technology · Life sciences · Industry</h3>
                <p style={{ color: "#3d4757", fontSize: 16 }}>
                  A diversified portfolio of ventures engineered for long-term market leadership and
                  sustainable international expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section--paper">
        <div className="container">
          <div className="grid grid-2">
            <div className="card reveal" style={{ padding: "44px 40px" }}>
              <p className="eyebrow">Our Mission</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,34px)", marginBottom: 16 }}>
                Bridging concept and commercial execution.
              </h2>
              <p style={{ color: "#3d4757", margin: 0 }}>
                Our mission is to bridge the gap between initial conceptualization and commercial
                execution. We deploy disciplined methodology, rigorous risk management, and advanced
                Business Engineering to transform greenfield ideas into scalable, international
                business units.
              </p>
            </div>
            <div className="card reveal" style={{ padding: "44px 40px" }}>
              <p className="eyebrow">Our Vision</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,34px)", marginBottom: 16 }}>
                A diversified portfolio built to lead.
              </h2>
              <p style={{ color: "#3d4757", margin: 0 }}>
                Our vision is to build a diversified portfolio of innovative ventures across
                technology, life sciences, and industry. Each venture is engineered to achieve
                long-term market leadership, operational independence, and sustainable international
                expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key strategic objectives */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: 640 }}>
            <p className="eyebrow">Key Strategic Objectives</p>
            <h2>The principles that govern every venture.</h2>
          </div>
          <ol className="objectives">
            {objectives.map(([num, title, text]) => (
              <li className="reveal" key={num}>
                <span className="num">{num}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Discover how we transform ideas into ventures."
        text="Explore the Venture Studio model and our structured TRL development framework."
        to="/approach"
        label="Our approach"
      />
    </>
  );
}
