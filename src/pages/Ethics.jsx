export default function Ethics() {
  return (
    <div style={{ padding: "70px 40px", background: "#F8FAFC", minHeight: "70vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 44, margin: 0 }}>Ethics, Privacy & Terms</h1>

        <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.9, maxWidth: 900 }}>
          Nanotel is committed to transparency, fair business practices, and responsible operations.
          This page provides a simple overview of our ethics principles, privacy approach, and terms.
          (You can replace this with a formal legal document later.)
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 28 }}>
          <Card title="Ethics & Compliance">
            We promote anti-corruption practices, fair procurement, and accountable partnerships.
            Our teams follow clear operational procedures and reporting standards.
          </Card>

          <Card title="Privacy">
            We collect only necessary information and protect it with appropriate controls.
            Contact form messages are used strictly to respond to inquiries.
          </Card>

          <Card title="Terms">
            Website content is provided for general information. Service delivery is governed by
            written agreements, SLAs, and applicable regulations.
          </Card>
        </div>

        <div style={note}>
          <b>Note:</b> If you want, I can generate a proper Privacy Policy and Terms & Conditions text
          that is more complete (still editable).
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

const note = {
  marginTop: 22,
  background: "#FEF9C3",
  border: "1px solid #FDE68A",
  color: "#854D0E",
  borderRadius: 18,
  padding: 16,
  lineHeight: 1.8,
};
