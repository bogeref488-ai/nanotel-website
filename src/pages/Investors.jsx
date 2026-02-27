export default function Investors() {
  return (
    <div className="page-bg">

      {/* HERO */}
      <section className="page-hero">
        <div className="container-wrap">
          <h1 className="page-title">Investor Relations</h1>
          <p className="page-subtitle">
            Confidential overview of Nanotel’s growth strategy, expansion roadmap,
            and long-term infrastructure vision.
          </p>
        </div>
      </section>

      {/* CONFIDENTIAL CARD */}
      <section className="section">
        <div className="container-wrap">
          <div className="card-pro border-2 border-brand-200 bg-brand-50">
            <h2 className="text-2xl font-bold text-brand-900">
              Confidential Information Notice
            </h2>
            <p className="mt-3 text-ink-700 leading-relaxed">
              The detailed investor presentation, financial projections,
              and expansion roadmap are available to qualified investors
              and strategic partners upon request.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTMENT HIGHLIGHTS */}
      <section className="section section-alt">
        <div className="container-wrap grid md:grid-cols-3 gap-6">

          <div className="card-pro">
            <h3 className="font-bold text-lg">Pan-African Growth</h3>
            <p className="mt-2">
              Target rollout across 20 African countries in the first decade.
            </p>
          </div>

          <div className="card-pro">
            <h3 className="font-bold text-lg">Infrastructure Demand</h3>
            <p className="mt-2">
              Growing need for telecom infrastructure and digital connectivity.
            </p>
          </div>

          <div className="card-pro">
            <h3 className="font-bold text-lg">Scalable Model</h3>
            <p className="mt-2">
              Repeatable delivery model with strong operational frameworks.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-wrap text-center">
          <div className="card-pro max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Request Investor Deck</h2>
            <p className="mt-3 text-ink-700">
              Contact our investor relations team to receive the full confidential pitch deck.
            </p>

            <a
              href="mailto:investors@nanotel.net"
              className="btn-primary mt-6 inline-block"
            >
              Contact Investors
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}