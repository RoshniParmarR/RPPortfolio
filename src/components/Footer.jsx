import React from 'react';
import { ArrowUp, Mail, Sun, Moon } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import logoImg from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black text-neutral-500 dark:text-neutral-400 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          {/* Row 1: Logo (Centered) */}
          <div className="flex justify-center py-4 lg:py-16">
            <div className="flex items-center space-x-2">
              <img src={logoImg} alt="RP Logo" className="h-40 w-40 object-contain dark:invert-0 invert" />
              {/* <span className="text-base font-bold text-black dark:text-white">
                Roshni's Portfolio
              </span> */}
            </div>
          </div>

          {/* Row 2: Copyright, Scroll to Top, and Social Icons in Responsive Order */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="order-4 md:order-1 text-center md:text-left">
              <p className="text-[14px] text-neutral-400 dark:text-neutral-400">
                &copy; {currentYear} Developed by Roshni
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="order-3 md:order-2 h-10 w-10 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 shadow-sm dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>

            {/* Social Icons & Theme Toggle */}
            <div className="order-2 md:order-3 flex items-center gap-6 text-neutral-400 dark:text-neutral-400">
              <a
                href="https://github.com/RoshniParmarR"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/roshni-parmar-0919802b0/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:mailtoparmar23@gmail.com"
                className="hover:text-black dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <button
                onClick={toggleTheme}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-gray-200 animate-spin-slow" />
                ) : (
                  <Moon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
