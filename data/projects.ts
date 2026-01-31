export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  coverImage: string;
  screenshots: string[];
  learnings: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description: "A powerful AI-driven content generation platform that creates high-quality marketing copy, blog posts, and social media content.",
    longDescription: "Built a comprehensive AI content generation platform that leverages GPT-4 to create marketing copy, blog posts, and social media content. The platform features a intuitive editor with real-time collaboration, content templates, and SEO optimization suggestions.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "PostgreSQL", "Prisma"],
    tags: ["AI", "Full Stack", "SaaS"],
    githubUrl: "https://github.com/yourusername/ai-content-generator",
    liveUrl: "https://ai-content-gen.demo",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1676277791608-ac52b084f293?w=1200&q=80",
    ],
    learnings: [
      "Implementing efficient token streaming for real-time AI responses",
      "Building a robust rate-limiting system for API calls",
      "Designing an intuitive UX for AI-powered content editing",
      "Optimizing database queries for large-scale content management",
    ],
    featured: true,
  },
  {
    slug: "blockchain-explorer",
    title: "Blockchain Explorer",
    description: "Real-time blockchain data visualization and analytics platform with advanced filtering and search capabilities.",
    longDescription: "Developed a comprehensive blockchain explorer that provides real-time transaction tracking, wallet analytics, and network statistics. Features include advanced search, customizable dashboards, and data export functionality.",
    techStack: ["React", "TypeScript", "Web3.js", "D3.js", "Node.js", "MongoDB"],
    tags: ["Blockchain", "Data Visualization", "Full Stack"],
    githubUrl: "https://github.com/yourusername/blockchain-explorer",
    liveUrl: "https://blockchain-explorer.demo",
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1200&q=80",
    ],
    learnings: [
      "Working with Web3.js and blockchain APIs",
      "Creating performant data visualizations with large datasets",
      "Implementing real-time updates using WebSockets",
      "Building scalable backend architecture for high-traffic applications",
    ],
    featured: true,
  },
  {
    slug: "task-automation-tool",
    title: "Task Automation Tool",
    description: "No-code automation platform that connects apps and automates workflows with a visual builder interface.",
    longDescription: "Created a no-code automation platform that allows users to connect various apps and services to automate repetitive tasks. Features a drag-and-drop workflow builder, pre-built templates, and extensive integration support.",
    techStack: ["Next.js", "TypeScript", "React Flow", "tRPC", "Prisma", "Redis"],
    tags: ["Automation", "No-Code", "SaaS"],
    githubUrl: "https://github.com/yourusername/task-automation",
    liveUrl: "https://automate-tasks.demo",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ],
    learnings: [
      "Building visual workflow editors with React Flow",
      "Designing extensible plugin architecture",
      "Implementing queue systems for background job processing",
      "Creating robust error handling for third-party API integrations",
    ],
    featured: true,
  },
  {
    slug: "fitness-tracker-app",
    title: "Fitness Tracker App",
    description: "Mobile-first fitness tracking application with workout planning, progress tracking, and social features.",
    longDescription: "Built a comprehensive fitness tracking application that helps users plan workouts, track progress, and connect with fitness communities. Includes workout templates, exercise library, and progress analytics.",
    techStack: ["React Native", "TypeScript", "Firebase", "Redux", "Chart.js"],
    tags: ["Mobile", "Health & Fitness", "React Native"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    coverImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    ],
    learnings: [
      "Building cross-platform mobile apps with React Native",
      "Implementing offline-first architecture",
      "Optimizing app performance for mobile devices",
      "Designing engaging user experiences for habit formation",
    ],
  },
  {
    slug: "real-time-chat",
    title: "Real-Time Chat Platform",
    description: "Scalable real-time messaging platform with end-to-end encryption, file sharing, and video calling.",
    longDescription: "Developed a modern chat platform with support for one-on-one and group conversations, file sharing, video calls, and end-to-end encryption. Built with scalability and security as top priorities.",
    techStack: ["Next.js", "Socket.io", "WebRTC", "PostgreSQL", "Redis", "AWS S3"],
    tags: ["Real-Time", "Full Stack", "Security"],
    githubUrl: "https://github.com/yourusername/realtime-chat",
    liveUrl: "https://chat-platform.demo",
    coverImage: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1200&q=80",
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=1200&q=80",
    ],
    learnings: [
      "Implementing WebSocket connections at scale",
      "Building WebRTC video calling functionality",
      "Designing secure end-to-end encryption systems",
      "Optimizing real-time message delivery and presence systems",
    ],
  },
  {
    slug: "e-commerce-dashboard",
    title: "E-Commerce Analytics Dashboard",
    description: "Advanced analytics dashboard for e-commerce businesses with real-time sales tracking and predictive insights.",
    longDescription: "Created a comprehensive analytics dashboard for e-commerce businesses featuring real-time sales tracking, customer behavior analysis, inventory management, and AI-powered sales predictions.",
    techStack: ["React", "TypeScript", "Recharts", "FastAPI", "PostgreSQL", "Docker"],
    tags: ["Analytics", "E-Commerce", "Full Stack"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ],
    learnings: [
      "Building complex data visualization dashboards",
      "Implementing real-time data streaming",
      "Creating predictive models for business analytics",
      "Optimizing queries for large-scale data processing",
    ],
  },
];

// Helper function to get all unique tags
export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
