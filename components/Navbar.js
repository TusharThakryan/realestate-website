"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#listings" },
  { label: "About", href: "#about" },
  { label: "Agents", href: "#agents" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-display font-semibold text-cream tracking-wide">
            Whitecollar
            <span className="text-gold-400 group-hover:text-gold-300 transition-colors duration-200">
              {" "}Realty
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-navy-100 hover:text-gold-400 transition-colors duration-200 py-2
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+10000000000"
            className="text-sm font-semibold text-navy-100 hover:text-gold-400 transition-colors duration-200"
          >
            (000) 000-0000
          </a>
          <a
            href="#contact"
            className="bg-gold-400 text-navy-900 text-sm font-semibold px-5 py-2.5 rounded-md
              hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-200"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-cream hover:text-gold-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-700 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-navy-100 hover:text-gold-400 transition-colors duration-200 text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold-400 text-navy-900 text-sm font-semibold px-5 py-3 rounded-md text-center hover:bg-gold-300 transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}
