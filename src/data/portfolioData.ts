// src/data/portfolioData.ts

export interface ProjectDataType {
  title: string;
  category: string;
  client: string;
  services: string;
  date: string;
  duration: string;
  challengesTitle: string;
  challengesBody: string;
  challengeList: string[];
  solutionsBody: string;
  behanceLink?: string;
  dribbbleLink?: string;
  githubLink?: string;
}

export const portfolioDatabase: Record<string, ProjectDataType> = {
  "machain-1": {
    title: "Machain 1 - Custom Industrial Automation App",
    category: "Digital Services / App Design",
    client: "Atlas Power Inc \n Lahore, Pakistan",
    services: "UX Research, Wireframing, UI Design",
    date: "05 Dec 2025 - 01 Jan 2026",
    duration: "1 Month",
    challengesTitle: "Challenges Model 1",
    challengesBody: "Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence.",
    challengeList: [
      "Design Welcome to our digital agency!",
      "Dev online. From website design Implementation world of digital.",
      "Implementation evolving world of digital Design Welcome to our digital agency!",
      "Launch growth and reach your goals. Implementation evolving world of digital."
    ],
    solutionsBody: "Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence.",
    behanceLink: "https://behance.com",
    dribbbleLink: "https://dribbble.com",
    githubLink: "https://github.com"
  },
  "machain-2": {
    title: "Machain 2 - Corporate Full-Stack Infrastructure",
    category: "Digital Services / Web Design",
    client: "FH Group Ltd \n Canada",
    services: "Frontend Optimization, API Layering",
    date: "12 Jan 2026 - 20 Feb 2026",
    duration: "1.5 Months",
    challengesTitle: "Challenges Model 2",
    challengesBody: "Machain 2 required complex real-time operational dashboard integrations to manage heavy web traffic scales flawlessly.",
    challengeList: [
      "Handling thousands of socket parameters simultaneously.",
      "Ensuring sub-100ms response times globally.",
      "Optimizing rendering cycles for web modules."
    ],
    solutionsBody: "We leveraged scalable Next.js server actions combined with micro-cached endpoints to deliver ultra-fast dashboard performance.",
    behanceLink: "https://behance.com",
    dribbbleLink: "https://dribbble.com",
    githubLink: "https://github.com"
  },
  "machain-3": {
    title: "Machain 3 - Advanced Figma Architecture",
    category: "Digital Services / Figma Design",
    client: "Design Studio Intl \n UK",
    services: "UI Design, Prototyping, Design System",
    date: "01 Mar 2026 - 25 Mar 2026",
    duration: "25 Days",
    challengesTitle: "Challenges Model 3",
    challengesBody: "Machain 3 focused heavily on creating a fully scalable token-based global design system architecture.",
    challengeList: [
      "Structuring cross-platform component libraries.",
      "Syncing design tokens with production repositories dynamically."
    ],
    solutionsBody: "We built an optimized setup with Figma Variables that aligns directly with Tailwind utility layers.",
    behanceLink: "https://behance.com",
    dribbbleLink: "https://dribbble.com",
    githubLink: "https://github.com"
  },
  "machain-4": {
    title: "Machain 4 - Scalable Mobile Application",
    category: "Digital Services / App Design",
    client: "TechVibe Global",
    services: "Mobile UI Design, React Native Architecture",
    date: "05 Apr 2026 - 05 May 2026",
    duration: "1 Month",
    challengesTitle: "Challenges Model 4",
    challengesBody: "Machain 4 required highly complex structural adjustments to process intensive offline application caching features.",
    challengeList: [
      "Managing robust local database synchronization cycles sync state.",
      "Building responsive touch gestures matching system navigation layouts."
    ],
    solutionsBody: "We integrated robust local data models to support instantaneous query parsing features.",
    behanceLink: "https://behance.com",
    dribbbleLink: "https://dribbble.com",
    githubLink: "https://github.com"
  },
  "machain-5": {
    title: "Machain 5 - E-Commerce Platform Design",
    category: "Digital Services / Web Design",
    client: "Lesoie International",
    services: "E-Commerce Strategy, UX Optimization",
    date: "10 May 2026 - Current",
    duration: "Ongoing",
    challengesTitle: "Challenges Model 5",
    challengesBody: "Machain 5 involved optimizing multi-tier nested conditional product catalog engines dynamically.",
    challengeList: [
      "Reducing checkout abandonment ratios through streamlined visual states.",
      "Enabling instant server-side filtering schemas."
    ],
    solutionsBody: "Deployed performant Next.js dynamic render hooks combined with static segment data distribution layers.",
    behanceLink: "https://behance.com",
    dribbbleLink: "https://dribbble.com",
    githubLink: "https://github.com"
  },
  "machain-6": {
    title: "Machain 6 - Creative Studio Product Layout",
    category: "Digital Services / Figma Design",
    client: "Golden Tree Luxury Hospitality",
    services: "Creative Art Direction, Spatial UI Branding",
    date: "01 Jan 2026 - 25 Jan 2026",
    duration: "24 Days",
    challengesTitle: "Challenges Model 6",
    challengesBody: "Machain 6 demanded intricate visual layouts built directly around high-end continuous spatial parallax sliders.",
    challengeList: [
      "Preserving responsive asset distribution across rigid frame formats.",
      "Structuring immersive interface layouts that pass accessibility compliance criteria."
    ],
    solutionsBody: "Utilized fluid proportional spacing rules combined with structured element groups.",
    behanceLink: "https://behance.com",
    dribbbleLink: "https://dribbble.com",
    githubLink: "https://github.com"
  }
};