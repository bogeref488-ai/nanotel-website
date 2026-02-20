import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-6 right-6 z-50 rounded-2xl px-4 py-3 font-extrabold shadow-lg transition-all",
        "bg-brand-blue text-white hover:opacity-90",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none",
      ].join(" ")}
    >
      ↑ Top
    </button>
  );
}
