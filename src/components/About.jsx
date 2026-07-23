import React from 'react';
import { Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import resumePdf from '../assets/Roshni Resume full stack.pdf';

const About = () => {
  const stats = [
    { value: '7 Months', label: 'Internship Exp.' },
    { value: '6', label: 'Core Projects' },
    { value: '2', label: 'Internships Done' },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-black text-neutral-800 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-medium tracking-tight capitalize">
              About Me
            </h2>

            <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-[16px]">
              My story, core qualifications, and key statistics at a glance.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Layout Wrapper */}
        <div className="space-y-12 max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Column 1: Bio Narrative (Spans 7 columns on desktop) */}
            <ScrollReveal direction="left" delay={100} className="lg:col-span-7 flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-[20px] font-medium text-neutral-900 dark:text-white capitalize">
                  Bridging Design & Functionality
                </h3>
                <p className="text-neutral-600 text-[16px] dark:text-neutral-400 leading-relaxed">
                  I am a motivated Full Stack Developer with a B.E. in Information Technology (CGPA 8.20) and 7 months of hands-on internship experience. Proficient in building end-to-end web applications using React, TypeScript, FastAPI, and PostgreSQL. Quick learner with a strong passion for UI/UX design and scalable web development.
                </p>
                <p className="text-neutral-600 text-[16px] dark:text-neutral-400 leading-relaxed">
                  I have built complete blog systems with admin panels and JWT authentication, responsive task management applications, and project tracking dashboards. I enjoy bridging the gap between back-end robustness and frontend user experience, writing clean and maintainable code.
                </p>
              </div>
            </ScrollReveal>

            {/* Column 2: Career Stats (Spans 5 columns on desktop) */}
            <ScrollReveal direction="right" delay={150} className="lg:col-span-5 flex flex-col justify-center">
              <div className="space-y-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-neutral-200/60 dark:border-neutral-800 flex justify-between items-center transition-shadow"
                  >
                    <span className="text-[16px] text-neutral-500 dark:text-neutral-400 ">
                      {stat.label}
                    </span>
                    <span className="text-[18px] text-black dark:text-white leading-none">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

          <ScrollReveal direction="up" delay={200} className="flex justify-center pt-8">
            <a
              href={resumePdf}
              download="Roshni Resume full stack.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-[14px] font-medium text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 active:bg-gray-900 dark:active:bg-neutral-200 shadow-md shadow-gray-950/15 dark:shadow-white/5 transition-all hover:-translate-y-0.5 cursor-pointer text-center"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </ScrollReveal>
        </div>


      </div>
    </section>
  );
};

export default About;
