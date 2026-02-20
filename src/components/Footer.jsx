import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-white/10 flex items-center justify-center font-extrabold">
              N
            </div>
            <div className="leading-tight">
              <div className="font-extrabold tracking-wide">NANOTEL</div>
              <div className="text-xs text-white/70">
                Empowering the Future of Open Networks
              </div>
            </div>
          </div>

          <p className="mt-4 text-white/75 leading-relaxed">
            Nanotel designs, deploys, and maintains modern telecommunications networks across Africa —
            delivering reliable connectivity, strong field execution, and scalable operations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-extrabold text-lg">Useful Links</h3>
          <ul className="mt-4 grid gap-2 text-white/80">
            <li>
              <Link className="hover:text-white" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/about">About</Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/services">Business Lines</Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/human-capital">Human Capital</Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/ethics">Ethics</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-extrabold text-lg">Stay Informed with Our Newsletter</h3>
          <p className="mt-3 text-white/75 leading-relaxed">
            Sign up for monthly updates, news, and opportunities from Nanotel.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed! (Demo form)");
            }}
            className="mt-4 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="rounded-xl bg-green-600 px-5 py-3 font-extrabold hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/70">
          <div>© {new Date().getFullYear()} Nanotel. All rights reserved.</div>

          <div className="flex gap-4">
            <Link className="hover:text-white" to="/ethics">Privacy</Link>
            <Link className="hover:text-white" to="/ethics">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
