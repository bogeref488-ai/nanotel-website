import AnimateOnScroll from "../components/AnimateOnScroll";

const services = [
  { title: "Managed Services", text: "24/7 operations support, preventive maintenance, incident response, and SLA reporting." },
  { title: "Telecom Infrastructure", text: "RAN rollout, fiber build, site integration, commissioning, and acceptance." },
  { title: "Network Quality & Optimization", text: "KPI monitoring, audits, drive-test support, and performance improvement programs." },
  { title: "Power & Site Solutions", text: "Energy audits, power reliability improvements, and preventive power maintenance." },
  { title: "Field Data Collection", text: "Structured field reporting with evidence capture and approval workflows." },
  { title: "Consulting & Partnerships", text: "Planning, governance, local capacity building, and execution playbooks." },
];

export default function ServicesGrid() {
  return (
    <section className="bg-lightbg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="font-extrabold tracking-wide text-secondary">BUSINESS LINES</p>
            <h2 className="mt-2 text-4xl font-extrabold text-primary">What we deliver</h2>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed max-w-3xl">
              End-to-end delivery from deployment to operations — designed to scale across countries with consistent quality.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-extrabold text-white hover:opacity-95 transition shadow-soft w-fit"
          >
            View All Services
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 80}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lg transition">
                <div className="h-11 w-11 rounded-2xl bg-primary text-white flex items-center justify-center font-extrabold">
                  N
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-primary">{s.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{s.text}</p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex font-extrabold text-secondary hover:underline"
                >
                  Request a Quote →
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}