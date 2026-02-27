// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 text-white bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950">
      {/* Accent strip */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400" />

      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
        
  <img
    src={`${import.meta.env.BASE_URL}logo.png`}
    alt="Nanotel Logo"
    className="h-19 w-auto object-contain scale-110"
  />

  <div className="text-white font-bold text-lg mt-3">
    Nanotel Africa
  </div>

  <p className="mt-2 text-sm text-white/70 leading-relaxed">
    Telecom infrastructure, managed services, ICT delivery, and open
    network deployment across Africa.
  </p>
</div>
        {/* Links */}
        <div className="text-sm">
          <div className="text-white font-semibold">Explore</div>
          <div className="mt-3 grid gap-2">
            <NavLink className="text-white/80 hover:text-white hover:underline" to="/overview">
              Overview
            </NavLink>
            <NavLink className="text-white/80 hover:text-white hover:underline" to="/services">
              Business Lines
            </NavLink>
            <NavLink className="text-white/80 hover:text-white hover:underline" to="/partnerships">
              Partnerships
            </NavLink>
            <NavLink className="text-white/80 hover:text-white hover:underline" to="/investors">
              Investors
            </NavLink>
            <NavLink className="text-white/80 hover:text-white hover:underline" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <div className="text-white font-semibold">Contact</div>

          <div className="mt-3 space-y-2 text-white/85">
            <p>
              <span className="text-white/60">Email:</span>{" "}
              <a className="hover:underline" href="mailto:info@nanotel.net">
                info@nanotel.net
              </a>
            </p>
            <p>
              <span className="text-white/60">Partners:</span>{" "}
              <a className="hover:underline" href="mailto:partnerships@nanotel.net">
                partnerships@nanotel.net
              </a>
            </p>
            <p>
              <span className="text-white/60">Investors:</span>{" "}
              <a className="hover:underline" href="mailto:investors@nanotel.net">
                investors@nanotel.net
              </a>
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <a className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition" href="#">
              LinkedIn
            </a>
            <a className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition" href="#">
              Facebook
            </a>
            <a className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition" href="#">
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-white/70 flex justify-between gap-3 flex-wrap">
          <span>© {new Date().getFullYear()} Nanotel Africa. All rights reserved.</span>
          <span>Built for performance & trust.</span>
        </div>
      </div>
    </footer>
  );
}