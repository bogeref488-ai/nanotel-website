import React from "react";
import { NavLink } from "react-router-dom";

const MISSION = [
  "Deliver reliable telecommunications, ICT, and digital infrastructure solutions.",
  "Support operators, enterprises, governments, and institutions through quality engineering and technical services.",
  "Provide practical energy and technology solutions for resilient infrastructure operations.",
  "Build strong local technical capacity through innovation, skills development, and knowledge transfer.",
  "Develop long-term partnerships that create value for customers, communities, and stakeholders.",
];

const GOALS = [
  {
    title: "Reliable Infrastructure Delivery",
    desc: "Deliver dependable telecom, ICT, energy, and digital infrastructure solutions for real operating environments.",
  },
  {
    title: "Technical Excellence",
    desc: "Provide quality engineering, deployment, maintenance, and support services across infrastructure projects.",
  },
  {
    title: "Local Capacity Building",
    desc: "Strengthen African technical capability through skills development, knowledge transfer, and practical project experience.",
  },
  {
    title: "Sustainable Operations",
    desc: "Support responsible infrastructure through energy-efficient systems, hybrid power, and long-term maintenance planning.",
  },
];

const STAND_FOR = [
  {
    title: "Reliability",
    desc: "Delivering dependable infrastructure and technical support that help organizations maintain continuous operations.",
  },
  {
    title: "Innovation",
    desc: "Applying technology, engineering, and practical problem-solving to improve infrastructure outcomes.",
  },
  {
    title: "Partnership",
    desc: "Working collaboratively with customers, partners, and communities to achieve shared goals.",
  },
];

const VALUES = [
  "Engineering Excellence",
  "Reliable Delivery",
  "Innovation & Continuous Improvement",
  "Integrity & Transparency",
  "Pan-African Collaboration",
  "Sustainability & Inclusion",
];

const LEADERSHIP = [
  {
    name: "Bogere Francis",
    title: "Founder & CEO",
    bio: "Telecom infrastructure and network systems leadership focused on practical delivery, partnerships, and Pan-African growth.",
    image: `${import.meta.env.BASE_URL}team/founder.jpg`,
  },
  {
    name: "Mukiibi Fauzi Ssemakula",
    title: "Chief Technology Officer",
    bio: "Focused on network architecture, technical systems, infrastructure planning, and technology operations.",
    image: `${import.meta.env.BASE_URL}team/cto.jpg`,
  },
  {
    name: "Nalubega Lynnette",
    title: "Strategy & Investment",
    bio: "Supporting business strategy, partnerships, capital planning, and organizational development.",
    image: `${import.meta.env.BASE_URL}team/cfo.jpg`,
  },
  {
    name: "Dr. Nannyanzi Jovin",
    title: "Head of R&D",
    bio: "Leading research, innovation, energy solutions, and smart network development.",
    image: `${import.meta.env.BASE_URL}team/rnd.jpg`,
  },
];

export default function About() {
  return (
    <div className="bg-ink-50">
      {/* Hero */}
      <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Building Reliable Telecom & Digital Infrastructure
          </h1>

          <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
            Nanotel Africa provides telecommunications infrastructure, ICT support,
            energy systems, and digital infrastructure services for operators,
            enterprises, institutions, and communities across Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/business-lines"
              className="inline-block bg-white text-blue-950 font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition"
            >
              Explore Our Services
            </NavLink>

            <NavLink
              to="/contact"
              className="inline-block bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/15 transition"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-14">
        {/* Company Overview */}
        <section className="bg-white rounded-3xl shadow-soft border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink-950">
            Company Overview
          </h2>

          <p className="mt-4 text-ink-700 leading-relaxed">
            Nanotel Africa is a telecommunications and technology infrastructure
            company focused on supporting connectivity, digital transformation,
            and infrastructure development across African markets.
          </p>

          <p className="mt-4 text-ink-700 leading-relaxed">
            We work with telecom operators, internet service providers, tower
            companies, enterprises, institutions, development organizations, and
            public-sector projects that require dependable infrastructure delivery,
            technical support, and long-term operational reliability.
          </p>

          <ul className="mt-6 grid gap-3 md:grid-cols-2 text-ink-800">
            {[
              "Telecommunications infrastructure deployment",
              "Fiber optic and network site support",
              "Energy and hybrid power systems",
              "ICT and digital infrastructure",
              "Data centre and cloud support",
              "Carrier equipment support",
              "Technical operations and maintenance",
              "Network monitoring and optimization",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-5 rounded-2xl bg-ink-50 border">
            <p className="text-ink-700 leading-relaxed">
              Our approach combines engineering discipline, local understanding,
              reliable execution, and responsible partnerships to support practical
              infrastructure solutions for real operating environments.
            </p>
          </div>
        </section>

        {/* Vision + Mission */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-soft border p-6 md:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm font-semibold">
              Our Vision
            </div>

            <h3 className="mt-4 text-xl md:text-2xl font-extrabold text-ink-950">
              Trusted infrastructure partner for Africa’s digital growth
            </h3>

            <p className="mt-4 text-ink-700 leading-relaxed">
              To be a trusted African telecommunications and digital infrastructure
              company delivering reliable connectivity, technology solutions, and
              sustainable infrastructure that support economic growth and digital
              transformation across the continent.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-soft border p-6 md:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold">
              Our Mission
            </div>

            <ul className="mt-5 grid gap-3 text-ink-800">
              {MISSION.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-700 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Goals */}
        <section className="bg-white rounded-3xl shadow-soft border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink-950">
            Our Goals
          </h2>

          <p className="mt-4 text-ink-700 leading-relaxed">
            Nanotel Africa’s goals are focused on practical infrastructure delivery,
            reliable technical support, local capacity building, and sustainable
            technology solutions for organizations across Africa.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {GOALS.map((goal) => (
              <div key={goal.title} className="rounded-2xl border bg-ink-50 p-5">
                <div className="font-extrabold text-ink-950">{goal.title}</div>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Stand For */}
        <section className="bg-white rounded-3xl shadow-soft border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink-950">
            What We Stand For
          </h2>

          <p className="mt-4 text-ink-700 leading-relaxed">
            At Nanotel Africa, we believe reliable infrastructure is the foundation
            of digital transformation. Our work is guided by a commitment to quality,
            practical engineering, responsible partnerships, and long-term value creation.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {STAND_FOR.map((item) => (
              <div key={item.title} className="rounded-2xl border bg-ink-50 p-5">
                <h3 className="font-extrabold text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-white rounded-3xl shadow-soft border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink-950">
            Leadership & Team
          </h2>

          <p className="mt-3 text-ink-700 max-w-3xl leading-relaxed">
            Nanotel Africa is led by a team focused on telecommunications
            infrastructure, technology systems, partnerships, research, and
            long-term operational growth.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((person) => (
              <LeaderCard key={person.name} person={person} />
            ))}
          </div>
        </section>

        {/* Corporate Values */}
        <section className="bg-white rounded-3xl shadow-soft border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink-950">
            Corporate Values
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value}
                className="rounded-2xl border bg-ink-50 px-5 py-4 flex items-center gap-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="font-semibold text-ink-900">{value}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function LeaderCard({ person }) {
  const initials = person.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition">
      <div className="h-44 bg-gradient-to-br from-brand-950 via-ink-950 to-emerald-900 flex items-center justify-center">
        <img
          src={person.image}
          alt={person.name}
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white/20"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            const parent = event.currentTarget.parentElement;
            const fallback = parent.querySelector("[data-fallback]");
            if (fallback) fallback.style.display = "flex";
          }}
        />

        <div
          data-fallback
          className="hidden h-28 w-28 rounded-full bg-white/10 text-white font-extrabold text-2xl items-center justify-center ring-4 ring-white/20"
        >
          {initials}
        </div>
      </div>

      <div className="p-5">
        <div className="font-extrabold text-ink-950">{person.name}</div>
        <div className="text-sm font-semibold text-emerald-700 mt-1">
          {person.title}
        </div>
        <p className="mt-3 text-sm text-ink-700 leading-relaxed">
          {person.bio}
        </p>
      </div>
    </div>
  );
}