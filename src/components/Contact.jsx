import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobType: 'Full-Time',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that specific input as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/mailtoparmar23@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company || "Not Specified",
        "Job Type": formData.jobType,
        message: formData.message,
        _subject: `Hiring Inquiry: ${formData.company || 'Direct'} - ${formData.name}`
      })
    })
      .then((res) => {
        if (res.ok) {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', company: '', jobType: 'Full-Time', message: '' });
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 4000);
        } else {
          throw new Error("Failed to send message");
        }
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false);
        alert("Failed to send message. Please try again later or email me directly.");
      });
  };

  const contacts = [
    { icon: <Mail className="h-4 w-4" />, label: 'Email', value: 'mailtoparmar23@gmail.com', href: 'mailto:mailtoparmar23@gmail.com' },
    { icon: <Phone className="h-4 w-4" />, label: 'Phone', value: '+91 78630 38135', href: 'tel:+917863038135' },
    { icon: <MapPin className="h-4 w-4" />, label: 'Location', value: 'Gujarat, India', href: '#' },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-neutral-50 dark:bg-black text-neutral-800 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-medium tracking-tight capitalize ">
              Contact Me
            </h2>

            <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-[16px]">
              Interested in hiring me? Drop a message below with your details.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Contact Info */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-5 space-y-6">
            <div className=" p-0 lg:p-8 rounded-2xl glass-effect border border-neutral-200/60 dark:border-neutral-900 space-y-8">
              <div className="space-y-3">
                <h3 className="text-[20px] font-medium capitalize text-neutral-900 dark:text-white">
                  Get in touch
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-[16px] leading-relaxed">
                  Have a job opening, project idea, or contract role? Submit the form, and I will get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-5">
                {contacts.map((contact, i) => (
                  <a
                    key={i}
                    href={contact.href}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/40 dark:hover:bg-neutral-900/40 border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-900 transition-all duration-200"
                  >
                    <div className="p-2 rounded-xl bg-gray-100 dark:bg-neutral-900 text-gray-770 dark:text-gray-300">
                      {contact.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[16px] font-medium text-neutral-400 tracking-wider">
                        {contact.label}
                      </span>
                      <span className="text-[14px] font-medium text-neutral-700 dark:text-neutral-400 break-all">
                        {contact.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal direction="right" delay={200} className="lg:col-span-7 w-full">
            <div className="p-8 rounded-2xl bg-white dark:bg-black border border-neutral-200/50 dark:border-neutral-900">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Success Toast */}
                {submitSuccess && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-black dark:text-white animate-in fade-in duration-300">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span className="text-[14px] font-medium">Your message was sent successfully! I will contact you soon.</span>
                  </div>
                )}

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[16px] mb-2 font-medium text-neutral-700 dark:text-neutral-400">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-[12px] py-[10px] text-[14px] rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition-all ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-900'
                        }`}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 text-red-500 text-[12px] font-medium mt-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[16px] mb-2 font-medium text-neutral-700 dark:text-neutral-400">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-[12px] py-[10px] text-[14px] rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-900'
                        }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-red-500 text-[12px] font-medium mt-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2: Company and Job Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Input */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-[16px] mb-2 font-medium text-neutral-700 dark:text-neutral-400">
                      Company Name <span className="text-neutral-400 text-[12px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-[12px] py-[10px] text-[14px] rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition-all border-neutral-200 dark:border-neutral-900"
                      placeholder="e.g. Acme Corp"
                    />
                  </div>

                  {/* Job Type Input */}
                  <div className="space-y-2">
                    <label htmlFor="jobType" className="text-[16px] mb-2 font-medium text-neutral-700 dark:text-neutral-400">
                      Role / Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="jobType"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="w-full px-[12px] pr-[40px] py-[10.5px] text-[14px] rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition-all border-neutral-200 dark:border-neutral-900 cursor-pointer appearance-none"
                      >
                        <option value="Full-Time">Full-Time Employee</option>
                        <option value="Contract / Freelance">Contract / Freelance</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 dark:text-neutral-400">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[16px] font-medium text-neutral-700 dark:text-neutral-400">
                    Job Details / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-[14px] rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition-all ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-900'
                      }`}
                    placeholder="Write details about the position, project, or role here..."
                  ></textarea>
                  {errors.message && (
                    <div className="flex items-center gap-1 text-red-500 text-[12px] font-medium mt-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 active:bg-gray-900 dark:active:bg-gray-200 disabled:bg-gray-400 shadow-md shadow-gray-950/15 dark:shadow-white/5 transition-all cursor-pointer hover:-translate-y-0.5 disabled:translate-y-0 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
