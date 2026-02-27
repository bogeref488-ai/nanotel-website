export default function InfoCard({ title, desc, tone = "default" }) {
  const toneStyles =
    tone === "blue"
      ? "bg-brand-50 border-brand-200/70"
      : tone === "teal"
      ? "bg-emerald-50 border-emerald-200/70"
      : tone === "ink"
      ? "bg-ink-50 border-ink-200/80"
      : "bg-white border-ink-200/70";

  return (
    <div className={`card card-hover p-6 ${toneStyles}`}>
      <div className="text-lg font-extrabold text-ink-900">{title}</div>
      <p className="mt-2 text-ink-700 leading-relaxed">{desc}</p>
    </div>
  );
}