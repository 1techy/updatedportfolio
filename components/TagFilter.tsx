"use client";

import { motion } from "framer-motion";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TagFilter({ tags, selectedTag, onTagSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <motion.button
        onClick={() => onTagSelect(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          selectedTag === null
            ? "bg-[var(--accent)] text-white shadow-lg"
            : "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--card-border)]"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All Projects
      </motion.button>
      {tags.map((tag) => (
        <motion.button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedTag === tag
              ? "bg-[var(--accent)] text-white shadow-lg"
              : "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--card-border)]"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tag}
        </motion.button>
      ))}
    </div>
  );
}
