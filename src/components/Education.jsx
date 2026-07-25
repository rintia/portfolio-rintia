import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-bg-dark/50">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Academic Background</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-2">
            Education
          </h2>
          <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-10 max-w-2xl mx-auto">
          {education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline bullet dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-brand-primary border-4 border-bg-dark transition-all duration-300 group-hover:scale-125 group-hover:bg-brand-accent shadow-[0_0_8px_rgba(99,102,241,0.5)]" />

              <div className="p-6 glass-panel rounded-2xl glow-card border border-white/5 space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-white text-lg sm:text-xl group-hover:text-brand-primary transition-colors duration-200 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-brand-primary shrink-0" />
                      {edu.degree}
                    </h3>
                    <p className="text-text-secondary text-sm font-medium mt-1 pl-7">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 text-xs text-brand-accent font-medium px-2.5 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/10 w-fit sm:self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                {/* Optional Achievements/Details */}
                {edu.project && (
                  <div className="flex items-start space-x-2 text-text-secondary text-sm leading-relaxed pt-3 border-t border-white/5">
                    <Award className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                    <p>{edu.project}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
