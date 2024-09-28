import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { FaBoltLightning, FaComputer, FaPerson } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">\
      <div className="snap-y snap-mandatory overflow-x-hidden z-0">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={[
            {name: "Home", link: '#Hero', icon: <FaHome/>},
            {name: "About", link: '#About', icon: <FaPerson/>},
            {name: "Skills", link: '#Skills', icon: <FaBoltLightning/>},
            {name: "Projects", link: '#Projects', icon: <FaComputer/>}
          ]}/>
          <Hero />

          <section id="About" className="snap-center snap-y snap-mandatory">
            <About/>
          </section>

          <section id="Skills" className="snap-center snap-y snap-mandatory">
            <Skills/>
          </section>
          
          <section id="Projects" className="snap-center snap-y snap-mandatory">
            <Projects />
          </section>
        </div>
      </div>
    </main>
  )
}
