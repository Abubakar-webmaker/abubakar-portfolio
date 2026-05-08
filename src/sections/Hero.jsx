import AnimatedSection from "../components/AnimatedSection";

function Hero() {
  return (
    <section id="home" className="py-10 lg:min-h-[calc(100vh-6rem)] lg:flex lg:items-center lg:py-14">
      <AnimatedSection>
        <div className="space-y-7">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
              Available for freelance & open-source collaboration
            </p>
            <div className="space-y-3">
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Abu Bakr
              </h1>
              <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                Full Stack Web Developer
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I build clean, responsive, and conversion-focused web experiences using the MERN stack.
              The goal is simple: make products look sharp and work smoothly.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              href="#contact"
            >
              Hire Me
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/60 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5"
              href="#projects"
            >
              View My Work
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-orange-500/40 bg-slate-950/60 px-6 py-3.5 text-sm font-semibold text-orange-400 transition hover:-translate-y-0.5"
              href="/cv/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
              <strong className="block text-lg font-bold text-white">1.5+</strong>
              <span className="mt-1 block text-sm text-slate-400">Years Building</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
              <strong className="block text-lg font-bold text-white">MERN</strong>
              <span className="mt-1 block text-sm text-slate-400">Core Stack</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
              <strong className="block text-lg font-bold text-white">100%</strong>
              <span className="mt-1 block text-sm text-slate-400">Responsive Focus</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
}

export default Hero;
