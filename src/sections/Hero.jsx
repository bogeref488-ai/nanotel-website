import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero.jpg";
<img src={heroImg} alt="Hero" />

export default function Hero() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  // Start animation when hero enters the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-blue to-brand-green text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
            Managed Services • Deployment • Optimization
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Managed Services that keep Africa’s networks running — 24/7.
          </h1>

          <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-xl">
            Nanotel designs, deploys and maintains telecom infrastructure across Africa.
            From build to optimization, we keep networks reliable and future-ready.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-2xl bg-brand-green px-6 py-3 font-extrabold text-white hover:opacity-90 transition"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="rounded-2xl bg-white text-brand-blue px-6 py-3 font-extrabold hover:bg-white/90 transition"
            >
              View Business Lines
            </Link>
          </div>

          {/* STATS (animated) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <Stat start={start} to={20} suffix="+" label="Target Countries" durationMs={1100} />
            <Stat start={start} to={1000} suffix="+" label="Sites Supported" durationMs={1300} />
            <Stat
              start={start}
              to={99.9}
              suffix="%"
              label="Uptime Focus"
              durationMs={1400}
              decimals={1}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl">
            <img
              src={heroImg}
              alt="Nanotel telecom network"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ start, to, suffix = "", label, durationMs = 1200, decimals = 0 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId = 0;
    const t0 = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - t0) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic

      const current = to * eased;
      setValue(current);

      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, to, durationMs]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4">
      <div className="text-2xl font-extrabold">
        {formatted}
        {suffix}
      </div>
      <div className="mt-1 text-white/80">{label}</div>
    </div>
  );
}
