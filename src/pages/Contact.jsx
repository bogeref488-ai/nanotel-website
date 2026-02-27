import React from "react";

export default function Contact() {
  return (
    <div className="page">
      <section className="section">
        <div className="container-wrap">
          <div className="card p-8 md:p-10">
            <h1 className="h2">Contact</h1>
            <p className="p mt-2 max-w-3xl">
              Tell us what you’re building. We will respond with the right team and a clear execution plan.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="panel bg-brand-50 border-brand-200">
                <h3 className="h3">Email</h3>
                <p className="p mt-2">info@nanotel.net</p>

                <div className="mt-6 rounded-xl bg-white border border-brand-200 p-5">
                  <p className="text-sm text-ink-700">
                    For proposals, include: location, scope, timeline, and any site constraints.
                  </p>
                </div>
              </div>

              <div className="panel">
                <h3 className="h3">Message (Demo)</h3>
                <form
                  className="mt-4 grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Submitted (demo). We can connect this to email/API next.");
                  }}
                >
                  <input className="rounded-xl border border-ink-200 px-4 py-3 outline-none focus:ring-4 focus:ring-brand-100" placeholder="Full Name" />
                  <input className="rounded-xl border border-ink-200 px-4 py-3 outline-none focus:ring-4 focus:ring-brand-100" placeholder="Email" />
                  <input className="rounded-xl border border-ink-200 px-4 py-3 outline-none focus:ring-4 focus:ring-brand-100" placeholder="Subject" />
                  <textarea className="rounded-xl border border-ink-200 px-4 py-3 outline-none focus:ring-4 focus:ring-brand-100" rows="5" placeholder="Your message..." />
                  <button className="btn-primary w-full" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}