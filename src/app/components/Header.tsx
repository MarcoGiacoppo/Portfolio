'use client';

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

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
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="cursor-pointer text-2xl">Marco Giacoppo</h1>

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
            <ul className="absolute right-2 mt-2 py-2 bg-black rounded-lg shadow-lg w-24">
              <li className={`block px-4 py-2 text-sm cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'home' ? activeClassName : ''}`}>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection('home');
                  }}
                >
                  Home
                </ScrollLink>
              </li>
              <li className={`block px-4 py-2 text-sm cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'projects' ? activeClassName : ''}`}>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-0}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection('projects');
                  }}
                >
                  Projects
                </ScrollLink>
              </li>
              <li className={`block px-4 py-2 text-sm cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'about' ? activeClassName : ''}`}>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection('about');
                  }}
                >
                  About
                </ScrollLink>
              </li>
              <li className={`block px-4 py-2 text-sm cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'client' ? activeClassName : ''}`}>
                <ScrollLink
                  to="client"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection('client');
                  }}
                >
                  Client
                </ScrollLink>
              </li>
              <li className={`block px-4 py-2 text-sm cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'contact' ? activeClassName : ''}`}>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection('contact');
                  }}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          )}
        </div>

        {/* Full menu for larger screens */}
        <ul className="hidden md:flex space-x-8">
          <li className={`cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'home' ? activeClassName : ''}`}>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setActiveSection('home')}
            >
              Home
            </ScrollLink>
          </li>
          <li className={`cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'projects' ? activeClassName : ''}`}>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-0}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </ScrollLink>
          </li>
          <li className={`cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'about' ? activeClassName : ''}`}>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setActiveSection('about')}
            >
              About
            </ScrollLink>
          </li>
          <li className={`cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'client' ? activeClassName : ''}`}>
            <ScrollLink
              to="client"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setActiveSection('client')}
            >
              Client
            </ScrollLink>
          </li>
          <li className={`cursor-pointer transition-colors duration-100 hover:bg-custom-gradient hover:bg-clip-text hover:text-transparent ${activeSection === 'contact' ? activeClassName : ''}`}>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
