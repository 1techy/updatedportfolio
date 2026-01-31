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

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold mb-6 text-[var(--foreground)]">
            My Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalData.bio.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 hover:border-[var(--accent)] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                  {value.title}
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
              What I'm Building Now
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
