import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image src="/zpn_hero_bg.jpg" alt="Network Background" fill className="hero-bg-img" priority />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge-btrc">✅ BTRC অনুমোদিত প্রতিষ্ঠান</span>
          <h1 className="hero-title">
            প্রতিদিনের ইন্টারনেট ব্যবহারে<br />
            <span className="highlight">সংযোগ হোক শক্তিশালী,</span><br />
            গতি হোক সেরা
          </h1>
          <p className="hero-sub">
            ভাটারা, ঢাকার সেরা ফাইবার অপটিক ইন্টারনেট সেবা। সংযোগ চার্জ সম্পূর্ণ ফ্রি!
          </p>
          <div className="hero-actions">
            <a href="#packages" className="btn btn-primary btn-lg" id="hero-packages-btn">প্যাকেজ দেখুন</a>
            <a href="#contact" className="btn btn-outline btn-lg" id="hero-contact-btn">যোগাযোগ করুন</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">১০০০+</span>
              <span className="stat-label">সক্রিয় সংযোগ</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">২৪/৭</span>
              <span className="stat-label">কাস্টমার সাপোর্ট</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">300<span style={{ fontSize: "1rem" }}>Mbps</span></span>
              <span className="stat-label">সর্বোচ্চ গতি</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="speed-ring">
            <div className="ring r1" /><div className="ring r2" /><div className="ring r3" />
            <div className="ring-center">
              <span className="ring-speed">300</span>
              <span className="ring-unit">Mbps</span>
            </div>
          </div>
          <div className="feature-tags">
            <span className="ftag">🎮 Gaming Optimized</span>
            <span className="ftag">📺 4K Streaming</span>
            <span className="ftag">🔒 Secure Network</span>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f8faff" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
