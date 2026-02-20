import { useEffect, useRef, useState } from "react";

/**
 * useInView
 * @param {Object} options
 * @param {number} options.threshold - how much of element must be visible
 * @param {string} options.rootMargin - start earlier/later (e.g. "0px 0px -10% 0px")
 * @param {boolean} options.once - animate once then stop observing
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
