import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Projects() {
  return (
    <>
      <PageHero crumb="Projects" title="The WGL venture portfolio.">
        Three proprietary ventures currently in the studio, spanning logistics technology and applied
        biotechnology — each engineered through our structured TRL framework.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="projects">

            {/* Traxon */}
            <article className="project reveal" id="traxon">
              <div className="project__media">
                <img src="/assets/img/traxon.png" alt="Traxon — logistics and mobility infrastructure" />
              </div>
              <div className="project__body">
                <div className="project__top">
                  <h2 className="project__name">Traxon<sup className="tm">™</sup></h2>
                  <span className="tag tag--trl">Technology</span>
                </div>
                <p className="project__desc">
                  <strong>Traxon</strong> is an advanced On-Demand Logistics &amp; Mobility SaaS
                  Infrastructure. Designed as a cross-border, B2B digital marketplace, Traxon provides
                  independent couriers, transport operators, and roadside assistance providers with
                  software tools to manage their commercial activities. The platform operates as a
                  neutral software infrastructure, guaranteeing complete operational, pricing, and
                  commercial sovereignty for independent providers.
                </p>
                <dl className="project__meta">
                  <div className="project__row">
                    <dt>Maturity Level</dt>
                    <dd>
                      <span className="tag tag--trl">TRL 7–8</span> &nbsp;Complete Qualified System —
                      preparing to enter market testing and pilot execution across selected test
                      markets prior to full-scale international rollout.
                    </dd>
                  </div>
                  <div className="project__row">
                    <dt>Partnership</dt>
                    <dd>
                      <span className="tag tag--open tag--dot">Open to Strategic &amp; Commercial Partnerships</span>
                      <br />We welcome inquiries from institutional investors, strategic logistics
                      partners, and fleet operators. Detailed dossiers and Data Room access are provided
                      strictly upon execution of an NDA/NC agreement.
                    </dd>
                  </div>
                  <div className="project__row">
                    <dt>Project Link</dt>
                    <dd><a href="https://www.traxon.io" target="_blank" rel="noopener noreferrer">www.traxon.io</a></dd>
                  </div>
                </dl>
              </div>
            </article>

            {/* Ferth Bioventis */}
            <article className="project project--reverse reveal" id="firth-bioventis">
              <div className="project__media">
                <img src="/assets/img/firth.png" alt="Ferth Bioventis — applied biotechnology R&D" />
              </div>
              <div className="project__body">
                <div className="project__top">
                  <h2 className="project__name">Ferth Bioventis<sup className="tm">™</sup></h2>
                  <span className="tag tag--trl">Biotechnology</span>
                </div>
                <p className="project__desc">
                  <strong>Ferth Bioventis</strong> is a DeepTech, IP-driven Applied Biotechnology &amp;
                  Microbiology R&amp;D platform. The project is dedicated to developing innovative,
                  bio-sourced formulations and microbial technologies designed for the agricultural,
                  agrifood, and environmental sectors.
                </p>
                <dl className="project__meta">
                  <div className="project__row">
                    <dt>Maturity Level</dt>
                    <dd>
                      <span className="tag tag--trl">TRL 1–2</span> &nbsp;Strategic Concept &amp;
                      Feasibility Phase — undergoing initial bio-formulation design, intellectual
                      property structuring, and market feasibility assessment.
                    </dd>
                  </div>
                  <div className="project__row">
                    <dt>Partnership</dt>
                    <dd>
                      <span className="tag tag--closed tag--dot">Not Currently Open to External Partnerships</span>
                      <br />Ferth Bioventis is managed exclusively as an internal Venture Studio R&amp;D
                      incubator.
                    </dd>
                  </div>
                  <div className="project__row">
                    <dt>Project Link</dt>
                    <dd>N/A — currently in studio incubation phase.</dd>
                  </div>
                </dl>
              </div>
            </article>

            {/* Biovivax */}
            <article className="project reveal" id="biovivax">
              <div className="project__media">
                <img src="/assets/img/biovivax.png" alt="Biovivax — bio-preservation formulations" />
              </div>
              <div className="project__body">
                <div className="project__top">
                  <h2 className="project__name">Biovivax<sup className="tm">™</sup></h2>
                  <span className="tag tag--trl">Biotechnology</span>
                </div>
                <p className="project__parent">A Ferth Bioventis Project</p>
                <p className="project__desc">
                  <strong>Biovivax</strong> is an innovative bio-preservation project developed under
                  the Ferth Bioventis biotechnology platform. It is dedicated to creating natural,
                  bio-sourced microbial formulations that extend the shelf-life and freshness of
                  agricultural produce, reducing post-harvest losses without the use of synthetic
                  chemical additives.
                </p>
                <dl className="project__meta">
                  <div className="project__row">
                    <dt>Maturity Level</dt>
                    <dd>
                      <span className="tag tag--trl">TRL 1–2</span> &nbsp;Formulation &amp; Feasibility
                      Phase — undergoing initial bio-formulation testing and market feasibility
                      assessment.
                    </dd>
                  </div>
                  <div className="project__row">
                    <dt>Partnership</dt>
                    <dd>
                      <span className="tag tag--open tag--dot">Open to R&amp;D Consortiums &amp; Co-Development</span>
                      <br />We invite agro-industrial groups, biotechnology partners, and research
                      institutions to collaborate on technology transfer and industrialization.
                      Technical memorandums are shared exclusively under an NDA/NC agreement.
                    </dd>
                  </div>
                  <div className="project__row">
                    <dt>Project Link</dt>
                    <dd>N/A — in studio incubation phase.</dd>
                  </div>
                </dl>
              </div>
            </article>

          </div>
        </div>
      </section>

      <CtaBand
        title="Interested in a partnership or licensing opportunity?"
        text="Detailed business dossiers and Data Room access are provided strictly upon execution of a Non-Disclosure and Non-Circumvention Agreement (NDA/NC)."
        to="/contact"
        label="Contact WGL"
      />
    </>
  );
}
