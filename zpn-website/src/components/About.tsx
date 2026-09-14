export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-visual-side">
            <div className="about-img-block">
              <div className="about-badge-float" id="about-badge-years">
                <span className="about-num">৫+</span>
                <span className="about-num-label">বছরের অভিজ্ঞতা</span>
              </div>
              <div className="about-network-visual">
                <div className="network-node n1">
                  <span>🏠</span>
                  <small>Home</small>
                </div>
                <div className="network-node n2">
                  <span>🏢</span>
                  <small>Office</small>
                </div>
                <div className="network-node n3">
                  <span>🎮</span>
                  <small>Gaming</small>
                </div>
                <div className="network-center network-center-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Main logo.png" alt="ZPN" style={{ width: '100px', height: 'auto', objectFit: 'contain' }} />
                </div>
                <svg className="network-lines" viewBox="0 0 300 300">
                  <line x1="150" y1="150" x2="60"  y2="60"  stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                  <line x1="150" y1="150" x2="240" y2="60"  stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                  <line x1="150" y1="150" x2="150" y2="240" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="about-text-side">
            <h2 className="section-title left-align">Zero Point Network</h2>
            <p className="about-tagline">ভাটারার বিশ্বস্ত ইন্টারনেট সেবা প্রদানকারী</p>
            <p className="about-desc">
              Zero Point Network হলো ভাটারা, ঢাকার একটি BTRC অনুমোদিত ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান।
              আমরা বিশ্বাস করি প্রতিটি পরিবার ও ব্যবসা প্রতিষ্ঠান দ্রুত ও নির্ভরযোগ্য ইন্টারনেট সংযোগ পাওয়ার অধিকার রাখে।
            </p>
            <p className="about-desc">
              আমাদের অত্যাধুনিক ফাইবার অপটিক নেটওয়ার্কের মাধ্যমে আমরা খিলবাড়িটেক, নূরেরচালা, বউবাজার ও
              শাহজাহানপুরসহ ভাটারার বিভিন্ন এলাকায় সর্বোচ্চ গতির ইন্টারনেট সেবা প্রদান করে আসছি।
            </p>
            <div className="about-features">
              {[
                [<svg key="shield" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, "BTRC অনুমোদিত","সরকার অনুমোদিত ও লাইসেন্সপ্রাপ্ত ISP"],
                [<svg key="zap" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, "সুপার ফাস্ট ফাইবার","সর্বাধুনিক অপটিক্যাল ফাইবার প্রযুক্তি"],
                [<svg key="headphones" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>, "২৪/৭ সাপোর্ট","যেকোনো সময় আমাদের টিম সাহায্য করতে প্রস্তুত"],
                [<svg key="gift" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>, "সংযোগ চার্জ ফ্রি","নতুন সংযোগে কোনো অতিরিক্ত চার্জ নেই"],
              ].map(([icon, title, desc]) => (
                <div key={String(title)} className="abt-feature">
                  <span className="abt-icon">{icon}</span>
                  <div><h4>{title}</h4><p>{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
