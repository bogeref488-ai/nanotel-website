
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";

const PARTNERSHIPS_EMAIL = "partnerships@nanotel.net";

export default function Partnerships() {
  const [form, setForm] = useState({
    company: "",
    contactName: "",
    email: "",
    country: "",
    partnershipType: "",
    otherPartnershipType: "",
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
      const finalPartnershipType =
        form.partnershipType === "Other"
          ? form.otherPartnershipType
          : form.partnershipType;

      await addDoc(collection(db, "partnershipInquiries"), {
        ...form,
        partnershipType: finalPartnershipType,
        toEmail: PARTNERSHIPS_EMAIL,
        status: "new",
        createdAt: serverTimestamp(),
      });

      await emailjs.send(
        "service_0559uuf",
        "template_y01satd",
        {
          to_email: PARTNERSHIPS_EMAIL,
          name: form.contactName,
          email: form.email,
          subject: `New partnership inquiry from ${form.company}`,
          message: `
Company / Organization: ${form.company}

Contact Person: ${form.contactName}

Email: ${form.email}

Country: ${form.country}

Partnership Type: ${finalPartnershipType}

Message:
${form.message}
          `,
          time: new Date().toLocaleString(),
        },
        "Ar9B8fLy3Kiaqf5n5"
      );

      setStatus("Partnership inquiry submitted successfully.");

      setForm({
        company: "",
        contactName: "",
        email: "",
        country: "",
        partnershipType: "",
        otherPartnershipType: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("Error submitting inquiry.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />

        <div className="relative max-w-6xl mx-auto px-4 py-14 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Strategic Partnerships
          </h1>

          <p className="mt-4 text-white/80 max-w-3xl">
            Nanotel Africa is building Africa’s next-generation telecommunications
            infrastructure, equipment ecosystem, and digital connectivity
            platform. We welcome strategic partners, infrastructure financiers,
            development partners, and institutional capital partners.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Partnership Inquiry
          </h2>

          <p className="mt-2 text-slate-600">
            Submit your partnership proposal. Our team will review and respond.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
            <input
              name="company"
              placeholder="Company / Organization"
              value={form.company}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              name="contactName"
              placeholder="Contact person"
              value={form.contactName}
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
              name="partnershipType"
              value={form.partnershipType}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            >
              <option value="" disabled>
                Select partnership type
              </option>

              <option>Telecom Operator</option>
              <option>OEM Equipment Vendor</option>
              <option>Fiber Infrastructure Partner</option>
              <option>EPC Contractor</option>
              <option>Technology Partner</option>
              <option>Other</option>
            </select>

            {form.partnershipType === "Other" && (
              <input
                name="otherPartnershipType"
                placeholder="Please specify partnership type"
                value={form.otherPartnershipType}
                onChange={handleChange}
                className="border rounded-xl px-4 py-3"
              />
            )}

            <textarea
              name="message"
              placeholder="Describe your partnership proposal"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <button className="bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800">
              Submit Partnership Inquiry
            </button>

            {status && (
              <p className="text-green-700 text-sm">{status}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}