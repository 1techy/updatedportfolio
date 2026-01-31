"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-display font-bold text-[var(--accent)] mb-4">
            404
          </h1>
          <h2 className="text-3xl font-display font-bold mb-4 text-[var(--foreground)]">
            Page Not Found
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go Back Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
