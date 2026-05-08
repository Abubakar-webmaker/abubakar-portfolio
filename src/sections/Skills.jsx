import skills from "../data/skills";
import AnimatedSection from "../components/AnimatedSection";

function Skills() {
  return (
    <section id="skills" className="py-10">
      <AnimatedSection className="mb-6 max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Skills</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Technologies I use to build reliable products
        </h2>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <AnimatedSection
            key={category}
            className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30"
          >
            <h3 className="mb-5 text-xl font-semibold capitalize text-white">{category}</h3>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-4 text-sm font-medium text-slate-200">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-orange-500 to-rose-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Skills;
