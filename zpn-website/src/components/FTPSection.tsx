"use client";
import { useState } from "react";
import { ftpCategories } from "@/lib/data";
import type { FTPLink } from "@/lib/data";

function FTPLinkCard({ link }: { link: FTPLink }) {
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer"
      className="ftp-link-card" id={`ftp-${link.id}`}>
      <span className="ftp-lc-icon">{link.icon}</span>
      <div className="ftp-lc-info">
        <h4>{link.name}</h4>
        <p>{link.server}</p>
      </div>
      <span className="ftp-lc-arrow">→</span>
    </a>
  );
}

export default function FTPSection() {
  const [activeTab, setActiveTab] = useState("movies");
  const currentCategory = ftpCategories.find((c) => c.id === activeTab)!;

  return (
    <section className="section ftp-section" id="ftp">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">আমাদের FTP সার্ভার</h2>
          <p className="section-sub">
            সুপার ফাস্ট লোকাল কন্টেন্ট ডাউনলোড করুন সম্পূর্ণ বিনামূল্যে — শুধুমাত্র ZPN গ্রাহকদের জন্য
          </p>
        </div>

        <div className="ftp-info-bar">
          {[
            [<svg key="zap" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, "লোকাল স্পিডে ডাউনলোড"],
            [<svg key="infinite" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"/></svg>, "আনলিমিটেড ডাউনলোড"],
            [<svg key="gift" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>, "সম্পূর্ণ বিনামূল্যে"],
            [<svg key="lock" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, "শুধু ZPN গ্রাহকদের জন্য"],
          ].map(([icon, text]) => (
            <div key={String(text)} className="ftp-info-bar-item"><span>{icon}</span> {text}</div>
          ))}
        </div>

        <div className="ftp-tabs" id="ftpTabs">
          {ftpCategories.map((cat) => (
            <button
              key={cat.id}
              className={`ftp-tab${activeTab === cat.id ? " active" : ""}`}
              id={`tab-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="ftp-category-panel active" id={`panel-${currentCategory.id}`}>
          <div className={`ftp-links-grid${currentCategory.id === "partners" ? " ftp-partners-grid" : ""}`}>
            {currentCategory.links.map((link) => (
              <FTPLinkCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
