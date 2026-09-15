import Image from "next/image";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-inner desktop-footer-view">
        <div className="footer-brand">
          <Image src="/Main logo.png" alt="Zero Point Network" width={250} height={100} className="footer-logo" />
          <p className="footer-tagline">ভাটারার সেরা ইন্টারনেট সেবা</p>
          <div className="footer-socials">
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" id="footer-fb" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              Facebook
            </a>
            <a href={contactInfo.maps} target="_blank" rel="noopener noreferrer" id="footer-map" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Maps
            </a>
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
          <a href={`tel:${contactInfo.phone1}`} style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {contactInfo.phone1.replace(/(\d{5})(\d{6})/, "$1-$2")}
          </a>
          <a href={`tel:${contactInfo.phone2}`} style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {contactInfo.phone2.replace(/(\d{5})(\d{6})/, "$1-$2")}
          </a>
          <span style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {contactInfo.address}
          </span>
        </div>
      </div>

      <div className="container mobile-footer-view" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '30px', paddingBottom: '40px' }}>
        <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
          <Image src="/Main logo.png" alt="Zero Point Network" width={250} height={100} className="footer-logo" style={{ marginBottom: '16px' }} />
          <p className="footer-tagline" style={{ marginBottom: '16px' }}>ভাটারার সেরা ইন্টারনেট সেবা</p>
          <div className="footer-socials" style={{ justifyContent: 'center' }}>
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" id="footer-fb" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              Facebook
            </a>
            <a href={contactInfo.maps} target="_blank" rel="noopener noreferrer" id="footer-map" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Maps
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', fontSize: '1rem', color: 'var(--gray-300)' }}>
          <a href="#packages" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>মূল্য তালিকা</a>
          <a href="#coverage" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>কভারেজ এলাকা</a>
          <a href="#contact" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>যোগাযোগ</a>
          <a href="#ftp" style={{ color: 'var(--gray-300)', textDecoration: 'none' }}>FTP সার্ভার</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', color: 'var(--gray-400)', fontSize: '0.95rem' }}>
          <a href={`tel:${contactInfo.phone1}`} style={{ display:'flex', alignItems:'center', gap:'8px', color: 'var(--gray-400)', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {contactInfo.phone1.replace(/(\d{5})(\d{6})/, "$1-$2")}
          </a>
          <span style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {contactInfo.address}
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © ২০২৬ Zero Point Network. সর্বস্বত্ব সংরক্ষিত। 
            <a href="/admin" style={{color: 'inherit', textDecoration: 'none', marginLeft: '10px', opacity: 0.5}}>Admin Login</a>
          </p>
          <p>BTRC অনুমোদিত ইন্টারনেট সেবা প্রদানকারী – ভাটারা, ঢাকা</p>
        </div>
      </div>
    </footer>
  );
}
