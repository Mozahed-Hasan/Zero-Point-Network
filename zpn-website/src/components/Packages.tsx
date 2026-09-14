"use client";

import { useState } from "react";
import { packages } from "@/lib/data";
import type { Package } from "@/lib/data";
import Image from "next/image";

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`pkg-card new-design${pkg.popular ? " popular" : ""}${pkg.best ? " king-card" : ""}`}
      id={`pkg-${pkg.id}`}
      style={pkg.best ? { backgroundColor: pkg.color, color: "#fff" } : undefined}
    >
      <div className="pkg-name" style={{ color: pkg.best ? "#fff" : pkg.color }}>
        {pkg.name}
      </div>
      
      <div className="pkg-speed-wrap" style={{ color: pkg.best ? "#fff" : pkg.color }}>
        <span className="pkg-speed-num">{pkg.speed}</span>
        <span className="pkg-speed-unit">Mbps</span>
      </div>
      
      <div className="pkg-traffic">UNLIMITED TRAFFIC</div>
      
      <ul className="pkg-features-list">
        <li>Buffer-Free Facebook</li>
        <li>4K YouTube Stream</li>
        <li>Superfast BDIX Speed</li>
        <li>Optical Fiber Connection</li>
        <li>IPv6 Public IP Only</li>
        <li>24/7 Phone Support</li>
      </ul>
      
      <div className="pkg-divider" />
      
      <div className="pkg-price-new">
        {pkg.price.toLocaleString("en-US")} Tk/mo
      </div>
      
      <div className="pkg-subtext">
        Installation Charge: Free
      </div>
      
      <a
        href="#contact"
        className={`btn btn-block ${pkg.best ? "btn-light" : "btn-dark"}`}
        style={!pkg.best ? { backgroundColor: pkg.color, color: "#fff" } : undefined}
        id={`buy-${pkg.id}`}
      >
        Get Now
      </a>
    </div>
  );
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState<"all" | "family" | "premium">("all");

  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">আমাদের ইন্টারনেট প্যাকেজ</h2>
          <p className="section-sub">
            আপনার বাজেট ও প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন। সংযোগ চার্জ সম্পূর্ণ বিনামূল্যে!
          </p>
        </div>

        <div className="pkg-tabs">
          <button 
            className={`pkg-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Packages
          </button>
          <button 
            className={`pkg-tab ${activeTab === 'family' ? 'active' : ''}`}
            onClick={() => setActiveTab('family')}
          >
            👨‍👩‍👧‍👦 Family Package
          </button>
          <button 
            className={`pkg-tab ${activeTab === 'premium' ? 'active' : ''}`}
            onClick={() => setActiveTab('premium')}
          >
            👑 Premium Package
          </button>
        </div>

        {activeTab === 'all' && (
          <div className="pkg-category">
            <div className="packages-grid family-grid">
              {[...packages.personal, ...packages.premium].map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
            </div>
          </div>
        )}

        {activeTab === 'family' && (
          <div className="pkg-category">
            <div className="packages-grid family-grid">
              {packages.personal.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
            </div>
          </div>
        )}

        {activeTab === 'premium' && (
          <div className="pkg-category">
            <div className="packages-grid premium-grid">
              {packages.premium.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
            </div>
          </div>
        )}

        <div className="pkg-note">
          <div className="gaming-support-banner">
            <div className="gaming-logos">
              <Image src="/E-footballogo.png" alt="eFootball" width={180} height={180} className="game-logo" />
              <Image src="/Free-Fire_LOGO.png" alt="Free Fire" width={180} height={180} className="game-logo" />
              <Image src="/PUBG_Logo.png" alt="PUBG" width={180} height={180} className="game-logo" />
            </div>
            <p className="gaming-text">
              eFootball • Free Fire • PUBG তে পাচ্ছেন নিশ্চিত low latency তাই গেমিং হবে নিশ্চিন্তে!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
