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
    top: '50%',
    left: '50%',
  });

  useEffect(() => {
    const getImageStyle = () => {
      if (isLarge) {
        return {
          height: 550,
          width: 550,
          top: '72%',
          left: '20%',
        };
      } else if (isMedium) {
        return {
          height: 450,
          width: 450,
          top: '65%',
          left: '30%',
        };
      } else {
        return {
          height: 350,
          width: 350,
          top: '40%',
          left: '50%',
        };
      }
    };

    setImageStyle(getImageStyle());
  }, [isLarge, isMedium, isSmall]);

  return (
    <section id='home' className="flex flex-col justify-center items-center h-[calc(100vh-128px)] md:h-[calc(100vh-16px)] px-10 py-20 bg-black text-white relative">
      <div className="absolute inset-0">
        {!isSmall && <BackgroundBeams />}
      </div>
      <div className="relative z-10 w-full h-full flex justify-center items-center">
        {/* Background Ring */}
        <motion.img
          src="/images/circle.png"
          alt="Background Ring"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute object-cover"
          style={{
            height: `${imageStyle.height + 50}px`,
            width: `${imageStyle.width + 50}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* Hero Image */}
        <motion.img
          src="/images/hero.png"
          alt="Hero Image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative object-cover mb-16"
          style={{
            height: `${imageStyle.height}px`,
            width: `${imageStyle.width}px`,
            top: imageStyle.top,
            left: imageStyle.left,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute bottom-5 left-5 xs:left-10 text-2xl sm:text-2xl md:text-3xl"
      >
        <h2>Mobile App & Website Developer</h2>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="absolute bottom-5 right-5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 "
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <a href="https://www.instagram.com/marcogiacoppo_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl sm:text-2xl md:text-2xl transition-transform duration-300 transform hover:scale-150 hover:rotate-12" />
        </a>
        <a href="https://www.linkedin.com/in/marco-giacoppo-b69556217/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl sm:text-2xl md:text-2xl transition-transform duration-300 transform hover:scale-150 hover:rotate-12" />
        </a>
        <a href="https://github.com/MarcoGiacoppo" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl sm:text-2xl md:text-2xl transition-transform duration-300 transform hover:scale-150 hover:rotate-12" />
        </a>
        <a href="mailto:marcogiacoppo19@egmail.com">
          <FaEnvelope className="text-2xl sm:text-2xl md:text-2xl transition-transform duration-300 transform hover:scale-150 hover:rotate-12" />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
