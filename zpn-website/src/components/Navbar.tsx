"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ftpCategories } from "@/lib/data";

const navItems = [
  { href: "#home",     label: "হোম" },
  { href: "#packages", label: "প্যাকেজ" },
  { href: "#coverage", label: "এলাকা" },
  { href: "#ftp",      label: "FTP সার্ভার" },
  { href: "#about",    label: "আমাদের সম্পর্কে" },
  { href: "#contact",  label: "যোগাযোগ" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let cur = "home";
      sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
      <div className="container nav-inner">
        <Link href="#home" className="logo-link" onClick={() => setMenuOpen(false)}>
          <Image src="/Main logo.png" alt="Zero Point Network" width={180} height={70} className="logo-img" priority />
        </Link>

        <nav className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          {navItems.map((item) => {
            if (item.href === "#ftp") {
              return (
                <div key={item.href} className="nav-dropdown">
                  <a
                    href={item.href}
                    className={`nav-link${active === item.href.slice(1) ? " active" : ""}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    {item.label} ▾
                  </a>
                  <div className="nav-dropdown-content">
                    {ftpCategories.map(cat => (
                      <div key={cat.id} className="nav-dropdown-item">
                        {cat.label} <span style={{ fontSize: "0.7rem", marginLeft: "10px" }}>▶</span>
                        <div className="nav-sub-dropdown">
                          {cat.links.map(link => (
                            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="nav-sub-item">
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link${active === item.href.slice(1) ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="nav-cta">
          <a href="tel:01849663758" className="btn btn-primary" id="nav-call-btn">📞 কল করুন</a>
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
