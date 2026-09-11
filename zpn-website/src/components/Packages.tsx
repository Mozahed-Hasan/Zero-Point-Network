import { packages } from "@/lib/data";
import type { Package } from "@/lib/data";
import Image from "next/image";

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`pkg-card${pkg.popular ? " popular" : ""}${pkg.best ? " premium-card king-card" : ""}`}
      id={`pkg-${pkg.id}`}
    >
      {pkg.popular && <div className="popular-badge">⭐ জনপ্রিয়</div>}
      {pkg.best && <div className="popular-badge king-badge">👑 সেরা</div>}
      <div className="pkg-header" style={{ "--pkg-color": pkg.color } as React.CSSProperties}>
        <span className="pkg-emoji">{pkg.emoji}</span>
        <span className="pkg-name">{pkg.name}</span>
      </div>
      <div className="pkg-speed">{pkg.speed} <span>Mbps</span></div>
      <div className="pkg-price">৳{pkg.price.toLocaleString("bn-BD")}<span>/মাস</span></div>
      <ul className="pkg-features">
        <li>✅ নিরবচ্ছিন্ন সংযোগ</li>
        <li>✅ ২৪/৭ সাপোর্ট</li>
        <li>✅ সুপার ডাউন স্পিড</li>
        <li>✅ সংযোগ চার্জ ফ্রি</li>
      </ul>
      <a
        href="#contact"
        className={`btn btn-pkg${pkg.popular ? " popular-btn" : ""}${pkg.best ? " king-btn" : ""}`}
        id={`buy-${pkg.id}`}
      >
        এখনই নিন
      </a>
    </div>
  );
}

export default function Packages() {
  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">আমাদের ইন্টারনেট প্যাকেজ</h2>
          <p className="section-sub">
            আপনার বাজেট ও প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন। সংযোগ চার্জ সম্পূর্ণ বিনামূল্যে!
          </p>
        </div>

        <div className="pkg-category">
          <h3 className="pkg-cat-title">
            <span className="cat-badge personal">👨‍👩‍👧‍👦 Family Package</span>
          </h3>
          <div className="packages-grid family-grid">
            {packages.personal.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>

        <div className="pkg-category">
          <h3 className="pkg-cat-title">
            <span className="cat-badge premium">👑 প্রিমিয়াম প্যাকেজ</span>
          </h3>
          <div className="packages-grid premium-grid">
            {packages.premium.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>

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
