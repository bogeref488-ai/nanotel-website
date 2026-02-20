export default function HumanCapital() {
  return (
    <div style={{ padding: "70px 40px", background: "#F8FAFC", minHeight: "70vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 44, margin: 0 }}>Human Capital</h1>
        <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.9, maxWidth: 860 }}>
          Nanotel builds strong field teams and develops local capability through training,
          certification, mentorship, and safety-first operations. We support inclusive hiring
          and professional growth across regions.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 28 }}>
          <Card title="Training & Certification">
            Continuous upskilling for field engineers, supervisors, and project teams.
          </Card>
          <Card title="Safety & Compliance">
            Strong HSE culture, reporting discipline, and standard operating procedures.
          </Card>
          <Card title="Inclusion & Growth">
            Equal opportunity, respectful workplaces, and leadership development.
          </Card>
        </div>

        <div style={block}>
          <h2 style={{ marginTop: 0 }}>Careers</h2>
          <p style={{ color: "#475569", lineHeight: 1.9 }}>
            To apply, send your CV and the role you’re interested in to:
            <br />
            <b>careers@nanotel.net</b>
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
            <span style={pill}>Field Engineer</span>
            <span style={pill}>Site Supervisor</span>
            <span style={pill}>Project Coordinator</span>
            <span style={pill}>NOC Support</span>
            <span style={pill}>Fiber Technician</span>
          </div>
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
      <p style={{ color:"#475569", lineHeight:1.8 }}>{children}</p>
    </div>
  );
}

const block = {
  marginTop: 26,
  background: "white",
  border: "1px solid #E2E8F0",
  borderRadius: 22,
  padding: 22,
};

const pill = {
  background: "#EFF6FF",
  border: "1px solid #DBEAFE",
  color: "#0B5ED7",
  padding: "8px 12px",
  borderRadius: 999,
  fontWeight: 800,
  fontSize: 14,
};
