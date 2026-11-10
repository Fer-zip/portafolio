import { useEffect } from "react";

/**
 * revealOnScroll
 * Adds the `is-visible` class to every element carrying a `[data-reveal]`
 * attribute once it enters the viewport. Elements are unobserved after they
 * appear so the animation only runs once.
 *
 * Degrades gracefully: if IntersectionObserver is unavailable (or the user
 * prefers reduced motion) every element is revealed immediately.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
