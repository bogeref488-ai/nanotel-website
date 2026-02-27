import React from "react";
import { NavLink } from "react-router-dom";
import InfoCard from "../components/InfoCard.jsx";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container-wrap">
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-ink-950 px-8 py-12 sm:px-12 text-white">
              <p className="text-white/80 text-sm font-semibold tracking-wide">
                NANOTEL AFRICA
              </p>

              <h1 className="h1 mt-2">Modern ICT & Telecom Solutions Across Africa</h1>

              <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
                Nanotel is a Pan-African Information and Communication Technology (ICT) company providing
                modern digital and telecommunications solutions across Africa — secure, scalable, and
                future-ready connectivity.
                <span className="block mt-2 font-semibold text-white">
                  Empowering the Future of Open Networks.
                </span>
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <NavLink className="btn-primary" to="/services">
                  Explore Business Lines
                </NavLink>
                <NavLink className="btn-outline" to="/contact">
                  Talk to Us
                </NavLink>
                <NavLink className="btn-secondary" to="/overview">
                  Company Profile
                </NavLink>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-10 bg-white">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <InfoCard tone="blue" title="Design" desc="Network planning, design reviews, and delivery governance." />
                <InfoCard tone="ink" title="Deployment" desc="RAN rollout, fiber build, integration & commissioning." />
                <InfoCard tone="teal" title="Operations" desc="Managed services, preventive/corrective maintenance, reporting." />
                <InfoCard tone="ink" title="Optimization" desc="KPI improvement, audits, acceptance and performance tuning." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NANOTEL */}
      <section className="section section-alt">
        <div className="container-wrap">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="h2">Reliable delivery in diverse environments</h2>
              <p className="p mt-2 max-w-3xl">
                We support communication in both urban and challenging environments through structured execution,
                quality controls, and compliance-aligned delivery.
              </p>
            </div>
            <NavLink className="btn-primary" to="/about">
              About Nanotel
            </NavLink>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <InfoCard tone="blue" title="Secure & scalable" desc="Future-ready connectivity with strong delivery discipline and governance." />
            <InfoCard tone="ink" title="Compliance-first" desc="Aligned to national ICT/telecom frameworks and professional standards." />
            <InfoCard tone="teal" title="KPI-driven" desc="Operations and optimization based on measurable outcomes." />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <NavLink className="btn-secondary" to="/partnerships">Partnerships</NavLink>
            <NavLink className="btn-secondary" to="/investors">Investors</NavLink>
            <NavLink className="btn-secondary" to="/overview">Full Company Profile</NavLink>
            <NavLink className="btn-primary" to="/contact">Contact</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}