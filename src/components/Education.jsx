import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const educations = [
    {
      degree: 'Bachelor of Engineering in Information Technology (B.E. IT)',
      institution: 'Sardar Vallabhbhai Patel Institute of Technology (SVIT), Vasad',
      duration: '2022 - 2026',
      grade: 'CGPA: 8.20 / 10.0',
      description: 'Focusing on Web Application Development, Full-Stack Development, Database Systems, and Software Engineering. Built multiple practical web applications including live chat and tracking systems.',
    },
    {
      degree: 'Higher Secondary School Certificate (HSC)',
      institution: 'State Board Secondary School',
      duration: '2020 - 2022',
      grade: 'Percentage: 60%',
      description: 'Completed Higher Secondary Certificate under Science stream, focusing on Physics, Chemistry, and Mathematics.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'State Board High School',
      duration: '2018 - 2020',
      grade: 'Percentage: 80%',
      description: 'Completed Secondary School Certificate under General stream, focusing on fundamental subjects, mathematics, and science.',
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-black text-neutral-800 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-medium tracking-tight capitalize ">
              My{' '}Education
            </h2>

            <p className="mt-4 text-neutral-500 text-[16px] dark:text-neutral-400 text-lg">
              Details of my academic background and educational milestones.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 150}
              className="flex"
            >
              <div
                className="relative p-6 md:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-900 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-gray-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-[14px] font-medium">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Degree Info */}
                  <div>
                    <h3 className="text-[20px] font-medium text-neutral-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-[16px] font-medium text-black dark:text-white mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 text-[14px] leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Grade Badge */}
                <div className="mt-6 pt-4 border-t border-neutral-200/50 dark:border-neutral-900 flex items-center gap-2 text-black dark:text-white">
                  <Award className="h-4.5 w-4.5" />
                  <span className="text-[14px] font-medium">{edu.grade}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
