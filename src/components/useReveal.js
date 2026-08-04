import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Applies the `.is-in` reveal animation to every `.reveal` element on the
// current page. Re-runs on each route change so freshly mounted pages animate.
export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el, i) => {
      el.classList.remove("is-in");
      el.style.transitionDelay = Math.min(i % 4, 3) * 90 + "ms";
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);
}
