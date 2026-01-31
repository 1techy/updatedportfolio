"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/personal";

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${personalData.contact.email}`;
  };

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
            Let's Connect
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            I'm always interested in hearing about new projects, opportunities, and collaborations.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            //onClick={handleEmailClick}
            className="glass-card p-8 transition-all hover:scale-105 flex flex-col items-center justify-center text-center"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-[var(--accent)]"
                fill="none"
                viewBox="0 -2 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
              Email
            </h3>
            <p className="text-[var(--muted-foreground)]">
              {personalData.contact.email}
            </p>
          </motion.div>

          {/* Quick Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-[var(--accent)]"
                fill="none"
                viewBox="2 -2 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
              Quick Message
            </h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              Send me a quick message via email
            </p>
            <motion.button
              onClick={handleEmailClick}
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Email
            </motion.button>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8"
        >
          <h2 className="text-2xl font-display font-bold mb-6 text-center text-[var(--foreground)]">
            My Profiles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* GitHub */}
            {personalData.contact.github && (
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="flex flex-col items-center p-6 rounded-lg bg-[var(--muted)] hover:bg-[var(--accent)]/10 border border-[var(--card-border)] hover:border-[var(--accent)] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-8 h-8 mb-3 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    GitHub
                  </span>
                </motion.div>
              </a>
            )}

            {/* LinkedIn */}
            {personalData.contact.linkedin && (
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="flex flex-col items-center p-6 rounded-lg bg-[var(--muted)] hover:bg-[var(--accent)]/10 border border-[var(--card-border)] hover:border-[var(--accent)] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-8 h-8 mb-3 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    LinkedIn
                  </span>
                </motion.div>
              </a>
            )}

            {/* Discord */}
            {personalData.contact.discord && (
              <a
                href={personalData.contact.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="flex flex-col items-center p-6 rounded-lg bg-[var(--muted)] hover:bg-[var(--accent)]/10 border border-[var(--card-border)] hover:border-[var(--accent)] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-8 h-8 mb-3 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                    fill="currentColor"
                    viewBox="0 -2 16 16"
                  >
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                  </svg>
                  <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    Discord
                  </span>
                </motion.div>
              </a>
            )}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--muted-foreground)]">
            Looking forward to connecting with you! I typically respond within 24-48 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
