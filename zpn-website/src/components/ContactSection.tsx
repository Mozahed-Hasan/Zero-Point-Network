"use client";
import { useState } from "react";
import { contactInfo, packages } from "@/lib/data";

const allPkgs = [...packages.personal, ...packages.premium];

interface FormData {
  fullName: string; phone: string; area: string; packageName: string; message: string;
}

export default function ContactSection() {
  const [formType, setFormType] = useState<"connection"|"complaint">("connection");
  const [form, setForm]       = useState<FormData>({ fullName:"", phone:"", area:"", packageName:"", message:"" });
  const [status, setStatus]   = useState<"idle"|"loading"|"success"|"error">("idle");
  const [msg, setMsg]         = useState("");

  const isComplaint = formType === "complaint";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const payload = { ...form, type: formType };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

        <div className="contact-links-grid">
          <a href={`https://wa.me/88${contactInfo.phone2}`} target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <span className="clc-icon">
              {/* WhatsApp icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </span>
            <span className="clc-text">WhatsApp {contactInfo.phone2.replace(/(\d{5})(\d{6})/, "$1-$2")}</span>
            <span className="clc-arrow">›</span>
          </a>
          <a href={`tel:${contactInfo.phone1}`} className="contact-link-card">
            <span className="clc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
            <span className="clc-text">Hotline {contactInfo.phone1.replace(/(\d{5})(\d{6})/, "$1-$2")}</span>
            <span className="clc-arrow">›</span>
          </a>
          <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <span className="clc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </span>
            <span className="clc-text">Message us in Facebook</span>
            <span className="clc-arrow">›</span>
          </a>
          <a href={contactInfo.maps} target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <span className="clc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </span>
            <span className="clc-text">Find us on Google Maps</span>
            <span className="clc-arrow">›</span>
          </a>
        </div>

        <div className="contact-form-wrap">
          <div className="form-toggle-group">
            <button
              type="button"
              className={`form-toggle-btn ${formType === "connection" ? "active" : ""}`}
              onClick={() => setFormType("connection")}
            >
              নতুন সংযোগ
            </button>
            <button
              type="button"
              className={`form-toggle-btn ${formType === "complaint" ? "active" : ""}`}
              onClick={() => setFormType("complaint")}
            >
              অভিযোগ
            </button>
          </div>
          <h3 className="form-title">{formType === "connection" ? "নতুন সংযোগের আবেদন করুন" : "অভিযোগ করুন"}</h3>
          {status === "success" && (
            <div className="form-alert success">✅ {msg}</div>
          )}
          {status === "error" && (
            <div className="form-alert error">❌ {msg}</div>
          )}

          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">পূর্ণ নাম {isComplaint ? "" : "*"}</label>
                <input type="text" id="fullName" name="fullName" value={form.fullName}
                  onChange={handleChange} placeholder="আপনার নাম লিখুন" required={!isComplaint} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">মোবাইল নম্বর {isComplaint ? "" : "*"}</label>
                <input type="tel" id="phone" name="phone" value={form.phone}
                  onChange={handleChange} placeholder="01XXXXXXXXX" required={!isComplaint} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="area">এলাকা *</label>
                <select id="area" name="area" value={form.area} onChange={handleChange} required>
                  <option value="">এলাকা নির্বাচন করুন</option>
                  {["খিলবাড়িরটেক","নূরেরচালা","বউ বাজার","শাহজাহাদপুর","বাঁশতলা","জে-ব্লক","আব্দুল্লাহবাগ","অন্যান্য"].map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="packageName">{isComplaint ? "অভিযোগের ধরন *" : "পছন্দের প্যাকেজ"}</label>
                <select id="packageName" name="packageName" value={form.packageName} onChange={handleChange} required={isComplaint}>
                  {isComplaint ? (
                    <>
                      <option value="">অভিযোগের ধরন নির্বাচন করুন</option>
                      <option value="সংযোগ নিয়ে অভিযোগ">সংযোগ নিয়ে অভিযোগ</option>
                      <option value="স্টাফদের নিয়ে অভিযোগ">স্টাফদের নিয়ে অভিযোগ</option>
                      <option value="সার্ভিস নিয়ে অভিযোগ">সার্ভিস নিয়ে অভিযোগ</option>
                      <option value="অন্যান্য (নিচে বিস্তারিত লিখুন)">অন্যান্য (নিচে বিস্তারিত লিখুন)</option>
                    </>
                  ) : (
                    <>
                      <option value="">প্যাকেজ নির্বাচন করুন</option>
                      {allPkgs.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} – ৳{p.price}/মাস ({p.speed} Mbps)
                        </option>
                      ))}
                    </>
                  )}
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
              {status === "loading" ? "⏳ পাঠানো হচ্ছে..." : formType === "connection" ? "📨 আবেদন পাঠান" : "📨 অভিযোগ পাঠান"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
