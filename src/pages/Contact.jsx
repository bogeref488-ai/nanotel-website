export default function Contact() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-extrabold text-slate-900">Contact Nanotel</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-3xl">
          Reach out for managed services, infrastructure rollout, optimization support, or partnerships.
          Fill the form and we’ll respond as soon as possible.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* LEFT: Details */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-extrabold text-slate-900">Nanotel Office</h2>

            <div className="mt-4 space-y-2 text-slate-600">
              <p>
                <span className="font-extrabold text-slate-900">Email:</span>{" "}
                info@nanotel.net
              </p>
              <p>
                <span className="font-extrabold text-slate-900">Phone:</span>{" "}
                +256 709 060 891
              </p>
              <p>
                <span className="font-extrabold text-slate-900">Location:</span>{" "}
                Kampala, Uganda
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="font-extrabold text-blue-700">Business Hours</div>
              <div className="mt-2 text-slate-600 leading-relaxed">
                Mon–Fri: 8:00am – 5:00pm
                <br />
                24/7 Support: Available for managed services clients (SLA-based)
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Replace these placeholders with your real Nanotel contact details.
            </p>
          </div>

          {/* RIGHT: Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-extrabold text-slate-900">Send a Message</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! (Demo form)");
                e.target.reset();
              }}
              className="mt-5 grid gap-4"
            >
              <div className="grid gap-2">
                <label className="text-sm font-extrabold text-slate-900">Full Name</label>
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-extrabold text-slate-900">Email</label>
                <input
                  type="email"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-extrabold text-slate-900">Subject</label>
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-extrabold text-slate-900">Message</label>
                <textarea
                  className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-2xl bg-blue-700 px-6 py-3 font-extrabold text-white hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
