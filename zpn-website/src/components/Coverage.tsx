import { coverageAreas, contactInfo } from "@/lib/data";

export default function Coverage() {
  return (
    <section className="section coverage-section" id="coverage">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">আমাদের কভারেজ এলাকা</h2>
          <p className="section-sub">ভাটারা, ঢাকার নিচের এলাকাগুলোতে আমরা সেবা প্রদান করি</p>
        </div>
        <div className="coverage-wrapper">
          <div className="coverage-map-side">
            <div className="map-placeholder">
              <div className="map-pin-anim" style={{ animation: 'none' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Google Maps" width={90} height={90} />
              </div>
              <p className="map-label">ভাটারা, ঢাকা</p>
              <p className="map-sub">Vatara, Dhaka</p>
              <a href={contactInfo.maps} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-sm" id="coverage-map-btn">
                Google Maps এ দেখুন →
              </a>
            </div>
          </div>
          <div className="coverage-areas-side">
            <h3 className="coverage-areas-title">সংযুক্ত এলাকাসমূহ</h3>
            <div className="areas-grid">
              {coverageAreas.map((area) => (
                <div key={area.id}
                  className={`area-tag ${area.active ? "active-area" : "coming-soon"}`}
                  id={`area-${area.id}`}>
                  <span className={`area-dot${area.active ? "" : " coming"}`} />
                  {area.name}
                </div>
              ))}
            </div>
            <div className="coverage-cta-box">
              <p>আপনার এলাকায় সংযোগ পাওয়া যাবে কিনা জানতে:</p>
              <a href={`tel:${contactInfo.phone1}`} className="btn btn-primary" id="coverage-call-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                আজই কল করুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
