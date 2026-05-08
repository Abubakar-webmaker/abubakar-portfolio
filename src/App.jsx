import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.14),transparent_30%),radial-gradient(circle_at_right,rgba(168,85,247,0.12),transparent_25%)]" />
      <div className="relative z-10 mx-auto w-[min(1160px,calc(100%-1.25rem))] px-0 py-4 sm:w-[min(1160px,calc(100%-2rem))] sm:py-6">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
