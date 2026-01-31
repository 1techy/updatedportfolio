"use client";

import Link from "next/link";
import { personalData } from "@/data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mt-12 pt-8 border-t border-[var(--card-border)] text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
