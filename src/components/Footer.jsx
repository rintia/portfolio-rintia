"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-bg-dark border-t border-border-card py-12 relative overflow-hidden">
      {/* Decorative grid overlay for footer */}
      <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-display font-bold text-lg text-gradient-primary">
            {portfolioData.profile.name}
          </span>
          <p className="text-text-secondary text-sm mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
          {portfolioData.navigation.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-brand-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-brand-primary/80 hover:bg-brand-primary text-white rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 z-50 ${isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-10 invisible"}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
