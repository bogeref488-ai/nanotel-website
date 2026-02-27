import React from "react";
import { NavLink } from "react-router-dom";

export default function Overview() {
  return (
    <div className="page-bg">
      <section className="section">
        <div className="container-wrap">
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-ink-950 text-white p-10">
              <p className="text-white/80 text-sm font-semibold tracking-wide">NANOTEL AFRICA</p>
              <h1 className="h1 mt-2">Company Profile</h1>
              <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
                Pan-African ICT and telecommunications solutions delivering secure, scalable,
                and future-ready connectivity across Africa.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <NavLink to="/contact" className="btn-primary">Talk to Us</NavLink>
                <NavLink to="/services" className="btn-secondary">Explore Business Lines</NavLink>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h2 className="h2">Nanotel – Company Profile</h2>

              <p className="p mt-4">
                Nanotel is a Pan-African Information and Communication Technology (ICT) company providing modern digital
                and telecommunications solutions across Africa. We work with governments, enterprises, and infrastructure
                partners to deliver secure, scalable, and future-ready connectivity.
              </p>

              <p className="p mt-3">
                Our services cover end-to-end network design, deployment, integration, and managed operations,
                supporting reliable communication in both urban and challenging environments. Nanotel operates in
                compliance with applicable national ICT and telecommunications frameworks, ensuring regulatory standards
                are met while building resilient digital infrastructure that supports Africa’s digital transformation.
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="panel bg-brand-50 border-brand-200">
                  <h3 className="h3">Vision</h3>
                  <p className="p">
                    To be a trusted African ICT partner enabling inclusive, innovative, and future-ready digital connectivity.
                  </p>
                </div>

                <div className="panel bg-emerald-50 border-emerald-200">
                  <h3 className="h3">Mission</h3>
                  <p className="p">
                    To deliver reliable ICT and telecommunications solutions that empower communication, innovation,
                    and sustainable development across Africa.
                  </p>
                </div>
              </div>

              <div className="mt-8 panel">
                <h3 className="h3">Core Focus Areas</h3>
                <ul className="list mt-3">
                  <li>ICT solutions and digital infrastructure</li>
                  <li>Telecommunications network deployment and management</li>
                  <li>Advanced connectivity for diverse operating environments</li>
                  <li>Intelligent and energy-aware technology integration</li>
                  <li>Managed services and technical support</li>
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <NavLink to="/partnerships" className="btn-secondary">Partnerships</NavLink>
                <NavLink to="/investors" className="btn-secondary">Investors</NavLink>
                <NavLink to="/contact" className="btn-primary">Contact Nanotel</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}