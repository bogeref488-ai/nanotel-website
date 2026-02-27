export default function HumanCapital() {
  return (
    <div className="page-bg">

      <section className="page-hero">
        <div className="container-wrap">
          <h1 className="page-title">Human Capital</h1>
          <p className="page-subtitle">
            Strong networks are built by strong teams.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap grid md:grid-cols-3 gap-6">

          <div className="card-pro">
            <h3 className="font-bold text-lg">Training</h3>
            <p className="mt-2">Structured onboarding and continuous technical upskilling.</p>
          </div>

          <div className="card-pro">
            <h3 className="font-bold text-lg">Safety</h3>
            <p className="mt-2">Risk assessments and prevention-focused culture.</p>
          </div>

          <div className="card-pro">
            <h3 className="font-bold text-lg">Performance</h3>
            <p className="mt-2">Clear KPIs, accountability, and improvement plans.</p>
          </div>

        </div>
      </section>

    </div>
  );
}