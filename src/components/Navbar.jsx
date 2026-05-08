import { useEffect, useState } from "react";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push({ observer, el });
    });
    return () => observers.forEach(({ observer, el }) => observer.unobserve(el));
  }, []);

  return (
    <nav
      className={`sticky top-4 z-50 mb-10 rounded-2xl border px-6 py-3.5 transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-slate-900/80 shadow-xl shadow-black/20 backdrop-blur-xl"
          : "border-white/5 bg-slate-900/50 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#home" className="text-base font-black tracking-wide text-white">
          Abu<span className="text-orange-400">Bakr</span>
          <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            dev
          </span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active === href
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {active === href && (
                <span className="absolute inset-0 rounded-lg bg-white/8" />
              )}
              <span className="relative">{label}</span>
              {active === href && (
                <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-orange-400" />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-500/30"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
