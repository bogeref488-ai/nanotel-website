import React, { useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";

const DEPARTMENT_EMAILS = {
  info: "info@nanotel.net",
  partnerships: "partnerships@nanotel.net",
  investors: "investors@nanotel.net",
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email.";
  }
  if (!values.department) errors.department = "Please choose a department.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";

  return errors;
}

function MiniCard({ title, email }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold text-slate-600">{title}</div>
      <a
        className="mt-1 block text-sm font-extrabold text-blue-800 hover:underline"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    department: "info",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const errors = useMemo(() => validate(values), [values]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const currentErrors = validate(values);

    if (Object.keys(currentErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please complete all required fields correctly.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending..." });

    const selectedEmail = DEPARTMENT_EMAILS[values.department];

    try {
      await addDoc(collection(db, "contactMessages"), {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        department: values.department,
        toEmail: selectedEmail,
        subject: values.subject.trim(),
        message: values.message.trim(),
        createdAt: serverTimestamp(),
        status: "new",
      });

      const emailResult = await emailjs.send(
        "service_0559uuf",
        "template_y01satd",
        {
          to_email: selectedEmail,
          name: values.fullName.trim(),
          email: values.email.trim(),
          department: values.department,
          subject: values.subject.trim(),
          message: values.message.trim(),
          time: new Date().toLocaleString(),
        },
        "Ar9B8fLy3Kiaqf5n5"
      );

      console.log("EmailJS success:", emailResult);

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setValues({
        fullName: "",
        email: "",
        department: "info",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      setStatus({
        type: "error",
        message: "Message saved, but email notification failed.",
      });
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Contact Nanotel
        </h1>

        <p className="mt-2 max-w-2xl text-slate-600">
          Reach our team regarding partnerships, infrastructure projects,
          investment opportunities, or enterprise telecommunications services.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <MiniCard title="General Inquiries" email="info@nanotel.net" />
            <MiniCard title="Partnerships" email="partnerships@nanotel.net" />
            <MiniCard title="Investors" email="investors@nanotel.net" />

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-700">
                Notification routing
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Website messages are routed based on the selected department.
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8"
          >
            <div>
              <input
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <input
                name="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <select
                name="department"
                value={values.department}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="info">General Inquiries</option>
                <option value="partnerships">Partnerships</option>
                <option value="investors">Investors</option>
              </select>
              {errors.department && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.department}
                </p>
              )}
            </div>

            <div>
              <input
                name="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full rounded-xl bg-blue-700 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status.type !== "idle" && (
              <div
                className={`text-sm ${
                  status.type === "error"
                    ? "text-red-600"
                    : status.type === "success"
                    ? "text-green-600"
                    : "text-slate-700"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}