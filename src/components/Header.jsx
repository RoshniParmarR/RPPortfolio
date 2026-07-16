import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home');
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      if (window.scrollY >= heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
        ? 'fixed top-0 bg-white dark:bg-black md:glass-effect '
        : 'absolute top-0 bg-transparent  border-transparent shadow-none'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-16 md:h-20'}`}>
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2.5 text-black dark:text-white font-medium text-[12px] group"
          >
            <img
              src={logoImg}
              alt="RP Logo"
              className={`h-auto object-contain dark:invert-0 invert transition-all duration-300 group-hover:scale-105 ${scrolled ? 'w-16' : 'w-16 md:w-20'
                }`}
            />

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-neutral-600 text-[14px] dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white dark:bg-black transform transition-transform duration-300 ease-in-out  ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col space-y-4 py-6 px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-link text-[14px] font-medium text-gray-800 dark:text-neutral-200 hover:text-black dark:hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
