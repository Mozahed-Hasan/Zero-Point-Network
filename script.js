// Zero Point Network - script.js

// ---- Navbar scroll effect ----
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  // Active nav link
  const sections = document.querySelectorAll("section[id]");
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });

  // Back to top
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 400) btn.classList.add("visible");
  else btn.classList.remove("visible");
});

// ---- Hamburger menu ----
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
// Close on link click
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ---- FTP Tab Switcher ----
function switchTab(category) {
  // Hide all panels
  document.querySelectorAll(".ftp-category-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".ftp-tab").forEach(t => t.classList.remove("active"));
  // Show selected
  const panel = document.getElementById("panel-" + category);
  const tab = document.getElementById("tab-" + category);
  if (panel) panel.classList.add("active");
  if (tab) tab.classList.add("active");
}

// ---- Scroll to top ----
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---- Contact form submit ----
function submitForm(e) {
  e.preventDefault();
  const btn = document.getElementById("form-submit-btn");
  btn.textContent = "⏳ পাঠানো হচ্ছে...";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "✅ পাঠানো হয়েছে!";
    btn.style.background = "#059669";
    showToast();
    document.getElementById("contactForm").reset();
    setTimeout(() => {
      btn.textContent = "📨 আবেদন পাঠান";
      btn.style.background = "";
      btn.disabled = false;
    }, 4000);
  }, 1500);
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4500);
}

// ---- Intersection Observer for animations ----
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -60px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  // Animate cards and sections
  const animEls = document.querySelectorAll(".pkg-card, .service-card, .contact-card, .ftp-card, .abt-feature, .area-tag");
  animEls.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity .5s ease ${i * 0.06}s, transform .5s ease ${i * 0.06}s`;
    observer.observe(el);
  });

  // Package button click - select package in form
  document.querySelectorAll(".btn-pkg").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const pkgId = btn.closest(".pkg-card").id;
      const pkgMap = {
        "pkg-bachelor": "bachelor",
        "pkg-bhai": "bhai",
        "pkg-friends": "friends",
        "pkg-modhu": "modhu",
        "pkg-mama": "mama",
        "pkg-ustad": "ustad",
        "pkg-posh": "posh",
        "pkg-star": "star",
        "pkg-master": "master",
        "pkg-king": "king"
      };
      const pkgSelect = document.getElementById("package");
      if (pkgSelect && pkgMap[pkgId]) {
        pkgSelect.value = pkgMap[pkgId];
      }
    });
  });
});
