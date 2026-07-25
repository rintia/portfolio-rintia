import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function ProjectsGrid() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center md:items-start text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Showcase</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col h-full bg-bg-card border border-white/5 rounded-2xl overflow-hidden glow-card"
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-white/5">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                {/* Visual hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-text-secondary">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2 flex-1">
                  <h3 className="font-display font-bold text-white text-xl group-hover:text-brand-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-text-secondary hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Repository</span>
                  </a>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center space-x-1.5 text-xs text-brand-primary font-semibold hover:text-white transition-colors duration-200 group-hover:translate-x-0.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
