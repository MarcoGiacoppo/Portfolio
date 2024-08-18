import React from "react";

import { BackgroundBeams } from "./components/ui/background-beams"; 
import dynamic from "next/dynamic";

const Header = dynamic(() => import('./components/Header'), { ssr: false });
import Home from "./components/Home"; 
import About from "./components/About";
import Projects from "./components/Projects";


export default function HomePage() {
  return (
    <div>
      <Header />
      <BackgroundBeams />
      <Home />
      <Projects />
      <About />
    </div>
  );
}
