import { Link } from "react-router-dom";
import { Arrow } from "./Icon.jsx";

export default function CtaBand({ title, text, to, label }) {
  return (
    <section className="section--tight">
      <div className="container">
        <div className="cta-band reveal">
          <div className="cta-band__in">
            <h2>{title}</h2>
            <p>{text}</p>
            <Link className="btn btn--light" to={to}>
              {label} <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
