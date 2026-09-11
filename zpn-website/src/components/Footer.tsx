import Image from "next/image";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image src="/Main logo.png" alt="Zero Point Network" width={200} height={80} className="footer-logo" />
          <p className="footer-tagline">ভাটারার সেরা ইন্টারনেট সেবা</p>
          <p className="footer-btrc">✅ BTRC অনুমোদিত নির্ভরযোগ্য প্রতিষ্ঠান</p>
          <div className="footer-socials">
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" id="footer-fb" className="social-link">📘 Facebook</a>
            <a href={contactInfo.maps}     target="_blank" rel="noopener noreferrer" id="footer-map" className="social-link">🗺️ Maps</a>
          </div>
        </div>
        <div className="footer-links-col">
          <h4>কোম্পানি</h4>
          <a href="#about">আমাদের সম্পর্কে</a>
          <a href="#packages">মূল্য তালিকা</a>
          <a href="#coverage">কভারেজ এলাকা</a>
          <a href="#contact">যোগাযোগ</a>
        </div>
        <div className="footer-links-col">
          <h4>সেবা</h4>
          <a href="#packages">হোম ব্রডব্যান্ড</a>
          <a href="#packages">গেমিং সংযোগ</a>
          <a href="#ftp">FTP সার্ভার</a>
          <a href="#contact">নতুন সংযোগ</a>
        </div>
        <div className="footer-links-col">
          <h4>যোগাযোগ</h4>
          <a href={`tel:${contactInfo.phone1}`}>📞 {contactInfo.phone1.replace(/(\d{5})(\d{6})/, "$1-$2")}</a>
          <a href={`tel:${contactInfo.phone2}`}>📞 {contactInfo.phone2.replace(/(\d{5})(\d{6})/, "$1-$2")}</a>
          <span>📍 {contactInfo.address}</span>
          <span>🕗 সকাল ৮টা – রাত ১০টা</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© ২০২৬ Zero Point Network. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>BTRC অনুমোদিত ইন্টারনেট সেবা প্রদানকারী – ভাটারা, ঢাকা</p>
        </div>
      </div>
    </footer>
  );
}
