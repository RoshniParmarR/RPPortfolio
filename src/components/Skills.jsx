import React from 'react';
import ScrollReveal from './ScrollReveal';

// Custom inline SVG icons matching each brand/technology
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-7 w-7 fill-none stroke-[#61DAFB]" strokeWidth="1.5">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <ellipse rx="11" ry="4.2" />
    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 100 100" className="h-7 w-7 select-none rounded-md">
    <rect width="100" height="100" rx="16" fill="#F7DF1E" />
    <text
      x="22"
      y="74"
      fill="#323330"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="52"
      fontWeight="700"
      letterSpacing="-2"
    >
      JS
    </text>
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 100 100" className="h-7 w-7 select-none rounded-md">
    <rect width="100" height="100" rx="16" fill="#3178C6" />
    <text
      x="14"
      y="74"
      fill="#ffffff"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="52"
      fontWeight="700"
      letterSpacing="-2"
    >
      TS
    </text>
  </svg>
);

const HTMLCSSIcon = () => (
  <div className="flex items-center gap-1 select-none">
    {/* HTML5 Logo */}
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#E34F26]">
      <path d="M3 2l1.62 18L12 22l7.38-2L21 2H3zm13.14 7.64H9.78l-.2-2.14h6.76l-.2 2.14H9.36l-.2-2.14H16.3l-.16 2.14zm-6.52 4.28h3.36l-.34 3.42-3.02.82-3.02-.82-.2-2.14h2.14l.1 1.07 1.18.32 1.18-.32.14-1.35H6.26l-.38-4.28H15.9l-.38 4.28H9.62z" />
    </svg>
    {/* CSS3 Logo */}
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#1572B6]">
      <path d="M3 2l1.62 18L12 22l7.38-2L21 2H3zm12.86 7.64H9.5l-.2-2.14h6.76l-.2 2.14H9.08l-.2-2.14H16.02l-.16 2.14zm-6.24 4.28h3.08l-.34 3.42-2.74.74-2.74-.74-.2-2.14h2.14l.1 1.07 1.04.28 1.04-.28.14-1.35H6.26l-.38-4.28H15.9l-.38 4.28H9.62z" />
    </svg>
  </div>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-[#38BDF8]">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const FramerMotionIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7">
    <path d="M4 4h16L12 12 4 4z" fill="#FF0055" />
    <path d="M4 12h8v8L4 12z" fill="#bc00dd" />
    <path d="M12 12h8l-8 8v-8z" fill="#00C2FF" />
  </svg>
);

const FastAPIIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#009688]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#009688" />
  </svg>
);

const RestAPIIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#6366F1]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" fill="#6366F1" fillOpacity="0.1" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" fill="#6366F1" fillOpacity="0.1" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
  </svg>
);

const JWTIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#D97706]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#D97706" fillOpacity="0.1" />
    <circle cx="12" cy="11" r="3" fill="#D97706" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-[#3776AB]">
    <path d="M11.93 2.012c-2.6 0-4.88.2-6.52.88-2 .83-2.6 2-2.6 4.38v2.09h4.86v.69H2.81c-2.38 0-3.5 1.15-3.5 3.5v3.1c0 2.38 1.12 3.5 3.5 3.5h2.1v-2.88c0-2 1.4-3.5 3.5-3.5h4.86c2.1 0 3.5-1.4 3.5-3.5v-4.9c0-2.38-1.12-3.5-3.5-3.5h-1.84zm-3.1 1.76a.92.92 0 1 1 0 1.84.92.92 0 0 1 0-1.84zm7.3 8.35v2.88c0 2-1.4 3.5-3.5 3.5H7.77c-2.1 0-3.5 1.4-3.5 3.5v4.9c0 2.38 1.12 3.5 3.5 3.5h4.86c2.6 0 4.88-.2 6.52-.88 2-.83 2.6-2 2.6-4.38v-2.09h-4.86v-.69h4.86c2.38 0 3.5-1.15 3.5-3.5v-3.1c0-2.38-1.12-3.5-3.5-3.5H16.1zM15 18.5a.92.92 0 1 1 0 1.84.92.92 0 0 1 0-1.84z" />
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#336791]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#336791" fillOpacity="0.1" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#00758F]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#F29111" fillOpacity="0.15" />
    <path d="M3 5v7c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12v7c0 1.66 4 3 9 3s9-1.34 9-3v-7" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#F05032]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" fill="#F05032" fillOpacity="0.1" />
    <circle cx="6" cy="6" r="3" fill="#F05032" fillOpacity="0.1" />
    <circle cx="6" cy="18" r="3" fill="#F05032" fillOpacity="0.1" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#2496ED]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12.5a2.5 2.5 0 0 1-2.5 2.5H2c0-1.5 1.5-3 3.5-3 .5 0 1 .1 1.5.3V8.5A2.5 2.5 0 0 1 9.5 6h5a2.5 2.5 0 0 1 2.5 2.5v3.8c1.5-.6 3.1-.2 4.1.8.6.6.9 1.4.9 2.4z" fill="#2496ED" fillOpacity="0.1" />
    <rect x="8" y="9" width="3" height="3" fill="#2496ED" />
    <rect x="12" y="9" width="3" height="3" fill="#2496ED" />
  </svg>
);

const PromptIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#A855F7]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" fill="#A855F7" fillOpacity="0.1" />
  </svg>
);

const Skills = () => {
  const skills = [
    { label: 'React', icon: <ReactIcon /> },
    { label: 'JavaScript', icon: <JSIcon /> },
    { label: 'TypeScript', icon: <TSIcon /> },
    { label: 'HTML & CSS', icon: <HTMLCSSIcon /> },
    { label: 'Tailwind CSS', icon: <TailwindIcon /> },
    { label: 'Framer Motion', icon: <FramerMotionIcon /> },
    { label: 'FastAPI', icon: <FastAPIIcon /> },
    { label: 'REST API', icon: <RestAPIIcon /> },
    { label: 'JWT Authentication', icon: <JWTIcon /> },
    { label: 'Python (Basic)', icon: <PythonIcon /> },
    { label: 'PostgreSQL', icon: <PostgresIcon /> },
    { label: 'MySQL', icon: <MySQLIcon /> },
    { label: 'Git', icon: <GitIcon /> },
    { label: 'GitHub', icon: <GitHubIcon /> },
    { label: 'Docker', icon: <DockerIcon /> },
    { label: 'Prompt Engineering', icon: <PromptIcon /> }
  ];

  return (
    <section
      id="skills"
      className="relative pt-24 pb-28 bg-neutral-50 dark:bg-black text-neutral-800 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient background glow (strictly neutral/grey to fit color rules) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[600px] rounded-full bg-neutral-200/10 dark:bg-neutral-900/10 blur-[100px] pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 font-sans relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20 select-none">
            <h2 className="text-[32px] font-medium tracking-tight capitalize">
              Tech Stack
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-[16px]">
              The core technologies, libraries, and developer tools I build with.
            </p>
          </div>
        </ScrollReveal>

        {/* Staggered Keyboard-Key Grid Layout */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="group w-28 h-28 flex flex-col items-center justify-center border border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-900/30 backdrop-blur-md hover:border-black dark:hover:border-neutral-200 hover:bg-white dark:hover:bg-neutral-900/80 active:scale-95 transition-all duration-300 select-none"
              >
                {/* SVG Icon */}
                <div className="text-neutral-800 dark:text-neutral-200 transition-transform duration-300 mb-2 group-hover:scale-110">
                  {skill.icon}
                </div>

                {/* Skill Label */}
                <span className="text-[12px] text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors text-center px-1">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Skills;
