export default function Ethics() {
  const policies = [
    {
      title: "Ethics & Compliance",
      desc:
        "We promote anti-corruption practices, fair procurement, and accountable partnerships. Our teams follow clear operational controls and reporting processes.",
      tone: "blue",
    },
    {
      title: "Privacy",
      desc:
        "We collect only necessary information and protect it with appropriate controls. Contact form messages are used strictly for customer support and service delivery.",
      tone: "ink",
    },
    {
      title: "Terms",
      desc:
        "Website content is provided for general information. Service delivery terms are defined in client contracts and formal agreements.",
      tone: "teal",
    },
    {
      title: "Safety & Duty of Care",
      desc:
        "Our teams operate under safety procedures and site discipline, including risk assessments, PPE compliance, and incident reporting.",
      tone: "blue",
    },
    {
      title: "Quality Assurance",
      desc:
        "We use checklists, audits, acceptance criteria, and KPI tracking to keep delivery consistent and measurable across regions.",
      tone: "ink",
    },
    {
      title: "Responsible Partnership",
      desc:
        "We collaborate with suppliers and partners that support compliance, sustainability, and professional standards.",
      tone: "teal",
    },
  ];

  return (
    <div className="page-bg">
      {/* HERO */}
      <section className="page-hero">
        <div className="container-wrap">
          <h1 className="page-title">Ethics, Governance & Compliance</h1>
          <p className="page-subtitle">
            Nanotel follows clear standards to protect our clients, partners, and communities.
            We value integrity, transparency, and disciplined delivery.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="section">
        <div className="container-wrap">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((p) => (
              <div key={p.title} className={`card-pro tone-${p.tone}`}>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-ink-700 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 card-pro border-2 border-brand-200 bg-brand-50">
            <h2 className="text-2xl font-bold text-brand-900">
              Compliance or Ethics Question?
            </h2>
            <p className="mt-2 text-ink-700">
              Reach out for governance clarifications, compliance alignment, or operational policy questions.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a className="btn-primary" href="mailto:info@nanotel.net">
                Email: info@nanotel.net
              </a>
              <a className="btn-outline" href="#/contact">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}