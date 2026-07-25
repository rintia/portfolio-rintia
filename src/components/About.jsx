import { portfolioData } from "@/data/portfolio";
import * as Icons from "lucide-react";

// Dynamic Icon rendering helper for interest cards
function InterestIcon({ name, className }) {
  const IconComponent = Icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

export default function About() {
  const { aboutParagraphs } = portfolioData.profile;
  const { interests } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark/50">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center md:items-start text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">About Me</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-2">
            My Journey & Story
          </h2>
          <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Journey Narrative */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary text-base leading-relaxed">
            {aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Interests & Hobbies Grid */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Beyond the Code
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest) => (
                <div 
                  key={interest.title}
                  className="p-5 glass-panel rounded-2xl glow-card flex flex-col space-y-3"
                >
                  <div className="p-3 bg-brand-primary/10 rounded-xl w-fit text-brand-primary">
                    <InterestIcon name={interest.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    {interest.title}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
