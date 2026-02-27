export default function About() {
  const leadership = [
    {
      name: "Bogere Francis",
      role: "Founder & CEO",
      desc:
        "Leads Nanotel’s Pan-African strategy, partnerships, and long-term open network vision.",
    },
    {
      name: "Mukiibi Fauzi",
      role: "Network Delivery & Integration",
      desc:
        "Owns design, deployment execution, integration, and quality acceptance across projects.",
    },
    {
      name: "Kabashambo Josephine",
      role: "Managed Services & Maintenance",
      desc:
        "Leads SLA-based operations, incident response, preventive maintenance, and reporting.",
    },
    {
      name: "Nanyanzi Jovin",
      role: "OEM, Operators & Programs",
      desc:
        "Builds strategic alliances with OEMs, TowerCos, operators, and public programs.",
    },
  ];

  const focusAreas = [
    "ICT solutions and digital infrastructure",
    "Telecommunications network deployment and management",
    "Advanced connectivity for diverse operating environments",
    "Intelligent and energy-aware technology integration",
    "Managed services and technical support",
  ];

  return (
    <div className="page-bg">
      {/* HERO */}
      <section className="page-hero">
        <div className="container-wrap">
          <h1 className="page-title">About Nanotel</h1>
          <p className="page-subtitle">
            A Pan-African ICT company delivering modern digital and telecommunications solutions across Africa.
          </p>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="section">
        <div className="container-wrap">
          <div className="card-pro bg-white">
            <h2 className="text-2xl font-bold text-ink-900">Company Profile</h2>
            <p className="mt-3 text-ink-700 leading-relaxed max-w-4xl">
              Nanotel is a Pan-African Information and Communication Technology (ICT) company providing modern digital
              and telecommunications solutions across Africa. We work with governments, enterprises, and infrastructure
              partners to deliver secure, scalable, and future-ready connectivity.
            </p>
            <p className="mt-4 text-ink-700 leading-relaxed max-w-4xl">
              Our services cover end-to-end network design, deployment, integration, and managed operations—supporting
              reliable communication in both urban and challenging environments. Nanotel operates in compliance with
              applicable national ICT and telecommunications frameworks, ensuring regulatory standards are met while
              building resilient digital infrastructure that supports Africa’s digital transformation.
            </p>
          </div>

          {/* Mission / Vision */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="card-pro tone-ink">
              <h3 className="text-xl font-bold">Vision</h3>
              <p className="mt-2 text-ink-700">
                To be a trusted African ICT partner enabling inclusive, innovative, and future-ready digital connectivity.
              </p>
            </div>

            <div className="card-pro tone-blue">
              <h3 className="text-xl font-bold">Mission</h3>
              <p className="mt-2 text-ink-700">
                To deliver reliable ICT and telecommunications solutions that empower communication, innovation, and
                sustainable development across Africa.
              </p>
            </div>

            <div className="card-pro tone-teal">
              <h3 className="text-xl font-bold">Values</h3>
              <p className="mt-2 text-ink-700">
                Integrity, disciplined execution, compliance, quality delivery, and accountable partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FOCUS AREAS */}
      <section className="section section-alt">
        <div className="container-wrap">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="h2">Core Focus Areas</h2>
              <p className="p mt-2 max-w-3xl">
                Our delivery model combines infrastructure discipline with modern ICT capability to support reliable connectivity.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {focusAreas.map((item) => (
              <div key={item} className="card-pro bg-white">
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-brand-600 mt-2" />
                  <p className="text-ink-800 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER + LEADERSHIP */}
      <section className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4">
    
    <h2 className="text-3xl font-bold text-center text-slate-900">
      Founder & Leadership
    </h2>
    <p className="text-center text-slate-600 mt-3">
      Driving innovation and connectivity across Africa.
    </p>

    <div className="mt-12 grid gap-10 md:grid-cols-3">

      {/* Founder */}
      <div className="text-center">
        <img
          src={`${import.meta.env.BASE_URL}team/founder.jpg`}
          alt="Founder"
          className="w-52 h-52 mx-auto object-cover rounded-2xl shadow-lg"
        />
        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Bogere Francis
        </h3>
        <p className="text-emerald-600 font-semibold">
          Founder & CEO
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Visionary leader focused on building Africa’s future in ICT and open network infrastructure.
        </p>
      </div>

      {/* CTO */}
      <div className="text-center">
        <img
          src={`${import.meta.env.BASE_URL}team/cto.jpg`}
          alt="Chief Technology Officer"
          className="w-52 h-52 mx-auto object-cover rounded-2xl shadow-lg"
        />
        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Mukiibi Fauzi
        </h3>
        <p className="text-emerald-600 font-semibold">
          CTO
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Leads advanced network design, infrastructure deployment, and technical innovation.
        </p>
      </div>

      {/* CFO */}
      <div className="text-center">
        <img
          src={`${import.meta.env.BASE_URL}team/cfo.jpg`}
          alt="Chief Financial Officer"
          className="w-52 h-52 mx-auto object-cover rounded-2xl shadow-lg"
        />
        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Nalubenga Lynnet
        </h3>
        <p className="text-emerald-600 font-semibold">
          CFO
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Oversees financial strategy, investor relations, and sustainable growth planning.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* HQ + TEAMS */}
      <section className="section section-alt">
        <div className="container-wrap">
          <h2 className="h2">Headquarters & Teams</h2>
          <p className="p mt-2 max-w-3xl">
            Our core leadership and delivery coordination is managed centrally, with field execution teams deployable across regions.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="card-pro tone-blue">
              <h3 className="text-lg font-bold">Headquarters</h3>
              <p className="mt-2 text-ink-700">
                Uganda (HQ). Regional delivery is supported through scalable partner networks.
              </p>
            </div>

            <div className="card-pro tone-ink">
              <h3 className="text-lg font-bold">Field Engineering Teams</h3>
              <p className="mt-2 text-ink-700">
                Certified technicians and rollout crews for site delivery, integration, and commissioning.
              </p>
            </div>

            <div className="card-pro tone-teal">
              <h3 className="text-lg font-bold">NOC / Operations</h3>
              <p className="mt-2 text-ink-700">
                Monitoring, incident response, preventive maintenance and KPI reporting aligned to SLAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-wrap text-center">
          <div className="card-pro max-w-2xl mx-auto border-2 border-brand-200 bg-brand-50">
            <h2 className="text-2xl font-bold text-brand-900">Work with Nanotel</h2>
            <p className="mt-3 text-ink-700">
              We collaborate with governments, operators, TowerCos, OEMs, and enterprise customers across Africa.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <a className="btn-primary" href="#/partnerships">Partnerships</a>
              <a className="btn-outline" href="mailto:info@nanotel.net">Email: info@nanotel.net</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}