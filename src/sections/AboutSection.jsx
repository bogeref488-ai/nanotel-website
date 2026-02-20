export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <p className="text-blue-700 font-extrabold tracking-wide">ABOUT US</p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 leading-tight">
            Delivering the Future Through Technology and Partnership.
          </h2>

          <p className="mt-5 text-slate-600 leading-relaxed text-lg">
            Nanotel is focused on building and operating reliable networks across Africa.
            We support planning, deployment, commissioning and ongoing maintenance of
            telecom infrastructure — with strong field execution and measurable quality.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/about"
              className="bg-blue-700 text-white px-6 py-3 rounded-xl font-extrabold hover:bg-blue-800"
            >
              Learn More
            </a>

            <a
              href="/contact"
              className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-extrabold hover:bg-blue-50"
            >
              Talk to Us
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5">
          <div className="h-72 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 font-semibold">
            About Image Placeholder
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <MiniCard title="Deployment" text="RAN rollout, fiber build, integration & commissioning." />
            <MiniCard title="Operations" text="Preventive & corrective maintenance with SLA focus." />
            <MiniCard title="Quality" text="Audits, optimization, acceptance and KPI tracking." />
            <MiniCard title="Expansion" text="Scale across countries with repeatable playbooks." />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCard({ title, text }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4">
      <div className="font-extrabold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600 leading-relaxed">{text}</div>
    </div>
  );
}
