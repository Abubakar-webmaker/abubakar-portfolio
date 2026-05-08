import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../components/AnimatedSection";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_wufaxlm",
        "template_tvbslyc",
        formRef.current,
        "iDvNtOOM-W2L7qaXr"
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  }

  return (
    <section id="contact" className="py-10">
      <AnimatedSection className="mb-6 max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Contact</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let&apos;s build something solid together
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30"
        >
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Name
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-orange-400/70"
              type="text"
              name="from_name"
              placeholder="Your name"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Email
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-orange-400/70"
              type="email"
              name="from_email"
              placeholder="Your email"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Message
            <textarea
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-orange-400/70"
              name="message"
              rows="5"
              placeholder="Tell me about your project"
              required
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm font-medium text-green-400">
              ✓ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm font-medium text-red-400">
              ✕ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </AnimatedSection>
    </section>
  );
}

export default Contact;
