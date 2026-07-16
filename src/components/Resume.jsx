import React from 'react';
import { ArrowLeft, Printer, Download, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import avatarImg from '../assets/myimg.jpeg';
import html2pdf from 'html2pdf.js';

const Resume = ({ isHidden = false }) => {
  const [avatarBase64, setAvatarBase64] = React.useState('');

  React.useEffect(() => {
    // Scroll window to top when Resume is rendered in focus
    if (!isHidden) {
      window.scrollTo(0, 0);
    }

    // Convert avatar image to Base64 to prevent CORS canvas taint issues in html2canvas using Canvas method
    const convertImageToBase64 = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/jpeg'));
          } catch (e) {
            console.error('Canvas conversion error:', e);
            resolve(url);
          }
        };
        img.onerror = () => {
          resolve(url);
        };
        img.src = url;
      });
    };

    if (avatarImg) {
      convertImageToBase64(avatarImg).then((base64) => {
        setAvatarBase64(base64);
      });
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    try {
      const element = document.querySelector('.print-container');
      const opt = {
        margin: 0,
        filename: 'Roshni_Parmar_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: true,
          windowWidth: 1024
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // Handle both ES module default wrapping and straight function calls
      const exporter = typeof html2pdf === 'function' ? html2pdf : (html2pdf && html2pdf.default);

      if (exporter) {
        // Await the asynchronous promise chain to catch any runtime errors
        await exporter().from(element).set(opt).save();
      } else {
        throw new Error('html2pdf library is not loaded correctly');
      }
    } catch (error) {
      console.error('PDF Download failed, falling back to print dialog:', error);
      window.print();
    }
  };

  const skills = [
    'React & React Native',
    'JavaScript & TypeScript',
    'HTML5 & CSS3',
    'Tailwind CSS & Framer Motion',
    'FastAPI & Python (Basic)',
    'PostgreSQL & MySQL',
    'REST APIs & JWT Auth',
    'Git, GitHub & Docker',
    'UI/UX Design & Prototyping'
  ];

  const experiences = [
    {
      role: 'Full Stack Developer (Intern)',
      company: 'SHDPixel, Vadodara',
      duration: 'Jan 2026 - Jun 2026',
      bullets: [
        'Developed full-stack web applications using React, TypeScript, FastAPI, and PostgreSQL.',
        'Built the MindCare Clinic, RK Construction, and Axion Manufacturing websites.',
        'Created a secure Blog System with JWT authentication and CRUD REST APIs.'
      ]
    },
    {
      role: 'Web Developer (Summer Intern)',
      company: 'SHDPixel, Vadodara',
      duration: 'Jun 2025 - Jul 2025',
      bullets: [
        'Focused on frontend development with HTML, CSS, JavaScript, and React.',
        'Developed clean, highly responsive layout modules for client websites.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Blog System with Admin Panel',
      tech: 'React, TypeScript, FastAPI, PostgreSQL, JWT',
      desc: 'Full-featured blog platform with user authentication, admin panel, and complete CRUD operations.'
    },
    {
      title: 'Telusko Track',
      tech: 'React, TypeScript, Framer Motion, FastAPI, PostgreSQL',
      desc: 'Progress tracking dashboard designed with dynamic Framer Motion animations.'
    },
    {
      title: 'To-Do List App',
      tech: 'React, TypeScript, Tailwind CSS, FastAPI, PostgreSQL',
      desc: 'Interactive task management app with real-time status updates and a responsive glassmorphic UI.'
    },
    {
      title: 'MindCare Clinic',
      tech: 'React, Tailwind CSS, Vite, Framer Motion',
      desc: 'Premium website showcasing interactive client intake and customized appointment scheduling.'
    },
    {
      title: 'Axion Manufacturing Website',
      tech: 'HTML5, Tailwind CSS, JavaScript, ScrollReveal',
      desc: 'Corporate showcase highlighting heavy industrial equipment catalogs and inline quotation forms.'
    },
    {
      title: 'RK Construction Website',
      tech: 'React, CSS Modules, Lucide Icons, Vite',
      desc: 'Architectural portfolio showcasing luxury design timelines and client reviews.'
    },
    {
      title: 'Zeko',
      tech: 'React, TypeScript, FastAPI, Tailwind CSS',
      desc: 'Business consulting portal featuring service cost calculators and booking integrations.'
    },
    {
      title: 'Chemical Company',
      tech: 'HTML5, CSS3, JavaScript, Vite',
      desc: 'Industrial corporate catalog featuring bulk shipping estimators and MSDS downloads.'
    },
    {
      title: 'Landing Page',
      tech: 'React, Tailwind CSS, Framer Motion, Vite',
      desc: 'Premium product landing page showcasing SaaS dashboard previews and charts.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in IT',
      institution: 'Svit vasad',
      grade: 'CGPA: 8.20 / 10.0',
      duration: '2022 - 2026'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'State Board Secondary School',
      grade: 'Percentage: 60%',
      duration: '2020 - 2022'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'State Board High School',
      grade: 'Percentage: 80%',
      duration: '2018 - 2020'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors duration-300 py-8 px-6 print:p-0 print:bg-white print:text-black">

      {/* Print-specific style overrides */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          body, html {
            background-color: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            height: 297mm !important;
            max-height: 297mm !important;
            overflow: hidden !important;
          }
          .print-grid {
            display: grid !important;
            grid-template-columns: 33% 67% !important;
            height: 297mm !important;
            max-height: 297mm !important;
            overflow: hidden !important;
          }
          section {
            page-break-inside: avoid !important;
          }
          .print-sidebar {
            background-color: #4b3b30 !important;
            color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-header-block {
            background-color: #d3c5b9 !important;
            color: #4b3b30 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-dot-brown {
            background-color: #4b3b30 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-dot-beige {
            background-color: #d3c5b9 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page {
            size: A4 portrait;
            margin: 0;
          }
        }
      `}} />

      {/* Action Controls - Hidden on Print */}
      {!isHidden && (
        <div className="no-print max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <a
            href="#home"
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-[#4b3b30] dark:hover:text-white text-[14px] font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 font-medium text-[13px] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              Print Resume
            </button>

            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4b3b30] hover:bg-[#3d3027] text-white font-medium text-[13px] transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>
      )}

      {/* Main Resume Canvas Container */}
      <div className="print-container max-w-4xl mx-auto bg-white shadow-md border border-neutral-200 print:border-none print:shadow-none print:min-h-[297mm] grid grid-cols-1 md:grid-cols-12">

        {/* Left Sidebar Panel (33% Width) */}
        <aside className="relative print-sidebar md:col-span-4 bg-[#4b3b30] text-white p-5 pb-12">
          <div className="space-y-5">

            {/* Avatar Section */}
            <div className="flex flex-col items-center pt-2">
              <div className="w-28 h-28 rounded-[50%] overflow-hidden">
                <img
                  src={avatarBase64 || avatarImg}
                  alt="Roshni Parmar"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 39%' }}
                />
              </div>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-[14px] font-semibold uppercase tracking-wider text-white border-b border-white/20 pb-0.5 flex items-center gap-1.5">
                Education
              </h2>
              <div className="space-y-2.5">
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5 text-xs">
                    <h3 className="font-semibold text-white">{edu.degree}</h3>
                    <p className="text-neutral-300 font-light">{edu.institution} | {edu.duration}</p>
                    {edu.grade && <p className="text-neutral-300 font-light text-[11px]">{edu.grade}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-[14px] font-semibold uppercase tracking-wider text-white border-b border-white/20 pb-0.5 flex items-center gap-1.5">
                Skills
              </h2>
              <ul className="list-disc list-inside text-[11px] space-y-1 font-light text-neutral-200">
                {skills.map((skill, idx) => (
                  <li key={idx} className="pl-0.5 leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Left Beige Decorative Dots */}
          <div className="absolute bottom-8 left-6 flex gap-1.5">
            <span className="print-dot-beige w-3 h-3 rounded-full bg-[#d3c5b9] opacity-90" />
            <span className="print-dot-beige w-3 h-3 rounded-full bg-[#d3c5b9] opacity-90" />
            <span className="print-dot-beige w-3 h-3 rounded-full bg-[#d3c5b9] opacity-90" />
            <span className="print-dot-beige w-3 h-3 rounded-full bg-[#d3c5b9] opacity-90" />
            <span className="print-dot-beige w-3 h-3 rounded-full bg-[#d3c5b9] opacity-90" />
          </div>

        </aside>

        {/* Right Main Panel (67% Width) */}
        <main className="relative md:col-span-8 bg-white text-neutral-800 p-5 pb-12">

          <div className="space-y-4.5">

            {/* Header Beige Block */}
            <div className="print-header-block bg-[#d3c5b9] text-[#4b3b30] p-4 -mx-5 -mt-5 flex flex-col justify-between relative">
              {/* Top Right Header Dots */}
              <div className="flex gap-1.5 justify-end mb-2">
                <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
                <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
                <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
                <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
                <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-wider uppercase text-[#4b3b30]">
                  Roshni Parmar
                </h1>
                <p className="text-xs font-semibold tracking-widest uppercase mt-0.5 text-[#4b3b30]/80">
                  Full Stack Developer
                </p>
                <div className="w-20 h-[1px] bg-[#4b3b30] mt-1" />
              </div>
            </div>

            {/* Profile Section */}
            <section className="space-y-1">
              <h2 className="text-[14px] font-bold uppercase tracking-wider text-[#4b3b30] border-b border-[#4b3b30]/20 pb-0.5">
                Profile
              </h2>
              <p className="text-[10px] leading-relaxed text-neutral-600 font-light">
                A motivated Full Stack Developer with a B.E. in Information Technology (CGPA 8.20) and 7 months of hands-on internship experience. Proficient in building end-to-end web applications using React, TypeScript, FastAPI, and PostgreSQL. Quick learner with a strong passion for UI/UX design and scalable web development.
              </p>
            </section>

            {/* Experience Section */}
            <section className="space-y-2">
              <h2 className="text-[14px] font-bold uppercase tracking-wider text-[#4b3b30] border-b border-[#4b3b30]/20 pb-0.5">
                Experience
              </h2>

              <div className="space-y-2.5">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px]">
                      <div>
                        <h3 className="font-semibold text-neutral-800">{exp.role}</h3>
                        <p className="text-[10px] text-neutral-500 font-light">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-semibold text-[#4b3b30] bg-[#d3c5b9]/20 border border-[#d3c5b9]/30 px-1.5 py-0.5 self-start sm:self-center">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-[10px] text-neutral-600 space-y-0.5 font-light">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-0.5 leading-tight">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="space-y-2">
              <h2 className="text-[14px] font-bold uppercase tracking-wider text-[#4b3b30] border-b border-[#4b3b30]/20 pb-0.5">
                Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {projects.map((proj, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h3 className="text-[11px] font-semibold text-neutral-800 uppercase tracking-wider">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] text-neutral-500 font-light leading-snug">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="space-y-1.5">
              <h2 className="text-[14px] font-bold uppercase tracking-wider text-[#4b3b30] border-b border-[#4b3b30]/20 pb-0.5">
                Contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[10.5px] text-neutral-600 font-light">
                <a href="tel:+917863038135" className="flex items-center gap-2 hover:text-[#4b3b30] transition-colors">
                  <Phone className="h-4 w-4 text-[#4b3b30]" />
                  7863038135
                </a>
                <a href="mailto:mailtoparmar23@gmail.com" className="flex items-center gap-2 hover:text-[#4b3b30] transition-colors">
                  <Mail className="h-4 w-4 text-[#4b3b30]" />
                  mailtoparmar23@gmail.com
                </a>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <MapPin className="h-4 w-4 text-[#4b3b30]" />
                  kotna, vadodara
                </div>
                <div className="flex gap-4 sm:col-span-2 mt-1">
                  <a
                    href="https://github.com/RoshniParmarR"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#4b3b30] transition-colors flex items-center gap-1 font-semibold"
                  >
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/roshni-parmar-0919802b0/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#4b3b30] transition-colors flex items-center gap-1 font-semibold"
                  >
                    LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Right Decorative Vertical Stack Dots */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-1.5">
            <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
            <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
            <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
            <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
            <span className="print-dot-brown w-3.5 h-3.5 rounded-full bg-[#4b3b30] opacity-80" />
          </div>

        </main>

      </div>

    </div>
  );
};

export default Resume;
