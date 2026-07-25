"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of sticky header
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-navbar py-3 shadow-lg" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display font-extrabold text-xl tracking-tight text-gradient-primary hover:opacity-90 transition-opacity"
        >
          {portfolioData.profile.name.split(" ")[0]}
          <span className="text-white">.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {portfolioData.navigation.map((link) => {
            const hrefId = link.href.replace("#", "");
            const isActive = activeSection === hrefId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium text-sm transition-colors relative py-1 ${isActive ? "text-brand-primary" : "text-text-secondary hover:text-text-primary"}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-72 bg-bg-dark border-l border-border-card shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-24">
          <div className="flex flex-col space-y-6">
            {portfolioData.navigation.map((link) => {
              const hrefId = link.href.replace("#", "");
              const isActive = activeSection === hrefId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-medium transition-colors ${isActive ? "text-brand-primary pl-2 border-l-2 border-brand-primary" : "text-text-secondary hover:text-text-primary"}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="text-xs text-text-secondary border-t border-border-card pt-6">
            <p>&copy; {new Date().getFullYear()} {portfolioData.profile.name}</p>
            <p className="mt-1">Available for work</p>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden transition-opacity"
        />
      )}
    </nav>
  );
}
