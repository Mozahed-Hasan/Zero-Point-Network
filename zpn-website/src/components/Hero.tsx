"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image src="/zpn_hero_bg.jpg" alt="Network Background" fill className="hero-bg-img" priority />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge-btrc">
            <Image src="/btrc_logo.png" alt="BTRC" width={32} height={32} style={{ objectFit: 'contain' }} />
            BTRC অনুমোদিত প্রতিষ্ঠান
          </span>
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
              <span className="stat-num">২৪/৭</span>
              <span className="stat-label">কাস্টমার সাপোর্ট</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">300<span style={{ fontSize: "1rem" }}>Mbps</span></span>
              <span className="stat-label">সর্বোচ্চ গতি</span>
            </div>
          </div>
          <div className="feature-tags" style={{ marginTop: '24px' }}>
            <span className="ftag">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>
              Gaming Optimized
            </span>
            <span className="ftag">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
              4K Streaming
            </span>
            <span className="ftag">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Secure Network
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-slider" ref={emblaRef}>
            <div className="slider-track">
              {/* Add your poster images here */}
              <div className="slide-card">
                <div className="slide-placeholder" style={{pointerEvents: 'none'}}>Poster 1</div>
              </div>
              <div className="slide-card">
                <div className="slide-placeholder" style={{pointerEvents: 'none'}}>Poster 2</div>
              </div>
              <div className="slide-card">
                <div className="slide-placeholder" style={{pointerEvents: 'none'}}>Poster 3</div>
              </div>
            </div>
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
