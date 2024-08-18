"use client";
import React from "react";

import { cn } from "../lib/utils";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import { motion } from "framer-motion";
import Image from "next/image";

import { FaAndroid, FaCode, FaConnectdevelop, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaJs, FaLaptopCode, FaRocketchat } from "react-icons/fa";
import { SiFirebase, SiKotlin, SiMysql, SiPostman, SiVisualstudiocode } from "react-icons/si";
import { IoMdColorFill } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="p-8 bg-black">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("bg-black border border-[#333333]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  const codeLines = [
    { text: "const fetchData = async () => {", variant: variants },
    { text: "    const response = await fetch('/api/data');", variant: variantsSecond },
    { text: "    setData(data);", variant: variants },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          variants={line.variant}
          className="flex flex-row rounded-full border border-[#333333] p-2 items-center space-x-2 bg-black"
        >
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
          <code className="text-green-400 font-mono text-xs ml-2 hover:cursor-default">
            {line.text}
          </code>
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const expertiseItems = [
    { name: "HTML5", title: "Markup Language", icon: FaHtml5 },
    { name: "CSS3", title: "Style Sheet Language", icon: FaCss3Alt },
    
    { name: "JavaScript", title: "Programming Language", icon: FaJs },
    { name: "Kotlin", title: "Programming Language", icon: SiKotlin },

    { name: "Figma", title: "Design Tool", icon: FaFigma },
    { name: "VS Code", title: "IDE", icon: SiVisualstudiocode },
    { name: "Postman", title: "Tools & Utilities", icon: SiPostman },

    { name: "Android", title: "Mobile Dev", icon: FaAndroid },

    { name: "MySQL", title: "Database", icon: SiMysql },
    { name: "Firebase", title: "Database", icon: SiFirebase },
    { name: "Github", title: "DevOps", icon: FaGithub },
  ];
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2">
      <InfiniteMovingCards items={expertiseItems} />
    </div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };

  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl border border-[#333333] bg-black p-4 flex flex-col items-center justify-center"
      >
        <Image
          src="https://avatarfiles.alphacoders.com/374/thumb-1920-374828.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="xs:text-[9px] sm:text-sm md:text-xs text-xs text-center font-semibold text-neutral-500 mt-4">
          My expertise spans both the design and development of websites.
        </p>
        <p className="border border-red-500 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4 z-20">
          Development
        </p>
      </motion.div>

      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl border border-[#333333] bg-black p-4 flex flex-col items-center justify-center">
        <Image
          src="https://avatarfiles.alphacoders.com/374/thumb-1920-374828.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="xs:text-[9px] sm:text-sm md:text-xs text-xs text-center font-semibold text-neutral-500 mt-4">
          I focus on creating well thought-out designs with attention to detail & user experience.
        </p>
        <p className="border border-green-500 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Quality
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl border border-[#333333] bg-black p-4 flex flex-col items-center justify-center"
      >
        <Image
          src="https://avatarfiles.alphacoders.com/374/thumb-1920-374828.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="xs:text-[9px] sm:text-sm md:text-xs text-xs text-center font-semibold text-neutral-500 mt-4">
          Whether it's creating a new website or collaborating with creative agencies, I'm ready to deliver.
        </p>
        <p className="border border-orange-500 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Collaboration
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-[#333333] p-2 items-start space-x-2 bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          I'm exploring various frameworks like React, Angular, and Vue to decide what's best for this proejct. What do you suggest?
        </p>
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-[#333333] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-neutral-500">Use React.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Full-Stack Developer",
    description: (
      <span className="text-sm">
        Building seamless digital experiences with modern web technologies.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <FaLaptopCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Expertise",
    description: (
      <span className="text-sm">
        Explore the key tools and technologies I work with.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <FaCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Color Theory & Gradients",
    description: (
      <span className="text-sm">
        Expertise in choosing color schemes and creating smooth gradients for visually appealing designs.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IoMdColorFill className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Design & Development Expertise",
    description: (
      <span className="text-sm">
        Combining design and development to create high-quality, user-friendly websites. Collaboration with creative agencies to deliver exceptional results.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <FaConnectdevelop className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-driven Efficiency",
    description: (
      <span className="text-sm">
        I utilize AI, like ChatGPT, to streamline my development process, enhancing both speed and quality.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <FaRocketchat className="h-4 w-4 text-neutral-500" />,
  },
];
