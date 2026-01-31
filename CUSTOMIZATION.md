# Quick Customization Guide

This guide shows you exactly where to edit your portfolio content.

## 1. Edit Your Name & Info

📁 **File:** `/data/personal.ts`

```typescript
name: "Your Name"  // ← Change this to your name
```

The name appears in:
- Navigation bar (as initials)
- Hero section
- Footer
- Page titles

---

## 2. Edit Hero Section

📁 **File:** `/data/personal.ts`

```typescript
hero: {
  headline: "Hi, I'm [NAME]. I build AI-powered apps.",  // ← Edit this
  subtext: "Your tagline or description here...",        // ← Edit this
}
```

The `[NAME]` placeholder is automatically replaced with your name.

---

## 3. Edit Your Bio

📁 **File:** `/data/personal.ts`

```typescript
bio: {
  shortBio: "Write a 2-3 sentence bio here...",
  
  values: [
    {
      title: "Your Value 1",
      description: "Describe what you believe in...",
    },
    // Add more values...
  ],
  
  currentFocus: "What you're currently working on...",
}
```

---

## 4. Add/Edit Projects

📁 **File:** `/data/projects.ts`

To add a new project, copy this template:

```typescript
{
  slug: "project-url-name",              // URL-friendly name
  title: "Project Name",                  // Display name
  description: "One sentence summary",    // Card description
  longDescription: "Full description",    // Project page description
  techStack: ["Next.js", "TypeScript"],  // Technologies used
  tags: ["AI", "Web App"],               // Filter tags
  githubUrl: "https://github.com/...",   // Optional
  liveUrl: "https://...",                // Optional
  coverImage: "https://...",             // Main image
  screenshots: ["https://..."],          // Gallery images
  learnings: ["What you learned"],       // Key takeaways
  featured: true,                        // Show on homepage?
}
```

**Tips:**
- Use `featured: true` for your top 3 projects
- Get free images from [Unsplash](https://unsplash.com)
- Keep descriptions concise and impactful

---

## 5. Edit Your Skills

📁 **File:** `/data/personal.ts`

```typescript
skills: {
  languages: ["TypeScript", "Python", "JavaScript"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "PostgreSQL", "MongoDB"],
  aiml: ["OpenAI API", "LangChain"],
  tools: ["Git", "Docker", "AWS"],
}
```

Add or remove skills as needed!

---

## 6. Update Contact Information

📁 **File:** `/data/personal.ts`

```typescript
contact: {
  email: "your.email@example.com",              // ← Change this
  github: "https://github.com/yourusername",    // ← Change this
  linkedin: "https://linkedin.com/in/you",      // ← Change this
  twitter: "https://twitter.com/you",           // ← Change this
}
```

---

## 7. Change Site Title & Description

📁 **File:** `/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer",  // ← Change this
  description: "Your custom description...",   // ← Change this
  keywords: ["your", "keywords"],              // ← Change this
};
```

This affects:
- Browser tab title
- Search engine results
- Social media previews

---

## 8. Customize Colors (Optional)

📁 **File:** `/tailwind.config.ts`

```typescript
colors: {
  accent: {
    DEFAULT: "#991b1b",  // Primary accent color
    dark: "#7f1d1d",     // Darker shade
    light: "#b91c1c",    // Lighter shade
  },
}
```

Current theme: Soft dark red  
Try: `#1e40af` (blue), `#065f46` (green), `#7c2d12` (brown)

---

## 9. Change Fonts (Optional)

📁 **File:** `/app/layout.tsx`

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
```

Browse fonts at [Google Fonts](https://fonts.google.com)

---

## Common Questions

**Q: How do I add a 4th featured project?**  
A: Set `featured: true` on any project in `/data/projects.ts`

**Q: Can I remove the Twitter/LinkedIn links?**  
A: Yes! Just delete those lines from `/data/personal.ts`

**Q: How do I change the logo in the navbar?**  
A: Edit `/components/Navbar.tsx` - it currently shows your initials (YN)

**Q: Where are the images stored?**  
A: Currently using external URLs. You can also use `/public` folder for local images.

---

## Need Help?

1. Check the main `README.md` for detailed instructions
2. All files have comments explaining what they do
3. The code is organized to be easy to understand

**Remember:** Always save your files after editing, and refresh your browser to see changes!
