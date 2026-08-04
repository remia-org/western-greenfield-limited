import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { Arrow, Icon } from "../components/Icon.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      "Website enquiry — " + (data.get("organisation") || data.get("name") || "")
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\n` +
        `Organisation: ${data.get("organisation") || ""}\n` +
        `Email: ${data.get("email") || ""}\n` +
        `Interest: ${data.get("interest") || ""}\n\n` +
        `${data.get("message") || ""}`
    );
    setSent(true);
    window.location.href = `mailto:office@westerngreenfield.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero crumb="Contact" title="Get in touch with WGL.">
        Our channels are intended to facilitate contact with potential investors, industrial
        partners, and financial institutions with a legitimate interest in our proprietary ventures.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: details */}
            <div className="reveal">
              <p className="eyebrow">Head Office</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,34px)", marginBottom: 28 }}>
                London, United Kingdom
              </h2>

              <div className="contact-card">
                <div className="contact-card__ico"><Icon name="pin" strokeWidth="1.7" /></div>
                <div>
                  <h4>Registered Address</h4>
                  <p>Quadrant House, Floor 6,<br />4 Thomas More Square,<br />London, United Kingdom, E1W 1YW</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__ico"><Icon name="mail" strokeWidth="1.7" /></div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:office@westerngreenfield.com">office@westerngreenfield.com</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__ico"><Icon name="phone" strokeWidth="1.7" /></div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+442039961448">+44 20 3996 1448</a></p>
                </div>
              </div>

              <div className="map-embed" style={{ marginTop: 24 }}>
                <iframe
                  title="WGL office location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=4%20Thomas%20More%20Square%2C%20London%20E1W%201YW&output=embed"
                ></iframe>
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal">
              <div className="card" style={{ padding: "clamp(28px,3vw,44px)" }}>
                <p className="eyebrow">Make an enquiry</p>
                <h2 style={{ fontSize: "clamp(22px,2.6vw,30px)", marginBottom: 8 }}>
                  Investor &amp; partner enquiries
                </h2>
                <p style={{ color: "var(--steel)", fontSize: 15, marginBottom: 26 }}>
                  Complete the form below and our team will respond to qualified requests.
                </p>
                <form className="form" onSubmit={handleSubmit} noValidate>
                  <div className="form__row">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input id="name" name="name" type="text" autoComplete="name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="organisation">Organisation</label>
                      <input id="organisation" name="organisation" type="text" autoComplete="organization" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="email">Professional email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="interest">Area of interest</label>
                    <select id="interest" name="interest" defaultValue="">
                      <option value="" disabled>Please select…</option>
                      <option>Strategic / commercial partnership</option>
                      <option>Institutional investment</option>
                      <option>Licensing opportunity</option>
                      <option>R&amp;D consortium / co-development</option>
                      <option>General enquiry</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about your interest in WGL…"></textarea>
                  </div>
                  <div className={"form__msg ok" + (sent ? " show" : "")}>
                    Thank you — your email client will open to send the enquiry to our team.
                  </div>
                  <button className="btn btn--primary" type="submit" style={{ justifyContent: "center" }}>
                    Send enquiry <Arrow />
                  </button>
                  <p className="form__note">
                    By submitting, you acknowledge our{" "}
                    <Link to="/terms" style={{ color: "var(--navy)" }}>Terms &amp; Conditions</Link>. WGL
                    processes data in strict compliance with the UK GDPR and does not sell or rent
                    personal data.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
