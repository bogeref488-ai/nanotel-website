import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";

const INVESTORS_EMAIL = "investors@nanotel.net";

export default function Investors() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    country: "",
    investorType: "",
    otherInvestorType: "",
    investmentInterest: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const finalInvestorType =
        form.investorType === "Other"
          ? form.otherInvestorType
          : form.investorType;

      await addDoc(collection(db, "investorInquiries"), {
        ...form,
        investorType: finalInvestorType,
        toEmail: INVESTORS_EMAIL,
        status: "new",
        createdAt: serverTimestamp(),
      });

      await emailjs.send(
        "service_0559uuf",
        "template_y01satd",
        {
          to_email: INVESTORS_EMAIL,
          name: form.fullName,
          email: form.email,
          subject: `New investor inquiry from ${form.fullName}`,
          message: `
Full Name: ${form.fullName}

Company / Organization: ${form.company}

Email: ${form.email}

Country: ${form.country}

Investor Type: ${finalInvestorType}

Investment Interest: ${form.investmentInterest}

Message:
${form.message}
          `,
          time: new Date().toLocaleString(),
        },
        "Ar9B8fLy3Kiaqf5n5"
      );

      setStatus("Investor inquiry submitted successfully.");

      setForm({
        fullName: "",
        company: "",
        email: "",
        country: "",
        investorType: "",
        otherInvestorType: "",
        investmentInterest: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("Error submitting investor inquiry.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-amber-700" />

        <div className="relative max-w-6xl mx-auto px-4 py-14 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Investor Relations
          </h1>

          <p className="mt-4 text-white/80 max-w-3xl">
            Nanotel Africa is building Africa’s next-generation telecommunications
            infrastructure, equipment ecosystem, and digital connectivity
            platform. We welcome strategic investors, infrastructure financiers,
            development partners, and institutional capital partners.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Investor Inquiry
          </h2>

          <p className="mt-2 text-slate-600">
            Submit your investment interest. Our investor relations team will
            review and respond.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              name="company"
              placeholder="Company / Organization"
              value={form.company}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <select
              name="investorType"
              value={form.investorType}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            >
              <option value="" disabled>
                Select investor type
              </option>

              <option>Angel Investor</option>
              <option>Venture Capital</option>
              <option>Private Equity</option>
              <option>Development Finance Institution</option>
              <option>Infrastructure Fund</option>
              <option>Strategic Corporate Investor</option>
              <option>Family Office</option>
              <option>Government / Public Investment Entity</option>
              <option>Other</option>
            </select>

            {form.investorType === "Other" && (
              <input
                name="otherInvestorType"
                placeholder="Please specify investor type"
                value={form.otherInvestorType}
                onChange={handleChange}
                className="border rounded-xl px-4 py-3"
              />
            )}

            <select
              name="investmentInterest"
              value={form.investmentInterest}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            >
              <option value="" disabled>
                Select investment interest
              </option>

              <option>Telecom Infrastructure</option>
              <option>Equipment Manufacturing</option>
              <option>Data Centres</option>
              <option>Fiber Network Expansion</option>
              <option>Satellite / Backhaul Infrastructure</option>
              <option>Pan-African Expansion</option>
              <option>Strategic Partnership Investment</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your investment interest"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <button className="bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800">
              Submit Investor Inquiry
            </button>

            {status && <p className="text-green-700 text-sm">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}