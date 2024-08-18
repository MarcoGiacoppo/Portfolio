'use client';

import React, { useRef } from 'react';

import { motion, useTransform, useScroll } from 'framer-motion';
import { FaVuejs, FaAndroid, FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { SiKotlin, SiJavascript, SiFirebase, SiTypescript } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

import { AnimatedTooltip } from './ui/animated-tooltip';
import { MovingBorder } from './ui/moving-border';

const Projects = () => {
  return (
    <>
      <HorizontalScrollCarousel />
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform the vertical scroll progress into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-90%"]);

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const newTitleOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[500vh] bg-black">
      {/* Overlay Title */}
      <motion.div
      style={{ opacity: titleOpacity }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="sticky top-0 left-0 w-full h-screen flex items-center justify-center z-10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white">My Projects</h1>
      </motion.div>
      
      {/* Horizontal Scrolling Content */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden z-10">
        <motion.div style={{ x }} className="flex gap-5">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>

      {/* New Title that appears after scrolling */}
      <motion.div
        style={{ opacity: newTitleOpacity }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.9, ease: "easeOut" }}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center z-10 md:z-0"
      >
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-white">More Projects Incoming..</h1>
      </motion.div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="relative h-[300px] md:h-[450px] w-[350px] md:w-[600px] overflow-hidden bg-transparent rounded-lg p-[2px]">
      <div className="absolute inset-0">
        <MovingBorder duration={12000} rx="20px" ry="20px" strokeWidth={2}>
          <div /> {/* Empty div as placeholder */}
        </MovingBorder>
      </div>
      
      <div className="relative bg-black rounded-lg w-full h-full flex flex-col justify-between p-4">
        {/* Image Container */}
        <div className="flex items-center justify-center h-full w-full">
          <img
              src={card.url}
              alt={card.title}
              className="object-contain md:h-3/4 w-3/4 transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(card.githubLink, "_blank")}
          />
        </div>

        {/* Project Info Container */}
        <div className="flex justify-between items-end">
          {/* Project Name */}
          <div className="text-white">
            <p className="text-sm md:text-xl">{card.title}</p>
          </div>

          {/* Tools Used */}
          <div className="flex space-x-2">
            {card.technologies.map((tech, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <tech.icon />
                <AnimatedTooltip
                  items={[
                    {
                      id: tech.id,
                      name: tech.name,
                      designation: "",
                      image: '',
                    },
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};




export default Projects;

type TechnologyType = {
  id: number;
  name: string;
  icon: React.ComponentType;
}

type CardType = {
  githubLink: string | undefined;
  url: string;
  title: string;
  id: number;
  technologies: TechnologyType[];
};

const cards: CardType[] = [
  {
    githubLink: 'https://github.com/MarcoGiacoppo/Trinacria-Restaurant-Website',
    url: "images/trinacria.png",
    title: "Trinacria",
    id: 1,
    technologies: [
      { id: 1, name: "Vue.js", icon: FaVuejs },
      { id: 2, name: "CSS3", icon: FaCss3 },
      { id: 3, name: "JavaScript", icon: SiJavascript },
      { id: 4, name: "HTML5", icon: FaHtml5 },
    ],
  },
  {
    githubLink: 'https://github.com/MarcoGiacoppo/MyCustomApp',
    url: "images/cinerate.png",
    title: "Cinerate",
    id: 2,
    technologies: [
      { id: 1, name: "Android", icon: FaAndroid },
      { id: 2, name: "Firebase", icon: SiFirebase },
      { id: 3, name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    githubLink: '',
    url: "images/port.png",
    title: "Website Portfolio",
    id: 3,
    technologies: [
      { id: 1, name: "Framer Motion", icon: TbBrandFramerMotion },
      { id: 2, name: "TypeScript", icon: SiTypescript },
      { id: 3, name: "React", icon: FaReact },
    ],
  },
];