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
              <div className="map-pin-anim">
                <div className="map-ripple r1" /><div className="map-ripple r2" /><div className="map-ripple r3" />
                <span className="map-pin-icon">📍</span>
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
          </div>
          <div className="coverage-cta-box">
            <p>আপনার এলাকায় সংযোগ পাওয়া যাবে কিনা জানতে:</p>
            <a href={`tel:${contactInfo.phone1}`} className="btn btn-primary" id="coverage-call-btn">
              📞 আজই কল করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
