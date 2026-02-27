import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <section className="section">
        <div className="container-wrap">
          <div className="card p-10 text-center">
            <div className="text-6xl font-extrabold text-ink-900">404</div>
            <p className="p mt-2">Page not found.</p>
            <div className="mt-6">
              <NavLink className="btn-primary" to="/">
                Back Home
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}