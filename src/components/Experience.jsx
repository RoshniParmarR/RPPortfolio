import React from 'react';
import { Calendar, Building2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer (Internship)',
      company: 'SHDPixel',
      duration: 'Jan 2026 - Jun 2026',
      location: 'Vadodara, Gujarat (On-Site)',
      description: [
        'Developed and maintained full-stack web applications using React, TypeScript, Tailwind CSS, FastAPI, and PostgreSQL.',
        'Built the MindCare Clinic website, featuring interactive client intake, service scheduling, and responsive layouts.',
        'Developed the RK Construction Website (Main Construction), showcasing luxury architectural designs and custom project timelines.',
        'Created the Axion Manufacturing Website (Manufacturing Company) highlighting heavy industrial equipment catalogs and lead forms.',
        'Built a complete Blog System with admin panel, JWT authentication, and CRUD operations via REST API.',
        'Collaborated on UI/UX design for multiple client-facing projects including landing pages and admin dashboards.',
      ],
    },
    {
      role: 'Web Developer (Summer Internship)',
      company: 'SHDPixel',
      duration: 'Jun 2025 - Jul 2025',
      location: 'Vadodara, Gujarat (On-Site)',
      description: [
        'Completed a 1-month summer internship focused on frontend web development and UI component building.',
        'Gained practical experience with HTML, CSS, JavaScript, and React through real client projects.',
        'Assisted in designing and developing responsive web pages and layouts.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-neutral-50 dark:bg-black text-neutral-800 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-medium tracking-tight capitalize">
              Work{' '}  Experience
            </h2>

            <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-[16px]">
              A look into my professional journey and the organizations I have contributed to.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline container */}
        <div className="relative ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              direction="left"
              delay={index * 150}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Connector Line (confining line to span strictly between nodes) */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[-1px] top-[24px] bottom-[-56px] w-[2px] bg-neutral-900 dark:bg-neutral-100 z-0" />
              )}

              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-1.5 bg-white dark:bg-black border-2 border-black dark:border-white p-1.5 z-10 text-black dark:text-white transition-transform duration-300 group-hover:scale-125 select-none">
                <span className="h-4 w-4 flex items-center justify-center text-[11px] font-medium font-mono leading-none">
                  0{index + 1}
                </span>
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 shadow-md group-hover:shadow-xl group-hover:border-black dark:group-hover:border-neutral-800 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[20px] font-medium text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-neutral-500 dark:text-neutral-400 font-medium text-[14px]">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <span>{exp.company}</span>
                      <span className="text-neutral-300 dark:text-neutral-700">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 text-[14px] font-medium self-start md:self-center border border-gray-200 dark:border-neutral-800">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-neutral-600 dark:text-neutral-400 list-disc list-outside ml-4 leading-relaxed">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
