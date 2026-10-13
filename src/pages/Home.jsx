import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Arrow, Icon } from "../components/Icon.jsx";
import CtaBand from "../components/CtaBand.jsx";

const slogans = [
  "Building what comes next to shape tomorrow’s industries.",
  "Engineering ventures that create lasting value.",
  "Bridging conceptualization and commercial execution.",
];

function useRotator(items, interval = 4200) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const ref = useRef();
  useEffect(() => {
    ref.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % items.length);
        setVisible(true);
      }, 400);
    }, interval);
    return () => clearInterval(ref.current);
  }, [items.length, interval]);
  return { text: items[idx], visible };
}

export default function Home() {
  const { text, visible } = useRotator(slogans);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <img src="/assets/img/image2.jpeg" alt="" aria-hidden="true" />
        </div>
        <div className="container">
          <div className="hero__inner">
            <p className="eyebrow" style={{ color: "var(--gold-soft)" }}>
              London · Venture Studio &amp; Business Engineering
            </p>
            <h1>
              Turning visions into <span className="accent">ventures</span> engineered for impact.
            </h1>
            <p className="hero__sub">
              <span
                style={{ display: "inline-block", opacity: visible ? 1 : 0, transition: "opacity .4s ease" }}
              >
                {text}
              </span>
            </p>
            <div className="hero__actions">
              <Link className="btn btn--light" to="/approach">
                Our approach <Arrow />
              </Link>
              <Link className="btn btn--light" to="/projects" style={{ background: "transparent" }}>
                View projects
              </Link>
            </div>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <span className="line"></span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">Introduction</p>
              <h2 className="section-head" style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 24 }}>
                Engineering ventures that create lasting value.
              </h2>
              <div className="prose">
                <p>
                  Western Greenfield Limited (WGL) is a London-based{" "}
                  <strong>Venture Studio and Business Engineering firm</strong> specializing in the
                  creation and scaling of high-impact corporate assets. Acting exclusively as a
                  project initiator, developer, and long-term shareholder, WGL conceives, structures,
                  and incubates proprietary ventures across technology, biotechnology, and industrial
                  sectors — from early concept to full market execution.
                </p>
                <p>
                  Operating through a structured Technology Readiness Level framework (TRL 1 to 8), we
                  bridge the gap between initial conceptualization and commercial deployment. Every
                  venture in our pipeline is engineered with a focus on strict regulatory compliance,
                  IP insulation, and international scalability — culminating in the incorporation of
                  dedicated operating subsidiaries when products reach commercial readiness.
                </p>
              </div>
              <Link className="btn btn--ghost" to="/about" style={{ marginTop: 8 }}>
                More about WGL <Arrow />
              </Link>
            </div>

            <div className="reveal split__media">
              <div className="stats" style={{ marginBottom: 2 }}>
                <div className="stat"><div className="stat__n">TRL 1–8</div><div className="stat__l">Structured development framework</div></div>
                <div className="stat"><div className="stat__n">3</div><div className="stat__l">Ventures in active pipeline</div></div>
                <div className="stat"><div className="stat__n">100%</div><div className="stat__l">End-to-end ownership of assets</div></div>
                <div className="stat"><div className="stat__n">3</div><div className="stat__l">Sectors: tech · biotech · industry</div></div>
              </div>
              <div className="card" style={{ marginTop: 24 }}>
                <p style={{ margin: 0, color: "var(--ink)", fontFamily: "var(--ff-serif)", fontSize: 19, lineHeight: 1.5 }}>
                  &ldquo;WGL deploys disciplined methodology and active governance to build resilient,
                  bankable, and market-defining enterprises of tomorrow.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT PROJECTS */}
      <section className="section section--paper">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Current Projects</p>
            <h2>Ventures currently in the studio.</h2>
            <p className="lead">
              A snapshot of our most recent proprietary ventures. Explore the full portfolio for
              maturity levels and partnership opportunities.
            </p>
          </div>
          <div className="grid grid-2">
            <Link className="pcard reveal" to="/projects#tr-x">
              <img src="/assets/img/traxon.png" alt="Project TR-X — logistics & mobility infrastructure" />
              <div className="pcard__body">
                <span className="pcard__tag">Technology · TRL 7–8</span>
                <h3>Project TR-X<sup className="tm">™</sup></h3>
                <p>
                  An advanced On-Demand Logistics &amp; Mobility SaaS infrastructure — a neutral,
                  cross-border B2B marketplace for independent transport operators.
                </p>
                <span className="pcard__link">View project <Arrow /></span>
              </div>
            </Link>
            <Link className="pcard reveal" to="/projects#biovivax">
              <img src="/assets/img/biovivax.png" alt="Biovivax — bio-preservation R&D" />
              <div className="pcard__body">
                <span className="pcard__tag">Biotechnology · TRL 1–2</span>
                <h3>Biovivax<sup className="tm">™</sup></h3>
                <p>
                  A bio-preservation venture developing natural, bio-sourced microbial formulations
                  that extend the shelf-life of agricultural produce.
                </p>
                <span className="pcard__link">View project <Arrow /></span>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }} className="reveal">
            <Link className="btn btn--ghost" to="/projects">
              Explore all projects <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH TEASER */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">The Venture Studio Model</p>
            <h2>We are the architects and builders of our own ventures.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card reveal">
              <div className="card__ico"><Icon name="cube" /></div>
              <h3>Originate &amp; Structure</h3>
              <p>Every project is originated, funded, and structured internally — or co-developed alongside strategic domain experts.</p>
            </div>
            <div className="card reveal">
              <div className="card__ico"><Icon name="bars" /></div>
              <h3>Engineer &amp; Incubate</h3>
              <p>Ventures advance through a rigorous TRL 1–8 framework with regulatory compliance and IP insulation at every stage.</p>
            </div>
            <div className="card reveal">
              <div className="card__ico"><Icon name="globe" /></div>
              <h3>Incorporate &amp; Scale</h3>
              <p>At commercial maturity, WGL incorporates a dedicated operating subsidiary to commercialize the product independently.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Building the market-defining enterprises of tomorrow."
        text="We welcome inquiries from institutional investors, strategic partners, and financial institutions with a legitimate interest in our proprietary ventures."
        to="/contact"
        label="Contact WGL"
      />
    </>
  );
}
