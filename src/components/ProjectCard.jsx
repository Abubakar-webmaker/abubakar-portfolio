function ProjectCard({ project }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article className="flex h-full min-h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-xl shadow-slate-950/25">
      <div className="h-40 w-full shrink-0 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-orange-950/70">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center">
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
              {isComingSoon ? "Coming Soon" : "Project Preview"}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-4">
        <div className="space-y-2">
          <span className="inline-flex w-fit rounded-full border border-orange-400/20 bg-orange-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-200">
            {isComingSoon ? "Coming Soon" : "Live Project"}
          </span>
          <h3 className="min-h-[32px] text-xl font-bold leading-7 text-white">{project.title}</h3>
          <p className="min-h-[72px] text-sm leading-6 text-slate-300">{project.desc}</p>
        </div>

        <div className="flex min-h-[44px] flex-wrap content-start gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex min-h-[40px] flex-col gap-2.5 sm:flex-row">
          {isComingSoon ? (
            <span className="inline-flex flex-1 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-semibold text-slate-400">
              Coming Soon
            </span>
          ) : (
            <>
              <a
                className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
