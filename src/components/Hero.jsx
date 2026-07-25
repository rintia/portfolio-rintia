import { portfolioData } from "@/data/portfolio";
import { Mail, MessageSquare, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Hero() {
  const { name, title, tagline, resumeUrl, socials } = portfolioData.profile;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-secondary/10 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10 w-full">
        {/* Bio / Text */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel border border-white/5 text-xs text-brand-primary font-medium tracking-wide animate-pulse">
            <span className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
            <span>Open to Work & Freelance</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Hi, I'm <span className="text-gradient-primary">{name}</span>
          </h1>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            {title}
          </h2>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            {tagline}
          </p>

          {/* Social Links & CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 transition-all duration-200 text-white font-medium rounded-xl shadow-lg shadow-brand-primary/20 w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 glass-panel text-white hover:bg-white/5 transition-all duration-200 font-medium rounded-xl w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Icons Link Bar */}
          <div className="flex items-center justify-center space-x-4 pt-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-panel text-text-secondary hover:text-white rounded-xl hover:-translate-y-1 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-panel text-text-secondary hover:text-white rounded-xl hover:-translate-y-1 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-panel text-text-secondary hover:text-white rounded-xl hover:-translate-y-1 transition-all duration-200"
              aria-label="Twitter Profile"
            >
              <TwitterIcon className="w-5 h-5" />

            </a>
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-panel text-text-secondary hover:text-white rounded-xl hover:-translate-y-1 transition-all duration-200"
              aria-label="Facebook Profile"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
