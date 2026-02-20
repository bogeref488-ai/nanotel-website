import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl w-full rounded-3xl border border-slate-200 bg-white p-10 text-center">
        <div className="text-5xl font-extrabold text-slate-900">404</div>
        <p className="mt-3 text-slate-600">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-extrabold text-white hover:bg-blue-800"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
