import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

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
      className="relative overflow-hidden bg-primary text-white"
    >
      {/* Background glow */}
      <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-secondary/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-extrabold text-white/90 border border-white/15">
            Telecom Infrastructure • Managed Services • Optimization
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Reliable networks across Africa — built, maintained, and optimized.
          </h1>

          <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-xl">
            Nanotel supports telecom operators with deployment, operations,
            performance optimization, and field services — delivering consistent
            quality at scale.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-2xl bg-accent px-6 py-3 font-extrabold text-primary hover:opacity-95 transition shadow-soft"
            >
              Talk to Us
            </Link>

            <Link
              to="/services"
              className="rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 transition border border-white/15"
            >
              View Business Lines
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <Stat start={start} to={20} suffix="+" label="Target Countries" />
            <Stat start={start} to={1000} suffix="+" label="Sites Supported" durationMs={1400} />
            <Stat start={start} to={99.9} suffix="%" label="Uptime Focus" decimals={1} durationMs={1600} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden border border-white/15 shadow-soft bg-white/5">
            <img
              src={heroImg}
              alt="Nanotel telecom network"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="mt-4 text-sm text-white/70">
            Trusted delivery for RAN, fiber, site integration & managed services.
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
    let raf = 0;
    const t0 = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - t0) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, durationMs]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4">
      <div className="text-2xl font-extrabold text-accent">
        {formatted}{suffix}
      </div>
      <div className="mt-1 text-white/80">{label}</div>
    </div>
  );
}