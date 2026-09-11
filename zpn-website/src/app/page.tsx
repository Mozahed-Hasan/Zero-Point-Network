import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Coverage from "@/components/Coverage";
import FTPSection from "@/components/FTPSection";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Services strip data
const services = [
  { icon:"🏠", title:"হোম ব্রডব্যান্ড",  desc:"পরিবারের জন্য দ্রুত ও নির্ভরযোগ্য ইন্টারনেট" },
  { icon:"🎮", title:"গেমিং সংযোগ",      desc:"লো লেটেন্সি, হাই স্পিড গেমিং অভিজ্ঞতা" },
  { icon:"💼", title:"কর্পোরেট প্ল্যান",  desc:"ব্যবসা প্রতিষ্ঠানের জন্য ডেডিকেটেড সংযোগ" },
  { icon:"📡", title:"অপটিক্যাল ফাইবার", desc:"সর্বাধুনিক ফাইবার অপটিক নেটওয়ার্ক পরিকাঠামো" },
];

import PaymentSection from "@/components/PaymentSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Services Strip */}
      <section className="services-strip">
        <div className="container services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <span className="svc-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Packages />
      <Coverage />
      <FTPSection />
      <About />
      <PaymentSection />
      <ContactSection />
      <Footer />

      {/* Back to top */}
      <BackToTop />
    </>
  );
}

// Simple back-to-top using client component
import BackToTop from "@/components/BackToTop";
