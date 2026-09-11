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
              <div className="about-badge-float ab2" id="about-badge-clients">
                <span className="about-num">১০০০+</span>
                <span className="about-num-label">সন্তুষ্ট গ্রাহক</span>
              </div>
              <div className="about-network-visual">
                <div className="network-node n1"><span>🏠</span><small>Home</small></div>
                <div className="network-node n2"><span>🏢</span><small>Office</small></div>
                <div className="network-node n3"><span>🎮</span><small>Gaming</small></div>
                <div className="network-center"><span>📡</span><small>ZPN</small></div>
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
                ["🛡️","BTRC অনুমোদিত","সরকার অনুমোদিত ও লাইসেন্সপ্রাপ্ত ISP"],
                ["⚡","সুপার ফাস্ট ফাইবার","সর্বাধুনিক অপটিক্যাল ফাইবার প্রযুক্তি"],
                ["🎧","২৪/৭ সাপোর্ট","যেকোনো সময় আমাদের টিম সাহায্য করতে প্রস্তুত"],
                ["🎁","সংযোগ চার্জ ফ্রি","নতুন সংযোগে কোনো অতিরিক্ত চার্জ নেই"],
              ].map(([icon, title, desc]) => (
                <div key={title} className="abt-feature">
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
