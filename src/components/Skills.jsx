import { portfolioData } from "@/data/portfolio";
import { Monitor, Server, Cpu } from "lucide-react";

export default function Skills() {
  const { frontend, backend, tools } = portfolioData.skills;

  const categories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-5 h-5" />,
      skills: frontend,
      color: "from-blue-500 to-indigo-500 shadow-blue-500/10"
    },
    {
      title: "Backend & Databases",
      icon: <Server className="w-5 h-5" />,
      skills: backend,
      color: "from-purple-500 to-pink-500 shadow-purple-500/10"
    },
    {
      title: "Tools & Platforms",
      icon: <Cpu className="w-5 h-5" />,
      skills: tools,
      color: "from-teal-500 to-emerald-500 shadow-teal-500/10"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center md:items-start text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Expertise</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-2">
            Technical Skillset
          </h2>
          <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.title}
              className="p-6 glass-panel rounded-2xl glow-card border border-white/5 flex flex-col space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 text-white">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-lg">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col space-y-1.5">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-text-secondary">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      {/* Animated Progress Bar Fill */}
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
