import React from "react";

import { BackgroundBeams } from "./components/ui/background-beams"; 
import dynamic from "next/dynamic";

const Header = dynamic(() => import('./components/Header'), { ssr: false });
import Home from "./components/Home"; 
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"
import { SignupFormDemo} from "./components/Contact"


export default function HomePage() {
  return (
    <div>
      <Header />
      <BackgroundBeams />
      <Home />
      <Projects />
      <About />
      <Timeline />
      <SignupFormDemo />
      <Contact />
    </div>
  );
}
