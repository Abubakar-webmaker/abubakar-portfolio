function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/30 overflow-hidden">
      {project.image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
            onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
          />
        </div>
      )}

      <div className="flex flex-col gap-5 p-6 pt-0" style={{ paddingTop: project.image ? "0" : "1.5rem" }}>
        <div className="space-y-3">
          <span className="inline-flex w-fit rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">
            Featured Project
          </span>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-sm leading-7 text-slate-300">{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full bg-slate-800 px-3 py-2 text-sm font-medium text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <a
            className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
