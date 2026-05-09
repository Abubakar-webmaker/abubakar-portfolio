function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10 py-8 text-sm text-slate-400">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-black text-white">
            Abu<span className="text-orange-400">Bakr</span>
            <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">dev</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">Full Stack Web Developer</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href="mailto:m.abubakar.codes@gmail.com" className="transition hover:text-white">
            m.abubakar.codes@gmail.com
          </a>
          <span className="text-slate-600">·</span>
          <a href="https://wa.me/923188790002" target="_blank" rel="noreferrer" className="transition hover:text-white">
            WhatsApp: +92 318 8790002
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Abubakar-webmaker" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/muhammed-abubakar-4479563a6/" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <p className="mt-6 border-t border-white/5 pt-4 text-center text-xs text-slate-600">
        &copy; 2026 Abu Bakr. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
