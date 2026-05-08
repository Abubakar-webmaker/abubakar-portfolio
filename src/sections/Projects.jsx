import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import AnimatedSection from "../components/AnimatedSection";

function Projects() {
  return (
    <section id="projects" className="py-10">
      <AnimatedSection className="mb-6 max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Projects</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Selected work that shows quality over quantity
        </h2>
      </AnimatedSection>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <AnimatedSection key={project.title} className="h-full">
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Projects;
