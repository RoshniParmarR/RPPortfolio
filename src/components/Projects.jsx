import React from 'react';
import ScrollReveal from './ScrollReveal';
import ecommerceImg from '../assets/Screenshot 2026-07-17 161829.png';
import harmonyImg from '../assets/mindcare_clinic.png';
import sumukhImg from '../assets/axion_manufacturing_mockup.png';
import pratickImg from '../assets/rk_construction_mockup.png';
import zeckImg from '../assets/zeko_website_mockup.png';
import sterlingImg from '../assets/sterling_website_mockup.png';
import aibamsImg from '../assets/landing_page.png';

const Projects = () => {
  const projects = [
    // {
    //   id: 1,
    //   title: 'Blog System with Admin Panel',
    //   category: 'Full Stack',
    //   image: dashboardImg,
    //   tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT'],
    //   summary: 'A full-featured blog platform with user authentication, admin panel, and complete CRUD operations.',
    //   description: 'A robust and scalable blog application featuring user authentication, role-based admin controls, and complete CRUD functionality. Built with a React frontend and a FastAPI backend connected to PostgreSQL database, securing endpoints with JWT tokens.',
    //   features: [
    //     'Full-featured blog platform with markdown support',
    //     'JWT-based user authentication and admin dashboard controls',
    //     'Designed RESTful API endpoints with FastAPI',
    //     'Connected to a relational PostgreSQL database structure'
    //   ],
    //   github: 'https://github.com/RoshniParmarR',
    //   live: 'https://github.com/RoshniParmarR',
    // },
    // {
    //   id: 2,
    //   title: 'Telusko Track',
    //   category: 'Frontend',
    //   image: chatImg,
    //   tags: ['React', 'TypeScript', 'Framer Motion', 'FastAPI', 'PostgreSQL'],
    //   summary: 'A tracking and progress application featuring premium Framer Motion animations.',
    //   description: 'Telusko Track is a progress tracking dashboard designed with a strong focus on UI/UX. It incorporates fluid Framer Motion animations to guide user navigation and interactivity, backed by a FastAPI and PostgreSQL integration for progress logging.',
    //   features: [
    //     'Visual tracking dashboards with progress analytics',
    //     'Applied Framer Motion animations for enhanced interactivity',
    //     'Full-stack state integration with persistent progress logging',
    //     'Responsive grid view optimized for mobile and desktop screens'
    //   ],
    //   github: 'https://github.com/RoshniParmarR',
    //   live: 'https://github.com/RoshniParmarR',
    // },
    {
      id: 4,
      title: 'MindCare Clinic',
      category: 'Corporate',
      image: harmonyImg,
      tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      summary: 'A premium residential real estate portal showcasing luxury apartments, floor plans, and amenities with interactive galleries.',
      description: 'Manohar Harmony is a state-of-the-art real estate website designed to highlight a premium apartment building project. It features an interactive unit finder, dynamic floor plan viewers, and detailed neighborhood maps to guide buyers.',
      features: [
        'Interactive floor plans and unit availability guides',
        'Sleek design with custom slider components',
        'Lead collection system with validation',
        'Fully responsive layout optimized for all device sizes'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://github.com/RoshniParmarR',
    },
    {
      id: 5,
      title: 'Axion Manufacturing Website',
      category: 'Corporate',
      image: sumukhImg,
      tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'ScrollReveal'],
      summary: 'Corporate showcase for a leading civil engineering contracting firm, highlighting major infrastructure projects and fleet capabilities.',
      description: 'A robust corporate website for Sumukh Construction, a civil engineering and contracting firm. It highlights infrastructure projects, earthmoving equipment fleets, safety records, and core team capabilities.',
      features: [
        'Comprehensive infrastructure project galleries',
        'Safety compliance trackers and certification logs',
        'Detailed equipment fleet catalogs',
        'Online quotation and contact forms'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://github.com/RoshniParmarR',
    },
    {
      id: 6,
      title: 'RK Construction Website',
      category: 'Construction',
      image: pratickImg,
      tags: ['React', 'CSS Modules', 'Lucide Icons', 'Vite'],
      summary: 'Portfolio and services platform for an architectural design and luxury home construction firm.',
      description: 'Pratick Construction is a clean, minimalist portfolio website for a luxury home building and design firm. It uses high-contrast layouts to highlight blueprints, interior designs, and construction management milestones.',
      features: [
        'High-definition architectural project portfolios',
        'Step-by-step building process timeline guide',
        'Interactive blueprint and layout previewer',
        'Testimonials and client satisfaction surveys'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://github.com/RoshniParmarR',
    },
    {
      id: 7,
      title: 'Zeko',
      category: 'Corporate',
      image: zeckImg,
      tags: ['React', 'TypeScript', 'FastAPI', 'Tailwind CSS'],
      summary: 'Corporate website for a business consulting agency featuring interactive client service calculators and booking forms.',
      description: 'The official company website for Zeck Private Limited, a corporate strategy and business consulting agency. It provides full service descriptions, client testimonials, and a custom consulting cost estimator dashboard.',
      features: [
        'Dynamic consulting fee and service cost calculators',
        'Calendar booking integration for client calls',
        'Comprehensive service dossier download links',
        'Interactive team bios and capability charts'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://github.com/RoshniParmarR',
    },
    {
      id: 8,
      title: 'Chemical company',
      category: 'Corporate',
      image: sterlingImg,
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Vite'],
      summary: 'Industrial corporate website for a chemical manufacturer featuring safety documentation and chemical supply catalogs.',
      description: 'Sterling Chemical is a specialized industrial web portal for a manufacturer of bulk industrial chemicals. It features clean product catalogs, online Material Safety Data Sheet (MSDS) downloads, and bulk order supply forms.',
      features: [
        'Fully searchable chemical catalog with filtration',
        'One-click Material Safety Data Sheet (MSDS) downloads',
        'Bulk shipping and supply estimate calculators',
        'Compliance and environmental policy displays'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://github.com/RoshniParmarR',
    },
    {
      id: 9,
      title: 'Landing Page',
      category: 'Landing Page',
      image: aibamsImg,
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      summary: 'A premium product landing page for the Aibams application, featuring interactive dashboard previews and charts.',
      description: 'Aibams Landing Page is a modern SaaS and application landing page designed to optimize user conversions. It showcases product dashboard mockups, key analytics charts, and simple pricing matrices.',
      features: [
        'Interactive app dashboard mockup with pricing charts',
        'Smooth animation flows and feature highlights',
        'Optimized email signup and discount code popups',
        'Fully responsive section layouts and dark mode support'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://github.com/RoshniParmarR',
    },
    // {
    //   id: 4,
    //   title: 'To-Do List App',
    //   category: 'Full Stack',
    //   image: ecommerceImg,
    //   tags: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    //   summary: 'An interactive task management app with full frontend-backend connectivity and responsive UI.',
    //   description: 'A seamless task management app that provides full frontend-backend integration. It supports creating, updating, and deleting tasks in real-time, utilizing Tailwind CSS for a premium glassmorphic UI and storing data persistently in PostgreSQL.',
    //   features: [
    //     'Interactive task creation, edit, and deletion',
    //     'Persisted database storage with FastAPI and PostgreSQL',
    //     'Responsive glassmorphism UI styled with Tailwind CSS',
    //     'Real-time status updates and priority categorization'
    //   ],
    //   github: 'https://github.com/RoshniParmarR',
    //   live: 'https://github.com/RoshniParmarR',
    // },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-black text-neutral-800 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[32px] font-medium tracking-tight capitalize">
              Featured Projects
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-[16px] leading-relaxed">
              A curated showcase of professional web applications and client websites built with modern technologies.
            </p>
          </div>
        </ScrollReveal>

        {/* Responsive Grid Layout */}
        <ScrollReveal direction="up" delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col h-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-900 overflow-hidden shadow-sm relative"
              >
                {/* Project Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-neutral-200/60 dark:border-neutral-900 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10">

                  {/* Title & Summary */}
                  <div className="space-y-2.5 flex-grow">
                    <h3 className="text-[20px] font-medium text-neutral-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Projects;
