'use client';

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'client', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeClassName = "bg-custom-gradient bg-clip-text text-transparent";

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black text-white z-50 p-5 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="cursor-pointer text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          Marco Giacoppo
        </motion.h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <motion.ul
              className="absolute right-2 mt-2 py-2 bg-black rounded-lg shadow-lg w-24"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {['home', 'projects', 'about', 'client', 'contact'].map((section) => (
                <li
                  key={section}
                  className={`block px-4 py-2 text-sm cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === section ? activeClassName : ''}`}
                >
                  <ScrollLink
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(section);
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Full menu for larger screens */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'projects', 'about', 'client', 'contact'].map((section) => (
            <li
              key={section}
              className={`cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === section ? activeClassName : ''}`}
            >
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Header;
