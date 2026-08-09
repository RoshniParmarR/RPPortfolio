import React from 'react';
import { ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ecommerceImg from '../assets/Screenshot 2026-07-17 161829.png';
import harmonyImg from '../assets/mindcare_clinic.png';
import sumukhImg from '../assets/snmukh_portfolio_showcase.png';
import pratickImg from '../assets/prakash_construction_mockup.png';
import zeckImg from '../assets/zeko_website_mockup.png';
import sterlingImg from '../assets/sterling_website_mockup.png';
import aibamsImg from '../assets/landing_page.png';
import roseBoutiqueImg from '../assets/rose_boutique_mockup.png';
import godaddyImg from '../assets/godaddy_website_mockup.png';

const Projects = () => {
  const projects = [
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
      live: 'https://roshniparmarr.github.io/mindcare/',
    },
    {
      id: 5,
      title: 'Snmukh engineer Website',
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
      live: 'https://roshniparmarr.github.io/Snmukh-enigneer/',
    },
    {
      id: 6,
      title: 'Prakash Construction Website',
      category: 'Construction',
      image: pratickImg,
      tags: ['React', 'CSS Modules', 'Lucide Icons', 'Vite'],
      summary: 'Portfolio and services platform for an architectural design and luxury home construction firm.',
      description: 'Prakash Construction is a clean, minimalist portfolio website for a luxury home building and design firm. It uses high-contrast layouts to highlight blueprints, interior designs, and construction management milestones.',
      features: [
        'High-definition architectural project portfolios',
        'Step-by-step building process timeline guide',
        'Interactive blueprint and layout previewer',
        'Testimonials and client satisfaction surveys'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://roshniparmarr.github.io/Prakash-Construction/',
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
      live: 'https://roshniparmarr.github.io/ZEKO-PRIVATE-LTD/',
    },
    {
      id: 8,
      title: 'Sterlin Chemicals',
      category: 'Corporate',
      image: sterlingImg,
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Vite'],
      summary: 'Industrial corporate website for a chemical manufacturer featuring safety documentation and chemical supply catalogs.',
      description: 'Sterlin Chemicals is a specialized industrial web portal for a manufacturer of bulk industrial chemicals. It features clean product catalogs, online Material Safety Data Sheet (MSDS) downloads, and bulk order supply forms.',
      features: [
        'Fully searchable chemical catalog with filtration',
        'One-click Material Safety Data Sheet (MSDS) downloads',
        'Bulk shipping and supply estimate calculators',
        'Compliance and environmental policy displays'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://roshniparmarr.github.io/Sterlin-chemicals/',
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
      live: 'https://roshniparmarr.github.io/Landing-page/',
    },
    {
      id: 10,
      title: 'GoDaddy Portal Replica',
      category: 'Web App',
      image: godaddyImg,
      tags: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      summary: 'A full-featured replica of the GoDaddy domain registration & hosting management dashboard platform.',
      description: 'A comprehensive GoDaddy portal clone featuring domain search, domain portfolio management, hosting plans, cart workflows, profile management, and responsive side navigation.',
      features: [
        'Official GoDaddy GO Heart logo & branding',
        'Domain search & extension filters',
        'Cart & promo code discount system',
        'Responsive sidebar navigation & dashboard views'
      ],
      github: 'https://github.com/RoshniParmarR/Godaddy',
      live: 'https://roshniparmarr.github.io/Godaddy/',
    },
    {
      id: 11,
      title: 'Rose Boutique',
      category: 'Fashion Boutique',
      image: roseBoutiqueImg,
      tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      summary: 'An elegant fashion boutique e-commerce platform featuring curated apparel collections and a seamless shopping experience.',
      description: 'Rose Boutique is a modern fashion boutique e-commerce web application designed for luxury apparel, trending fashion collections, and accessories. It features dynamic product filtering, interactive lookbooks, and a responsive checkout workflow.',
      features: [
        'Interactive fashion lookbook and product showcase',
        'Category-based filter and search capabilities',
        'Responsive shopping cart and checkout UI',
        'Modern minimalist design with smooth animations'
      ],
      github: 'https://github.com/RoshniParmarR',
      live: 'https://roshniparmarr.github.io/ROSEBOUTIQUE/',
    },
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
              A curated showcase of professional web applications and client websites built with modern technologies. Click any project to view the live website.
            </p>
          </div>
        </ScrollReveal>

        {/* Responsive Grid Layout */}
        <ScrollReveal direction="up" delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-900 overflow-hidden shadow-sm relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700 cursor-pointer block text-inherit no-underline"
              >
                {/* Project Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-neutral-200/60 dark:border-neutral-900 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10 justify-between">

                  {/* Title & Summary */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[20px] font-medium text-neutral-900 dark:text-white leading-tight group-hover:text-black dark:group-hover:text-neutral-100 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>


                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Projects;

