export default function Services() {
  return (
    <div className="page-bg">

      <section className="page-hero">
        <div className="container-wrap">
          <h1 className="page-title">Business Lines</h1>
          <p className="page-subtitle">
            End-to-end telecom infrastructure and managed services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap grid md:grid-cols-2 gap-6">

          <div className="card-pro">
            <h3 className="text-xl font-bold">EPC & Infrastructure</h3>
            <p className="mt-2">Fiber, civil works, energy, and site build collaboration.</p>
          </div>

          <div className="card-pro">
            <h3 className="text-xl font-bold">OEM & Technology Partners</h3>
            <p className="mt-2">Equipment integration and rollout support.</p>
          </div>

          <div className="card-pro">
            <h3 className="text-xl font-bold">Operators & TowerCos</h3>
            <p className="mt-2">SLA-based maintenance and optimization.</p>
          </div>

          <div className="card-pro">
            <h3 className="text-xl font-bold">Workforce & Training</h3>
            <p className="mt-2">Certified workforce scaling and training.</p>
          </div>

        </div>
      </section>

    </div>
  );
}