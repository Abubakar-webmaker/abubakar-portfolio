import AnimatedSection from "../components/AnimatedSection";

function About() {
  return (
    <section id="about" className="py-10">
      <AnimatedSection className="mb-6 max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">About</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Short, professional, and clear
        </h2>
      </AnimatedSection>

      <AnimatedSection className="max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30">
        <p className="text-base leading-8 text-slate-300">
          I am Abu Bakr from Pakistan, focused on building modern web apps with the MERN stack.
          I enjoy turning ideas into fast, clean interfaces and practical backend systems that feel
          reliable in real use.
        </p>
        <p className="mt-4 text-base leading-8 text-slate-300">
          I have been actively building with MERN for the past 1.5 years
        </p>
        <p className="mt-4 text-base leading-8 text-slate-300">
          I am available for freelance work and open to collaborative projects where quality,
          responsiveness, and good communication matter.
        </p>
      </AnimatedSection>
    </section>
  );
}

export default About;
