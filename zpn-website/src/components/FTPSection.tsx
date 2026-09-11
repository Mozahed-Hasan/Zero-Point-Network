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
          {[["⚡","লোকাল স্পিডে ডাউনলোড"],["♾️","আনলিমিটেড ডাউনলোড"],["🆓","সম্পূর্ণ বিনামূল্যে"],["🔐","শুধু ZPN গ্রাহকদের জন্য"]].map(([icon,text]) => (
            <div key={text} className="ftp-info-bar-item"><span>{icon}</span> {text}</div>
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
