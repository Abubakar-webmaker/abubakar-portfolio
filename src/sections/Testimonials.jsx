import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="py-10">
      <div className="mb-6 max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Testimonials
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Extra credibility when someone has worked with you
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote
            key={item.name}
            className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30"
          >
            <p className="text-base leading-8 text-slate-300">"{item.quote}"</p>
            <footer className="mt-4 text-sm font-semibold text-orange-200">{item.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
