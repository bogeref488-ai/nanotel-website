import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navClass = ({ isActive }) =>
  `font-extrabold transition hover:opacity-100 ${
    isActive ? "opacity-100" : "opacity-90"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside to close
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e) => {
      const el = headerRef.current;
      if (!el) return;
      if (!el.contains(e.target)) close();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 ${scrolled ? "shadow-lg shadow-black/10" : ""}`}
    >
      {/* Top bar */}
      <div className="bg-brand-green text-white text-sm">
        <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-between gap-4">
          <div className="truncate">Empowering the Future of Open Networks</div>

          <div className="hidden sm:flex items-center gap-3">
            <a className="hover:underline" href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="opacity-70">•</span>
            <a className="hover:underline" href="#" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <span className="opacity-70">•</span>
            <a className="hover:underline" href="#" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-brand-blue text-white">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3" onClick={close}>
            <img
              src={logo}
              alt="Nanotel logo"
              className="h-10 w-auto object-contain bg-white p-1 rounded"
            />

            <div className="leading-tight hidden sm:block">
              <div className="font-extrabold tracking-wide text-xl">NANOTEL</div>
              <div className="text-xs opacity-90">Open Networks • Pan-African</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink className={navClass} to="/">
              Home
            </NavLink>
            <NavLink className={navClass} to="/about">
              About
            </NavLink>
            <NavLink className={navClass} to="/services">
              Business Lines
            </NavLink>
            <NavLink className={navClass} to="/human-capital">
              Human Capital
            </NavLink>
            <NavLink className={navClass} to="/ethics">
              Ethics
            </NavLink>

            <Link
              to="/contact"
              className="ml-2 bg-white text-brand-blue px-4 py-2 rounded-xl font-extrabold hover:bg-white/90 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 hover:bg-white/15 transition"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={toggle}
          >
            <Hamburger open={open} />
          </button>
        </div>

        {/* Mobile overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/30 transition-opacity ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={close}
          aria-hidden="true"
        />

        {/* Mobile menu (animated) */}
        <div
          className={`md:hidden relative border-t border-white/15 overflow-hidden transition-all duration-300
          ${open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
            <NavLink className={navClass} to="/" onClick={close}>
              Home
            </NavLink>
            <NavLink className={navClass} to="/about" onClick={close}>
              About
            </NavLink>
            <NavLink className={navClass} to="/services" onClick={close}>
              Business Lines
            </NavLink>
            <NavLink className={navClass} to="/human-capital" onClick={close}>
              Human Capital
            </NavLink>
            <NavLink className={navClass} to="/ethics" onClick={close}>
              Ethics
            </NavLink>

            <Link
              to="/contact"
              onClick={close}
              className="mt-2 inline-flex justify-center bg-white text-brand-blue px-4 py-3 rounded-xl font-extrabold hover:bg-white/90 transition"
            >
              Contact
            </Link>

            <div className="pt-3 mt-2 border-t border-white/15 flex flex-wrap gap-3 text-sm text-white/90">
              <a className="hover:underline" href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span className="opacity-60">•</span>
              <a className="hover:underline" href="#" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <span className="opacity-60">•</span>
              <a className="hover:underline" href="#" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hamburger({ open }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={`absolute left-0 top-0 h-[2px] w-6 bg-white transition ${
          open ? "translate-y-[9px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[9px] h-[2px] w-6 bg-white transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[18px] h-[2px] w-6 bg-white transition ${
          open ? "-translate-y-[9px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}
