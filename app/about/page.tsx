"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/personal";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[var(--foreground)]">
            About Me
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Get to know more about my journey, values, and what drives me.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-4 text-[var(--foreground)]">
              Who I Am
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              {personalData.bio.shortBio}
            </p>
          </div>
        </motion.section>

        {/* Resume */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
          id="resume"
        >
          <div className="glass-card p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display font-bold text-[var(--foreground)]">
                Resume
              </h2>
              <a
                href="/AtharvaKhairnar_Resume.pdf"
                download
                className="btn-primary flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
            </div>
            <div className="w-full h-[800px] border border-[var(--card-border)] rounded-lg overflow-hidden">
              <iframe
                src="/AtharvaKhairnar_Resume.pdf"
                className="w-full h-full"
                title="Resume"
              />
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold mb-6 text-[var(--foreground)]">
            Skills & Technologies
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalData.skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--card-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalData.skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--card-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalData.skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--card-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalData.skills.aiml.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--card-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalData.skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--card-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Current Focus */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="glass-card p-8 bg-gradient-to-br from-[var(--accent)]/5 to-transparent border-[var(--accent)]/20">
            <h2 className="text-2xl font-display font-bold mb-4 text-[var(--foreground)]">
              What I&apos;m Building Now
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              {personalData.bio.currentFocus}
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
