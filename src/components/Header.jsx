import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import { Arrow } from "./Icon.jsx";

const links = [
  { to: "/about", label: "About Us" },
  { to: "/approach", label: "Our Approach" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body class drives the toggle→X animation and locks scroll while the drawer is open.
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  // Close the drawer with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
        <div className="container">
          <nav className="nav" aria-label="Primary">
            <Link className="brand" to="/" aria-label="Western Greenfield — Home">
              <img src="/assets/img/image1.png" alt="Western Greenfield Limited" />
            </Link>

            <ul className="nav-menu">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className={({ isActive }) => (isActive ? "active" : undefined)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <Link className="btn btn--primary" to="/contact">
                Get in touch <Arrow />
              </Link>
            </div>

            <button
              className="nav-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer — portaled to <body> so it sizes to the viewport,
          not the header (which is a containing block due to backdrop-filter). */}
      {createPortal(
        <div className={"nav-drawer" + (open ? " is-open" : "")}>
          <div className="nav-backdrop" onClick={close} aria-hidden="true" />
          <aside className="nav-drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">
            <nav className="nav-drawer__nav" aria-label="Mobile">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                  onClick={close}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <Link className="btn btn--primary nav-drawer__cta" to="/contact" onClick={close}>
              Get in touch <Arrow />
            </Link>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
}
