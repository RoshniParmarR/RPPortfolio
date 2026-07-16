import React, { useState, useEffect } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import avatarImg from '../assets/developer_avatar.jpg';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const titles = ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setFadeState('fade-in');
      }, 500); // half second transition
    }, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-neutral-50 dark:bg-black text-neutral-800 dark:text-white transition-colors duration-300"
    >
      {/* Decorative gradient glow elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-gray-400/10 dark:bg-neutral-900/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-gray-300/10 dark:bg-neutral-950/5 blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-[32px] font-medium tracking-tight mb-3 capitalize">
                Hi, I'm Roshni
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <h2 className="text-[20px] font-medium  mb-3 flex items-center text-neutral-700 dark:text-neutral-400">
                <span>A&nbsp;</span>
                <span
                  className={`text-black dark:text-white transition-opacity duration-500 ${fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {titles[titleIndex]}
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p className="text-[16px] text-neutral-600 mb-10 dark:text-neutral-400 max-w-xl">
                I design and build beautiful, highly functional full-stack web applications with modern technologies. Focused on creating seamless user experiences and writing clean, maintainable code.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="flex items-center text-[14px] justify-center gap-2 w-full sm:w-auto px-[24px] py-[12px] font-medium text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 active:bg-gray-900 dark:active:bg-neutral-200 shadow-lg shadow-gray-900/10 dark:shadow-white/5 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="flex items-center text-[14px] justify-center w-full sm:w-auto px-[24px] py-[12px] font-medium border border-gray-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Contact Me
                </a>
              </div>
            </ScrollReveal>

            {/* Social Icons */}
            <ScrollReveal direction="up" delay={500}>
              <div className="flex items-center gap-5 pt-4 text-neutral-500 dark:text-neutral-400">
                <a
                  href="https://github.com/RoshniParmarR"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/roshni-parmar-0919802b0/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>

                <a
                  href="mailto:mailtoparmar23@gmail.com"
                  className="hover:text-black dark:hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Avatar Image */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ScrollReveal direction="scale" delay={300} duration={1000} className="w-full flex justify-center">
              <img
                src={avatarImg}
                alt="Roshni - Portfolio Image"
                className="w-72 h-72 max-w-[80vw] max-h-[80vw] md:w-96 md:h-96 object-cover object-center transition-all duration-500"
                style={{ borderRadius: '50%' }}
              />
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Floating scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-400 dark:text-neutral-500 animate-bounce">
        <a href="#about" aria-label="Scroll to About Me">
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
