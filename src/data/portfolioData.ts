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
  // Dynamic images strings mapped to JSON keys
  protfolio_details_1: string;
  protfolio_details_2: string;
  protfolio_details_3: string;
  protfolio_details_4: string;
  protfolio_details_5: string;
  protfolio_details_6: string;
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
    githubLink: "https://github.com",
    // Images strings stored inside JSON structures
    protfolio_details_1: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781528563/machain-1_2_qtlf6l.webp", 
    protfolio_details_2: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781528563/machain-2_2_cfknr3.webp",
    protfolio_details_3: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781528563/machain-3_2_m6zdvt.webp",
    protfolio_details_4: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781528563/machain-4_2_ouq4xa.webp",
    protfolio_details_5: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781528563/machain-5_2_sjyhnv.webp",
    protfolio_details_6: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781528563/machain-6_2_eqmkzi.webp",
  },
  "excavators": {
    title: "Excavators",
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
    githubLink: "https://github.com",
    protfolio_details_1: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782730440/machine_2_1_ssnury.jpg", 
    protfolio_details_2: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782730440/machine_2_2_zyqx5t.jpg",
    protfolio_details_3: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782730440/machine_2_3_qtwxin.jpg",
    protfolio_details_4: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782730440/machine_2_4_k8qm3y.jpg",
    protfolio_details_5: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782730440/machine_2_5_tmjo7r.jpg",
    protfolio_details_6: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782739501/machine_2_6_boncr4.jpg",
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
    githubLink: "https://github.com",
    protfolio_details_1: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781599937/machain-1_3_aln4ty.webp",
    protfolio_details_2: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781599937/machain-2_3_cc5tfa.webp",
    protfolio_details_3: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781599938/machain-3_3_micd7v.webp",
    protfolio_details_4: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781599937/machain-4_3_tgsfwa.webp",
    protfolio_details_5: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781599938/machain-5_3_twxgsj.webp",
    protfolio_details_6: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781599937/machain-6_3_ihovkj.webp",
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
    githubLink: "https://github.com",
    protfolio_details_1: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782903753/machain-4_1_xtfq0w.webp",
    protfolio_details_2: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782987502/machain-4_2_ubdfur.webp",
    protfolio_details_3: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782987501/machain-4_3_fgpt0x.webp",
    protfolio_details_4: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782902864/machain-4_4_cld5uy.webp",
    protfolio_details_5: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782902860/machain-4_5_teqjmv.webp",
    protfolio_details_6: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1782987384/machain-4_6_uueail.webp",
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
    githubLink: "https://github.com",
    protfolio_details_1: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781604373/machain-1_5_pg7t77.webp",
    protfolio_details_2: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781604373/machain-2_5_sdunib.webp",
    protfolio_details_3: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781604373/machain-3_5_lt1vdr.webp",
    protfolio_details_4: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781604373/machain-4_5_aeisca.webp",
    protfolio_details_5: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781604374/machain-5_5_pjr3c1.webp",
    protfolio_details_6: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1781604373/machain-6_5_srm8j1.webp",
  },
  // "machain-6": {
  //   title: "Machain 6 - Creative Studio Product Layout",
  //   category: "Digital Services / Figma Design",
  //   client: "Golden Tree Luxury Hospitality",
  //   services: "Creative Art Direction, Spatial UI Branding",
  //   date: "01 Jan 2026 - 25 Jan 2026",
  //   duration: "24 Days",
  //   challengesTitle: "Challenges Model 6",
  //   challengesBody: "Machain 6 demanded intricate visual layouts built directly around high-end continuous spatial parallax sliders.",
  //   challengeList: [
  //     "Preserving responsive asset distribution across rigid frame formats.",
  //     "Structuring immersive interface layouts that pass accessibility compliance criteria."
  //   ],
  //   solutionsBody: "Utilized fluid proportional spacing rules combined with structured element groups.",
  //   behanceLink: "https://behance.com",
  //   dribbbleLink: "https://dribbble.com",
  //   githubLink: "https://github.com",
  //   protfolio_details_1: "/assets/img/portfolio_solution_3.jpg",
  //   protfolio_details_2: "/assets/img/portfolio_solution_1.jpg",
  //   protfolio_details_3: "/assets/img/portfoliodetails_2.jpg",
  //  protfolio_details_4: "/assets/img/portfoliodetails_1.jpg",
  //   protfolio_details_5: "/assets/img/portfolio_solution_1.jpg",
  //   protfolio_details_6: "/assets/img/portfolio_solution_2.jpg",
  // }
};