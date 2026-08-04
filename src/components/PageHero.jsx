import { Link } from "react-router-dom";

export default function PageHero({ crumb, title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <span>{crumb}</span>
          </p>
          <h1>{title}</h1>
          {children && <p>{children}</p>}
        </div>
      </div>
    </section>
  );
}
