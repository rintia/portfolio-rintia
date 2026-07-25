export const portfolioData = {
  profile: {
    name: "Rintia Islam",
    title: "Full-Stack Developer",
    tagline: "Building high-performance, accessible, and user-centric digital experiences.",
    bioIntro: "I am a passionate Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern cloud technologies.",
    aboutParagraphs: [
      "My programming journey began out of interest in the tech field. What started as simple HTML & CSS tweaks soon evolved into building complex, interactive full-stack applications. I thrive at the intersection of design and engineering, combining clean aesthetics with optimized architecture.",
      "In my day-to-day work, I focus on constructing maintainable codebases, designing intuitive user interfaces, and building robust APIs. I work best in collaborative environments that value open communication, continuous learning, and clean code principles.",
      "When I’m not coding, I embrace my creative side through writing, traveling, exploring new hobbies, and the occasional weekend cake baking."
    ],
    avatarUrl: "/profile.png",
    resumeUrl: "/Rintia Islam(Resume_Full_Stack_Developer).pdf",
    socials: {
      github: "https://github.com/rintia",
      linkedin: "https://www.linkedin.com/in/rintia-islam/",
      twitter: "https://x.com/rintiaIslam110",
      facebook: "https://www.facebook.com/rintia.islamkhan",

    },
    contact: {
      email: "rintiaislam110@gmail.com",
      phone: "+880 1635-317877",
      whatsapp: "+880 1635-317877",
      location: "Dhaka, Bangladesh"
    }
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  interests: [
    { title: "Travel", description: "Exploring new places, cultures, and cuisines around the world.", icon: "Map" },
    { title: "Cooking & Baking", description: "Experimenting with new recipes and techniques in the kitchen.", icon: "ChefHat" },
    { title: "Photography", description: "Capturing moments and exploring the world through my lens.", icon: "Camera" },
    { title: "Painting", description: "Unplugging from screens to practice structural perspective and sketching in nature.", icon: "Palette" }
  ],
  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 & CSS3", level: 95 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "RESTful APIs", level: 90 }
    ],
    tools: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 90 },

    ]
  },
  education: [
    {
      degree: "B.Sc. in Electrical and Electronics Engineering (Majored in Computer Science)",
      institution: "University of Dhaka, Dhaka, Bangladesh",
      year: "2017 - 2022",
      project: 'Arduino-based Project, Design and implementation of an upgraded third eye system for blind'
    },
    {
      degree: "HSC",
      institution: "Birshreshtha Munshi Abdur Rouf Public College, Dhaka ",
      year: "2016",
    },
  ],
  projects: [
    {
      id: "soft-skills-mastery",
      title: "Soft Skills Mastery",
      shortDescription: "A modern, premium Web Application built to help professionals develop critical interpersonal and leadership skills using Next.js and Gemini AI.",
      thumbnail: "/soft skills.png",
      tags: ["Next.js 16", "Gemini AI", "Tailwind CSS v4", "Better Auth", "MongoDB", "TanStack Query"],
      demoUrl: "https://soft-skills-ai.vercel.app",
      repoUrl: "https://github.com/rintia/soft-skills-ai",
      overview: "Soft Skills Mastery is a premium web application designed to help professionals develop critical interpersonal and leadership skills. Powered by Next.js and integrated with Gemini Generative AI, the platform provides interactive learning, conversational chatbot support, and intuitive administration controls.",
      challenges: "Integrating Better Auth dynamically with a custom MongoDB adapter and maintaining state consistency across query invalidations while keeping Gemini AI assistant chat interactions smooth and responsive.",
      learnings: "Designed robust session adapters using Better Auth, leveraged Gemini 1.5 Flash for generating custom course outlines dynamically, and implemented a custom Toast alerts context provider for notifications.",
      roadmap: [
        "Enable OAuth Google logins and automatic learner/admin session storage.",
        "Integrate TanStack React Query for optimized client-side syllabus page caching.",
        "Add interactive learning reviews, customizable categories, and pagination limits."
      ]
    },
    {
      id: "wisdomio",
      title: "WisdomIO",
      shortDescription: "A full-stack community platform where people share life experiences, unlock premium wisdom, and track platform metrics using Next.js and Express.",
      thumbnail: "/wisdomio.png",
      tags: ["Next.js 16", "Express.js", "MongoDB", "Better Auth", "Stripe", "Tailwind CSS"],
      demoUrl: "https://wisdomio-client.vercel.app",
      repoUrl: "https://github.com/rintia/wisdomio-client",
      overview: "WisdomIO is a full-stack community platform designed to inspire personal growth through storytelling. Users can create public or premium life lessons, interact through comments and saves, and purchase memberships via Stripe, while admins track analytics and monitor reported content.",
      challenges: "Securing role-based authorization across Express.js API endpoints and syncing membership statuses automatically in real-time via Stripe webhooks.",
      learnings: "Mastered Node/Express session validation with Better Auth, built complex MongoDB aggregation pipelines for platform analytics, and configured secure webhook signature verification.",
      roadmap: [
        "Implement advanced text search & lesson filters.",
        "Add user following networks and personalized reading history tracking.",
        "Incorporate AI-based lesson recommendations and native dark mode."
      ]
    },
    {
      id: "pawfect-match",
      title: "Pawfect Match",
      shortDescription: "A full-stack pet adoption web application where users can list pets for adoption, browse available pets, and send adoption requests.",
      thumbnail: "/pawfect.png",
      tags: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "DaisyUI", "Node.js"],
      demoUrl: "https://b13-a9-rintia.vercel.app",
      repoUrl: "https://github.com/rintia/b13-a9-rintia",
      overview: "Pawfect Match is a full-stack pet adoption platform designed to connect pet owners with prospective adopters. Users can seamlessly create, update, and delete pet listings, view detailed pet profile cards, and manage pending, approved, or rejected adoption requests through an interactive request manager.",
      challenges: "Implementing secure, user-scoped private listings and modal-driven adoption workflows while ensuring real-time request status updates without full-page reloads.",
      learnings: "Gained hands-on experience structuring RESTful API endpoints with Express and MongoDB, handling secure user authentication routes, and configuring responsive form controls with DaisyUI.",
      roadmap: [
        "Integrate social sign-ins and custom email alert notifications.",
        "Add advanced search filters by pet type, age, and location.",
        "Introduce a real-time messaging chat between listing owners and adopters."
      ]
    }
  ]
};
