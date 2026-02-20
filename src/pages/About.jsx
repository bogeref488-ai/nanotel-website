export default function About() {
  return (
    <div style={{ padding: "70px 40px", background: "#F8FAFC", minHeight: "70vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 44 }}>About Nanotel</h1>

        <p style={{ marginTop: 16, color: "#475569", lineHeight: 1.9 }}>
          Nanotel is a pan-African telecommunications company focused on building,
          operating, and optimizing modern network infrastructure across the continent.
          We work with telecom operators, tower companies, and enterprise partners to
          deliver reliable connectivity and scalable field operations.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 30 }}>
          <Card title="Our Mission">
            Provide telecommunications services to all of Africa and build the next
            generation of carrier-grade network technology.
          </Card>

          <Card title="Our Vision">
            Empower Africa with open, future-ready connectivity and locally built
            technical capability.
          </Card>

          <Card title="Our Goal">
            Launch Nanotel operations across 20 African countries within the next decade.
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={{
      background:"white",
      border:"1px solid #E2E8F0",
      borderRadius:20,
      padding:20
    }}>
      <h3>{title}</h3>
      <p style={{color:"#475569", lineHeight:1.8}}>{children}</p>
    </div>
  );
}
