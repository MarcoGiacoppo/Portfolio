'use client';

import React, { useEffect, useState } from 'react';
import { BackgroundBeams } from './ui/background-beams';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useMediaQuery } from '@react-hook/media-query';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  //For image sizing
  const isLarge = useMediaQuery('only screen and (min-width: 1024px)');
  const isMedium = useMediaQuery('only screen and (min-width: 768px) and (max-width: 1023px)');
  const isSmall = useMediaQuery('only screen and (max-width: 767px)');

  const [imageStyle, setImageStyle] = useState({
    height: 550,
    width: 550,
  });

  useEffect(() => {
    const getImageStyle = () => {
      if (isLarge) {
        return {
          height: 550,
          width: 550,
        };
      } else if (isMedium) {
        return {
          height: 450,
          width: 450,
        };
      } else {
        return {
          height: 350,
          width: 350,
        };
      }
    };

    setImageStyle(getImageStyle());
  }, [isLarge, isMedium, isSmall]);

  // Animation variants
  const imageVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.5 } },
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut', delay: 1 } },
  };

  return (
    <section id='home' className="relative flex flex-col justify-center items-center h-[calc(100vh-128px)] md:h-[calc(100vh-16px)] px-10 py-20 bg-black text-white">
      {/* Background Beams */}
      <div className="absolute inset-0">
        {!isSmall && <BackgroundBeams />}
      </div>

      <div className="relative flex justify-center items-center">
        {/* Container for both images */}
        <div className="relative">
          {/* Background Ring */}
          <motion.img
            src="/images/circle.png"
            alt="Background Ring"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            style={{
              height: `${imageStyle.height}px`,
              width: `${imageStyle.width}px`,
            }}
          />

          {/* Hero Image */}
          <motion.img
            src="/images/hero.png"
            alt="Hero Image"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 m-auto object-cover"
            style={{
              height: `${imageStyle.height * 0.9}px`,
              width: `${imageStyle.width * 0.9}px`,
              top: '40%',
            }}
          />
        </div>
      </div>
      
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-10 text-2xl md:text-3xl"
      >
        <h2>Mobile App & Website Developer</h2>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={iconVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 right-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <a href="https://www.instagram.com/marcogiacoppo_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl transition-transform duration-300 transform hover:scale-150 hover:rotate-12" />
        </a>
        <a href="https://www.linkedin.com/in/marco-giacoppo-b69556217/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl transition-transform duration-300 transform hover:scale-150 hover:rotate-12" />
        </a>
        <a href="https://github.com/MarcoGiacoppo" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl transition-transform duration-300 transform hover:scale-150 hover:rotate-12" />
        </a>
        <a href="mailto:marcogiacoppo19@egmail.com">
          <FaEnvelope className="text-2xl transition-transform duration-300 transform hover:scale-150 hover:rotate-12" />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
