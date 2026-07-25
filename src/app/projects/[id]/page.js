import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, ExternalLink, ShieldAlert, Award, Compass, RefreshCw } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-dark flex items-center justify-center p-6 text-center">
        <div className="max-w-md p-8 glass-panel rounded-3xl border border-white/5 space-y-6">
          <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-red-500 mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h1 className="font-display font-black text-2xl text-white">Project Not Found</h1>
          <p className="text-text-secondary text-sm leading-relaxed">
            The project directory you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-primary text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary flex flex-col justify-between relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-secondary/10 blur-[120px] pointer-events-none" />

      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-20 relative z-10 w-full flex-grow space-y-12">
        {/* Navigation / Back CTA */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-sm text-text-secondary hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Project Detail</span>
        </div>

        {/* Project Header Banner */}
        <div className="relative h-64 md:h-[400px] w-full rounded-3xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-w-1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
          
          {/* Header Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight">
                {project.title}
              </h1>
              <p className="text-text-secondary text-sm md:text-base max-w-2xl leading-relaxed">
                {project.shortDescription}
              </p>
            </div>
            
            {/* CTA Link Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 glass-panel text-white hover:bg-white/5 transition-colors rounded-xl text-sm font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-90 transition-opacity rounded-xl text-sm font-semibold shadow-lg shadow-brand-primary/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Technology Stack Grid Section */}
        <div className="p-6 glass-panel rounded-2xl border border-white/5 flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase tracking-wider text-text-secondary font-bold mr-3">Tech Stack:</span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Overview & Learnings (Main Body) */}
          <div className="md:col-span-8 space-y-8">
            {/* Project Overview */}
            <div className="p-8 glass-panel rounded-3xl border border-white/5 space-y-4">
              <h2 className="font-display font-black text-xl md:text-2xl text-white flex items-center space-x-2">
                <Compass className="w-5.5 h-5.5 text-brand-primary" />
                <span>In-Depth Overview</span>
              </h2>
              <div className="w-8 h-0.5 bg-brand-primary rounded-full" />
              <p className="text-text-secondary text-sm md:text-base leading-relaxed pt-2">
                {project.overview}
              </p>
            </div>

            {/* Challenges & Learnings */}
            <div className="p-8 glass-panel rounded-3xl border border-white/5 space-y-4">
              <h2 className="font-display font-black text-xl md:text-2xl text-white flex items-center space-x-2">
                <Award className="w-5.5 h-5.5 text-brand-secondary" />
                <span>Challenges & Learnings</span>
              </h2>
              <div className="w-8 h-0.5 bg-brand-secondary rounded-full" />
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">The Hurdle:</h4>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-1">
                    {project.challenges}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-accent uppercase tracking-wider mt-4">The Solution & Key Learning:</h4>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-1">
                    {project.learnings}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Roadmap (Side Panel) */}
          <div className="md:col-span-4 p-8 glass-panel rounded-3xl border border-white/5 space-y-6">
            <h2 className="font-display font-black text-lg md:text-xl text-white flex items-center space-x-2">
              <RefreshCw className="w-5 h-5 text-brand-accent" />
              <span>Future Roadmap</span>
            </h2>
            <div className="w-8 h-0.5 bg-brand-accent rounded-full" />

            <div className="flex flex-col space-y-4 pt-2">
              {project.roadmap.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-[10px] text-brand-accent shrink-0 font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-text-secondary leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Basic Footer for details page */}
      <footer className="bg-bg-dark border-t border-border-card/30 py-8 text-center text-xs text-text-secondary">
        <p>&copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
