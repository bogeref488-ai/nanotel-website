export default function Partnerships() {
  return (
    <div className="bg-white min-h-screen">

      {/* CONFIDENTIAL STRIP */}
      <div className="bg-emerald-800 text-white text-center text-xs tracking-widest py-2">
        CONFIDENTIAL • STRATEGIC PARTNER INFORMATION
      </div>

      <section className="py-16">
        <div className="container-wrap">

          {/* HERO */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-700 to-ink-950 text-white p-10 shadow-lift border border-white/10 relative overflow-hidden">
            
            <div className="absolute right-6 bottom-6 text-white/5 text-6xl font-extrabold select-none">
              PARTNER ACCESS
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-bold bg-white/10 px-3 py-1 rounded-full">
              Strategic Partnerships
            </div>

            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Partner With Nanotel Africa
            </h1>

            <p className="mt-4 text-white/90 max-w-3xl leading-relaxed">
              Nanotel collaborates with OEMs, operators, EPC firms, and technology 
              partners to deliver scalable telecom programs across Africa under 
              strict safety and compliance standards.
            </p>

            <div className="mt-8">
              <a
                href="mailto:partnerships@nanotel.net?subject=Strategic%20Partnership%20Inquiry"
                className="bg-white text-emerald-800 font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition"
              >
                Submit Confidential Inquiry
              </a>
            </div>
          </div>

          {/* PARTNER CATEGORIES */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <PartnerCard title="OEM & Technology Partners">
              Equipment integration, rollout support, and managed operations
              programs across multi-country deployments.
            </PartnerCard>

            <PartnerCard title="Operators & Tower Companies">
              SLA-based network maintenance, optimization, and structured reporting.
            </PartnerCard>

            <PartnerCard title="EPC & Infrastructure">
              Fiber, civil works, energy, and site build collaboration
              aligned to strict timeline governance.
            </PartnerCard>

            <PartnerCard title="Workforce & Training">
              Certified workforce scaling and compliance-aligned training programs.
            </PartnerCard>
          </div>

          {/* PRIVATE ACCESS */}
          <div className="mt-12 rounded-2xl bg-ink-50 border border-ink-200 p-8">
            <h2 className="text-xl font-bold text-ink-900">
              Partner Onboarding
            </h2>

            <p className="mt-3 text-ink-700">
              Detailed onboarding documentation, compliance policies, and
              execution templates are shared privately after initial evaluation.
            </p>

            <div className="mt-6">
              <a
                href="mailto:partnerships@nanotel.net?subject=Partner%20Onboarding%20Request"
                className="inline-flex items-center bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-800 transition"
              >
                Request Partner Evaluation
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function PartnerCard({ title, children }) {
  return (
    <div className="rounded-2xl bg-white border border-ink-200 p-6 shadow-soft hover:shadow-lift transition">
      <h3 className="text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-3 text-ink-700 leading-relaxed">{children}</p>
    </div>
  );
}