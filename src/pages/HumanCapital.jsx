import React from "react";

export default function HumanCapital() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 text-white">

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Human Capital
          </h1>

          <p className="mt-4 max-w-3xl text-white/85 leading-relaxed">
            Nanotel believes that strong engineering talent and a skilled workforce
            are the foundation of modern telecommunications infrastructure.
            We invest in training, leadership development and technical excellence
            to deliver reliable connectivity across Africa.
          </p>

        </div>
      </section>

      {/* WORKFORCE */}
      <section className="max-w-6xl mx-auto px-4 py-16">

        <div className="grid gap-8 md:grid-cols-3">

          <Card
            title="Engineering Excellence"
            text="Nanotel develops highly skilled engineers and technical professionals
            capable of delivering telecom infrastructure projects across diverse environments."
          />

          <Card
            title="Training & Certification"
            text="Our teams undergo continuous training programs aligned with global
            telecommunications standards and industry certifications."
          />

          <Card
            title="Workforce Development"
            text="Nanotel supports workforce development initiatives that build local
            telecom expertise and strengthen Africa’s digital economy."
          />

        </div>

      </section>

      {/* CULTURE */}
      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-3xl font-extrabold text-slate-900">
              Our People & Culture
            </h2>

            <p className="mt-4 text-slate-600">
              Nanotel promotes a collaborative culture where innovation,
              integrity, and professional growth are encouraged.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <CultureCard
              title="Integrity"
              text="We uphold transparency, accountability and responsible leadership."
            />

            <CultureCard
              title="Innovation"
              text="Our teams continuously explore new technologies shaping the future of connectivity."
            />

            <CultureCard
              title="Collaboration"
              text="We work with partners, governments and enterprises to build resilient networks."
            />

          </div>

        </div>

      </section>

      {/* DIVERSITY */}
      <section className="bg-slate-950 text-white py-16">

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-3xl font-extrabold">
              Diversity & Inclusion
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed">
              Nanotel supports inclusive participation across engineering,
              operations and leadership roles. We believe diverse perspectives
              strengthen innovation and drive sustainable growth across Africa.
            </p>

            <p className="mt-4 text-white/80">
              Our workforce includes professionals from various backgrounds
              working together to deliver advanced telecommunications systems.
            </p>

          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">

            <img
              src={`${import.meta.env.BASE_URL}team/engineering-team.jpg`}
              alt="Engineering Team"
              className="w-full h-[320px] object-cover opacity-90"
            />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-extrabold text-slate-900">
            Join the Nanotel Team
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We are always looking for talented engineers, technicians and
            technology professionals passionate about building Africa’s
            digital future.
          </p>

          <div className="mt-8">
            <a
              href="mailto:careers@nanotel.net"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition"
            >
              Send Your CV
            </a>
          </div>

        </div>

      </section>

    </div>
  );
}

/* COMPONENTS */

function Card({ title, text }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function CultureCard({ title, text }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}