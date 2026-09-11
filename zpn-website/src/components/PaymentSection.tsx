export default function PaymentSection() {
  return (
    <section className="section payment-section" id="payment">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">সহজ ও নিরাপদ পেমেন্ট</h2>
          <p className="section-sub">
            বিকাশ, নগদ, রকেট সহ সকল মোবাইল ব্যাংকিং এবং ই-ব্যাংকিং এর মাধ্যমে ঘরে বসেই বিল পরিশোধ করুন।
          </p>
        </div>

        <div className="payment-wrapper">
          <div className="payment-box">
            <h3>মোবাইল ব্যাংকিং</h3>
            <div className="payment-logos">
              <span className="pay-tag bkash">bKash</span>
              <span className="pay-tag nagad">Nagad</span>
              <span className="pay-tag rocket">Rocket</span>
              <span className="pay-tag upay">Upay</span>
            </div>
          </div>

          <div className="payment-box">
            <h3>ই-ব্যাংকিং ও কার্ড</h3>
            <div className="payment-logos">
              <span className="pay-tag visa">VISA</span>
              <span className="pay-tag mastercard">Mastercard</span>
              <span className="pay-tag nexus">NexusPay</span>
            </div>
          </div>
        </div>

        <div className="ssl-banner">
          <p>🔒 Secured by <strong>SSLCOMMERZ</strong></p>
        </div>
      </div>
    </section>
  );
}
