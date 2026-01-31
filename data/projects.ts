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
    slug: "placeholder",
    title: "placeholder",
    description: "placeholder",
    longDescription: "placeholder",
    techStack: ["1", "2", "3", ],
    tags: ["4", "5", "6"],
    githubUrl: "https://github.com/",
    liveUrl: "placeholder",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1676277791608-ac52b084f293?w=1200&q=80",
    ],
    learnings: [
      "a",
      "b",
      "v",
    ],
    featured: true,
  },
  {
    slug: "placeholder",
    title: "placeholder",
    description: "placeholder",
    longDescription: "placeholder",
    techStack: ["1", "2", "3", ],
    tags: ["4", "5", "6"],
    githubUrl: "https://github.com/",
    liveUrl: "placeholder",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1676277791608-ac52b084f293?w=1200&q=80",
    ],
    learnings: [
      "a",
      "b",
      "v",
    ],
    featured: true,
  },
  {
    slug: "placeholder",
    title: "placeholder",
    description: "placeholder",
    longDescription: "placeholder",
    techStack: ["1", "2", "3", ],
    tags: ["4", "5", "6"],
    githubUrl: "https://github.com/",
    liveUrl: "placeholder",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1676277791608-ac52b084f293?w=1200&q=80",
    ],
    learnings: [
      "a",
      "b",
      "v",
    ],
    featured: true,
  },

];

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
