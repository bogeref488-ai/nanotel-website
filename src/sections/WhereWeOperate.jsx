const countries = [
  "Uganda",
  "Kenya",
  "Tanzania",
  "Rwanda",
  "South Sudan",
  "Egypt",
  "Nigeria",
  "Ghana",
  "Cameroon",
  "DR Congo",
];

export default function WhereWeOperate() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-blue-700 font-extrabold tracking-wide">WHERE WE OPERATE</p>

        <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
          Expanding Our Reach Across Africa
        </h2>

        <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-3xl">
          Nanotel is scaling field operations and managed services across high-growth African
          markets. We deliver consistent execution using standardized methods, strong HSE practices,
          and local capacity building.
        </p>

        {/* STATS */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Stat value="2019" label="Established" />
          <Stat value="20 Countries" label="10-year target" />
          <Stat value="24/7" label="Operations focus" />
        </div>

        {/* CONTENT */}
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {/* Dropdown */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6">
            <div className="font-extrabold text-slate-900">Select a Country</div>

            <select
              defaultValue="Uganda"
              className="mt-3 w-full max-w-md rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <p className="mt-3 text-slate-500 leading-relaxed">
              We can update this list anytime as Nanotel expands.
            </p>
          </div>

          {/* Country pills */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6">
            <div className="font-extrabold text-slate-900">Current / Target Markets</div>

            <div className="mt-4 flex flex-wrap gap-2">
              {countries.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-extrabold text-blue-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 min-w-[180px]">
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-slate-500">{label}</div>
    </div>
  );
}
