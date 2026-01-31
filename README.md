# Modern Portfolio Website

A clean, modern, and highly interactive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a beautiful dark/light theme toggle and showcases your projects in style.

## ✨ Features

- 🎨 **Clean, Modern Design** - Minimal aesthetic with soft dark red accent colors
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **High Performance** - Built with Next.js 15 App Router
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🔍 **Project Filtering** - Filter projects by tags
- 📊 **Dynamic Routing** - Individual project detail pages
- 🎪 **Glassmorphism UI** - Beautiful glass card effects

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Edit Your Personal Information

Open `/data/personal.ts` and update:

```typescript
export const personalData = {
  // Your name
  name: "Your Name",
  
  // Hero section on homepage
  hero: {
    headline: "Hi, I'm [NAME]. I build AI-powered apps.",
    subtext: "Your subtitle here...",
  },

  // About page bio
  bio: {
    shortBio: "Your bio here...",
    values: [...],
    currentFocus: "What you're working on now...",
  },

  // Your skills
  skills: {
    languages: ["TypeScript", "Python", ...],
    frontend: ["React", "Next.js", ...],
    // ... more skill categories
  },

  // Contact information
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};
```

### 2. Add or Edit Projects

Open `/data/projects.ts` and modify the projects array:

```typescript
export const projects: Project[] = [
  {
    slug: "project-url-slug",
    title: "Project Title",
    description: "Short description",
    longDescription: "Detailed description for project page",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    tags: ["AI", "Full Stack", "SaaS"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    coverImage: "https://...",
    screenshots: ["https://...", "https://..."],
    learnings: [
      "What you learned from this project",
      "Key insights and takeaways",
    ],
    featured: true, // Shows on homepage
  },
  // Add more projects...
];
```

### 3. Update Site Metadata

Open `/app/layout.tsx` and update the metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer",
  description: "Your custom description",
  keywords: ["your", "keywords", "here"],
};
```

### 4. Customize Colors

The accent color is soft dark red by default. To change it:

1. Open `/tailwind.config.ts`
2. Modify the accent colors:

```typescript
colors: {
  accent: {
    DEFAULT: "#991b1b", // Change this
    dark: "#7f1d1d",    // And this
    light: "#b91c1c",   // And this
  },
}
```

### 5. Change Fonts

Edit `/app/layout.tsx` to use different Google Fonts:

```typescript
import { YourFont, AnotherFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
```

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page & dynamic routes
│   │   └── [slug]/        # Individual project pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── TagFilter.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── data/                  # Data files
│   ├── personal.ts        # Personal info (EDIT THIS)
│   └── projects.ts        # Projects data (EDIT THIS)
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Go to [Vercel](https://vercel.com)**

3. **Import your repository**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain

### Deploy to Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Framework preset:** Next.js

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- Digital Ocean App Platform

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design Features

- **Soft Dark Red Accent** - #991b1b primary color
- **Glassmorphism** - Frosted glass card effects
- **Smooth Animations** - Framer Motion micro-interactions
- **Typography** - Instrument Serif display font + Inter body font
- **Responsive Design** - Mobile-first approach
- **Theme Switching** - Smooth dark/light mode transitions

## 🔧 Customization Tips

1. **Images**: Use high-quality images from [Unsplash](https://unsplash.com) or your own
2. **Icons**: The project uses inline SVGs for icons
3. **Animations**: Adjust animation timings in component files
4. **Colors**: All colors use CSS variables for easy theming
5. **Spacing**: Built on Tailwind's spacing scale

## 📄 File Locations Quick Reference

| What to Edit | File Location |
|-------------|---------------|
| Your name | `/data/personal.ts` |
| Hero text | `/data/personal.ts` |
| Bio & about | `/data/personal.ts` |
| Projects | `/data/projects.ts` |
| Skills | `/data/personal.ts` |
| Contact info | `/data/personal.ts` |
| Site title | `/app/layout.tsx` |
| Colors | `/tailwind.config.ts` |
| Fonts | `/app/layout.tsx` |

## 🤝 Support

If you have questions or need help customizing your portfolio:
- Check the code comments for guidance
- Refer to [Next.js documentation](https://nextjs.org/docs)
- Refer to [Tailwind CSS documentation](https://tailwindcss.com/docs)

## 📝 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion
