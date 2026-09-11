"use client";
import { useState } from "react";
import { contactInfo, packages } from "@/lib/data";

const allPkgs = [...packages.personal, ...packages.premium];

interface FormData {
  fullName: string; phone: string; area: string; packageName: string; message: string;
}

export default function ContactSection() {
  const [form, setForm]       = useState<FormData>({ fullName:"", phone:"", area:"", packageName:"", message:"" });
  const [status, setStatus]   = useState<"idle"|"loading"|"success"|"error">("idle");
  const [msg, setMsg]         = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMsg(data.message);
        setForm({ fullName:"", phone:"", area:"", packageName:"", message:"" });
      } else {
        setStatus("error");
        setMsg(data.message);
      }
    } catch {
      setStatus("error");
      setMsg("নেটওয়ার্ক সমস্যা। আবার চেষ্টা করুন।");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">আমাদের সাথে যোগাযোগ করুন</h2>
          <p className="section-sub">নতুন সংযোগ নিতে বা যেকোনো সমস্যায় আমাদের সাথে যোগাযোগ করুন</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card" id="contact-phone">
            <span className="contact-icon">📱</span>
            <h3>ফোন নম্বর</h3>
            <a href={`tel:${contactInfo.phone1}`} className="contact-link">
              {contactInfo.phone1.replace(/(\d{5})(\d{6})/, "$1-$2")}
            </a>
            <a href={`tel:${contactInfo.phone2}`} className="contact-link" style={{ display: 'block', marginTop: '5px' }}>
              {contactInfo.phone2.replace(/(\d{5})(\d{6})/, "$1-$2")}
            </a>
            <p style={{ marginTop: '10px' }}>সকাল ৮টা – রাত ১০টা</p>
          </div>
          <div className="contact-card" id="contact-location">
            <span className="contact-icon">📍</span>
            <h3>আমাদের ঠিকানা</h3>
            <p className="contact-addr">{contactInfo.address}</p>
            <a href={contactInfo.maps} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline-sm" id="contact-map-btn" style={{ marginTop: "10px" }}>
              🗺️ Google Maps →
            </a>
          </div>
          <div className="contact-card" id="contact-support">
            <span className="contact-icon">🎧</span>
            <h3>অনলাইন সাপোর্ট</h3>
            <p>আমাদের Facebook পেজে মেসেজ করুন</p>
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline-sm" id="contact-fb-btn">
              📘 Facebook →
            </a>
          </div>
        </div>

        <div className="contact-form-wrap">
          <h3 className="form-title">নতুন সংযোগের আবেদন করুন</h3>

          {status === "success" && (
            <div className="form-alert success">✅ {msg}</div>
          )}
          {status === "error" && (
            <div className="form-alert error">❌ {msg}</div>
          )}

          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">পূর্ণ নাম *</label>
                <input type="text" id="fullName" name="fullName" value={form.fullName}
                  onChange={handleChange} placeholder="আপনার নাম লিখুন" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">মোবাইল নম্বর *</label>
                <input type="tel" id="phone" name="phone" value={form.phone}
                  onChange={handleChange} placeholder="01XXXXXXXXX" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="area">এলাকা *</label>
                <select id="area" name="area" value={form.area} onChange={handleChange} required>
                  <option value="">এলাকা নির্বাচন করুন</option>
                  {["খিলবাড়িটেক","নূরেরচালা","বউবাজার","শাহজাহানপুর","ভাটারা মূল এলাকা","অন্যান্য"].map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="packageName">পছন্দের প্যাকেজ</label>
                <select id="packageName" name="packageName" value={form.packageName} onChange={handleChange}>
                  <option value="">প্যাকেজ নির্বাচন করুন</option>
                  {allPkgs.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} – ৳{p.price}/মাস ({p.speed} Mbps)
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">বিস্তারিত বার্তা</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange}
                rows={4} placeholder="আপনার ঠিকানা বা অতিরিক্ত তথ্য লিখুন..." />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg form-submit"
              id="form-submit-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "⏳ পাঠানো হচ্ছে..." : "📨 আবেদন পাঠান"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
