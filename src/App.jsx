import About from "./components/About";
import Contact from "./components/contact";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { motion, useScroll } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <div className="relative w-full min-h-screen ">
        <div className="absolute top-0 z-[-2] min-h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
