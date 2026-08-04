import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/img/image1.png" alt="Western Greenfield Limited" />
            <p>
              A London-based Venture Studio and Business Engineering firm building resilient,
              bankable, and market-defining enterprises of tomorrow.
            </p>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/approach">Our Approach</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Ventures</h5>
            <ul>
              <li><Link to="/projects#traxon">Traxon<sup className="tm">™</sup></Link></li>
              <li><Link to="/projects#firth-bioventis">Ferth Bioventis<sup className="tm">™</sup></Link></li>
              <li><Link to="/projects#biovivax">Biovivax<sup className="tm">™</sup></Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Office</h5>
            <ul>
              <li>Quadrant House, Floor 6</li>
              <li>4 Thomas More Square</li>
              <li>London, E1W 1YW, UK</li>
              <li><a href="mailto:office@westerngreenfield.com">office@westerngreenfield.com</a></li>
              <li><a href="tel:+442039961448">+44 20 3996 1448</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} Western Greenfield Limited. All rights reserved. Registered in England
            &amp; Wales, Company No. 17029262.
          </p>
          <div className="footer-legal">
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/terms#data">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
