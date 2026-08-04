import { useEffect, useState } from "react";
import PageHero from "../components/PageHero.jsx";

const toc = [
  ["general", "1. General Provisions & Publisher"],
  ["ip", "2. Intellectual Property"],
  ["nature", "3. Nature of the Site"],
  ["submissions", "4. Unsolicited Submissions"],
  ["disclaimer", "5. Legal Disclaimer"],
  ["data", "6. Data Protection"],
  ["liability", "7. Limitation of Liability"],
  ["law", "8. Governing Law & Jurisdiction"],
];

export default function Terms() {
  const [active, setActive] = useState("general");

  useEffect(() => {
    const sections = toc.map(([id]) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHero crumb="Terms & Conditions" title="Terms & Conditions of Use.">
        Official document — Western Greenfield Limited. Please read these Terms and Conditions of Use
        carefully before using this institutional website.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="legal">
            {/* TOC */}
            <aside className="legal__toc">
              <ol>
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <a href={"#" + id} className={active === id ? "active" : undefined}>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Body */}
            <div className="legal__body">
              <p className="legal__note">
                Access to and navigation of the Site imply the unconditional, express, and unreserved
                acceptance by every visitor (the “User”) of the present Terms and Conditions of Use. If
                the User does not accept these conditions in full, they must immediately cease all
                navigation of the Site.
              </p>

              <section id="general">
                <h2>1. General Provisions &amp; Identification of the Publisher</h2>
                <h3>1.1 Publishing Entity</h3>
                <p>
                  This institutional website (hereinafter the “Site”) is the exclusive property of and
                  is published by Western Greenfield Limited (hereinafter “WGL”), a private limited
                  company under English law, registered with Companies House under number 17029262,
                  whose registered office is located in the United Kingdom.
                </p>
                <h3>1.2 Scope &amp; Acceptance of the Conditions</h3>
                <p>
                  Access to and navigation of the Site imply the unconditional, express, and unreserved
                  acceptance by the User of these Terms and Conditions of Use. Should the User not
                  accept these conditions in their entirety, they are required to cease all navigation
                  of the Site immediately.
                </p>
                <h3>1.3 Right of Unilateral Modification</h3>
                <p>
                  WGL reserves the sovereign and discretionary right to modify, amend, or update these
                  Terms and Conditions at any time, without prior notice. Modifications take effect upon
                  their publication on the Site. It is the User’s responsibility to consult this page
                  regularly to stay informed of any updates.
                </p>
              </section>

              <section id="ip">
                <h2>2. Intellectual Property &amp; Ownership of WGL Projects</h2>
                <h3>2.1 Exclusive Ownership of the Site and its Contents</h3>
                <p>
                  The overall architecture of the Site, together with all texts, graphics, images,
                  sounds, videos, logos, trademarks, interfaces, and computer code comprising it, are
                  the exclusive intellectual and industrial property of WGL (or its licensors) and are
                  protected by British law and international treaties relating to copyright and
                  intellectual property.
                </p>
                <h3>2.2 Status of the Projects Presented</h3>
                <p>
                  The User formally acknowledges and accepts that all projects, concepts, business
                  models, startups, and case studies presented on the Site are strictly proprietary
                  assets of WGL. They are the direct result of WGL’s exclusive incubation and business
                  engineering process. No information presented on the Site may be construed as
                  conferring any right, license, or authorization to replicate, exploit, or appropriate
                  these projects for commercial or personal purposes.
                </p>
                <h3>2.3 Protection of Methodologies and the GOCEP Framework</h3>
                <p>
                  References to WGL’s internal methodologies — notably the Guide d’Orientation à la
                  Conduite et Étude de Projet (GOCEP), the adapted TRL evaluation scale, and any Business
                  Engineering technique mentioned on the Site — constitute trade secrets and exclusive
                  know-how of WGL. Their reproduction, reverse engineering, or use by third parties is
                  strictly prohibited.
                </p>
                <h3>2.4 Usage Restrictions</h3>
                <p>
                  Except with prior, formal, written authorization from a legally empowered
                  representative of WGL, it is strictly forbidden to:
                </p>
                <ul>
                  <li>Copy, reproduce, modify, republish, download, post, transmit, or distribute all or part of the Site’s content.</li>
                  <li>Create derivative works based on the projects presented by WGL.</li>
                  <li>Use framing or mirroring techniques to integrate the Site into other platforms.</li>
                </ul>
              </section>

              <section id="nature">
                <h2>3. Nature of the Site &amp; Terms of Use</h2>
                <h3>3.1 Institutional Information Site</h3>
                <p>
                  This Site is designed and operated exclusively as an institutional showcase portal. It
                  aims to present WGL’s investment thesis, Venture Studio model, and internal project
                  portfolio. The Site contains no member area, no publicly accessible Data Room, and does
                  not allow the creation of user accounts.
                </p>
                <h3>3.2 Investor &amp; Partner Contact</h3>
                <p>
                  The Site provides communication channels (forms, contact email addresses) intended
                  exclusively to facilitate connection with potential investors, industrial partners, or
                  financial institutions expressing a legitimate interest in WGL’s proprietary projects.
                  Any use of these channels for unsolicited commercial prospecting, spam, or harassment
                  is prohibited and will be subject to legal action.
                </p>
              </section>

              <section id="submissions">
                <h2>4. Unsolicited Submissions &amp; Absence of Confidentiality</h2>
                <h3>4.1 Spontaneous Submission of Documents</h3>
                <p>
                  As a Venture Studio, WGL conceives and develops its own ideas internally. The Site in
                  no way constitutes a call for projects or an incubator open to the public. Nevertheless,
                  should a User choose, on their own initiative, to transmit unsolicited documents to WGL
                  (such as pitch decks, business concepts, business plans, algorithms, ideas, or
                  intellectual creations) by email, via a contact form, or by any other means, the
                  following stipulations (4.2 and 4.3) apply inexorably.
                </p>
                <h3>4.2 Strict Exclusion of Any Confidentiality Obligation</h3>
                <p>
                  WGL categorically rejects any obligation of confidentiality (implied or explicit)
                  regarding any information or document transmitted spontaneously, unless a formal written
                  Non-Disclosure Agreement (NDA) has been negotiated and signed beforehand by a duly
                  authorized representative of WGL. In the absence of such a prior executed NDA, any
                  material received will be legally deemed non-confidential, royalty-free, and in the
                  public domain in the eyes of WGL.
                </p>
                <h3>4.3 Release and Full Discharge of Liability</h3>
                <p>
                  WGL and its subsidiaries continuously develop numerous concepts and methodologies. It
                  is possible that a project under incubation within WGL bears fortuitous similarities to
                  an idea submitted on an unsolicited basis by a third party. A User agreeing to transmit
                  unsolicited information expressly, irrevocably, and definitively waives any claim, suit,
                  legal action, or demand for financial compensation against WGL, its officers, directors,
                  or employees based on any alleged appropriation, breach of confidentiality, or
                  unauthorized use of their idea.
                </p>
              </section>

              <section id="disclaimer">
                <h2>5. Legal Disclaimer &amp; Absence of Contractual Commitment</h2>
                <h3>5.1 Purely Informative Character (“As-Is”)</h3>
                <p>
                  The information, market financial data, project descriptions, and development horizons
                  published on the Site are provided “as-is” and “as available”, strictly for indicative
                  purposes. Although WGL strives to maintain high standards of rigor, the company in no
                  way guarantees the accuracy, completeness, relevance, or real-time updating of the
                  information presented.
                </p>
                <h3>5.2 No Public Offer or Advice</h3>
                <p>
                  No information contained on this Site may be interpreted as a public offer to buy or
                  sell securities, a solicitation for investment, or any legal, tax, financial, or
                  accounting advice. Potential investors are required to carry out their own due diligence
                  and consult their own accredited advisors before making any decision.
                </p>
                <h3>5.3 No Business Relationship</h3>
                <p>
                  Merely browsing the Site, or using the contact forms to reach WGL’s teams, creates no
                  automatic business relationship, partnership contract, mandate, or advisory relationship
                  between the User and WGL. Any partnership or commitment shall have legal existence only
                  following the signature of formal contractual documentation (Letter of Intent, Term
                  Sheet, Partnership Agreement).
                </p>
              </section>

              <section id="data">
                <h2>6. Confidentiality &amp; Protection of Personal Data</h2>
                <h3>6.1 Limited Scope of Collection</h3>
                <p>
                  In accordance with the institutional nature of the Site, the collection of personal data
                  is strictly limited to information voluntarily provided by the User in the context of a
                  contact request (name, professional email address, function, organization).
                </p>
                <h3>6.2 Compliance &amp; Processing</h3>
                <p>
                  Collected data is processed with the utmost rigor, for the sole purpose of responding to
                  the User’s requests and qualifying partnership enquiries. WGL undertakes to process this
                  data in strict compliance with the United Kingdom General Data Protection Regulation (UK
                  GDPR). WGL does not sell or rent personal data to third parties. For further details
                  regarding the exercise of your rights (access, rectification, erasure), please refer to
                  our full Privacy Policy available on the Site.
                </p>
              </section>

              <section id="liability">
                <h2>7. Limitation of Liability &amp; Warranty Exclusions</h2>
                <h3>7.1 Technical Availability</h3>
                <p>
                  WGL disclaims all liability for interruptions, failures, or temporary inaccessibility of
                  the Site arising from maintenance operations, updates, technical server failures, or
                  events constituting force majeure.
                </p>
                <h3>7.2 Exclusion of Damages</h3>
                <p>
                  To the fullest extent permitted by applicable law, WGL, its administrators, officers,
                  employees, and subsidiaries shall under no circumstances be held liable for direct,
                  indirect, incidental, punitive, or consequential damages (including, without limitation,
                  loss of profits, loss of revenue, loss of data, or loss of a commercial opportunity)
                  resulting from access to, use of, or inability to use the Site, from reliance on the
                  information found therein, or from the transmission of unsolicited documents by the User.
                </p>
              </section>

              <section id="law">
                <h2>8. Governing Law &amp; Competent Jurisdiction</h2>
                <h3>8.1 Exclusive Submission</h3>
                <p>
                  These Terms and Conditions of Use, as well as any question or dispute arising from or
                  related to the use of the Site, are governed, interpreted, and enforced exclusively in
                  accordance with the Law of England and Wales (UK Law), without giving effect to
                  conflict-of-laws principles.
                </p>
                <h3>8.2 Attribution of Jurisdiction</h3>
                <p>
                  In the event of any dispute, controversy, or claim arising from these Terms or from the
                  use of the Site that cannot be resolved amicably, the Courts of London (United Kingdom)
                  shall have exclusive jurisdiction to hear and settle the matter. The User irrevocably
                  accepts the jurisdiction of these courts.
                </p>
                <p className="legal__note" style={{ marginTop: 28 }}>
                  This document is the exclusive intellectual property of Western Greenfield Limited. Any
                  unauthorized reproduction, in whole or in part, is punishable by law. © 2026 Western
                  Greenfield Limited. All rights reserved.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
