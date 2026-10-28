export const profile = {
  name: "Ujjwal Pokharel",
  title: "Software Engineer",
  pitch: "I build scalable web applications with React, Next.js and NestJS.",
  github: "https://github.com/ujjwalpokharel",
  linkedin: "https://www.linkedin.com/in/ujjwal-pokharel-7b3169213/",
  email: "ujjwalppokharel@gmail.com",
};

export const nav = ["About", "Experience", "Projects", "Education", "Skills"];

export const about = [
  "I'm a software engineer with 4+ years of experience in web development. I build scalable applications with React, Next.js and TypeScript on the frontend, and NestJS and PostgreSQL on the backend.",
  "Today I work as a software engineer at Care Kernel, a platform for the NDIS (National Disability Insurance Scheme), where I develop features, fix bugs and support the product end to end. I also led CareTorter, a medical documentation system that turns doctor-patient conversations into structured documents.",
  "Before that I spent two years at Channakya Software as a frontend developer, building HR and task management systems, running code reviews and mentoring junior developers. I'm now pursuing a master's degree in Informatics and Intelligent Systems Engineering. Outside of work I enjoy football, cricket, table soccer and table tennis.",
];

export const experience = [
  {
    date: "Sep 2024 — Present",
    title: "Software Engineer · Care Kernel",
    place: "North Sydney, Australia",
    body: "Full stack developer on the NDIS system: new features and enhancements, bug fixes and ongoing support, using React, Next.js and Ant Design on the frontend and Nest.js, PostgreSQL and Sequelize on the backend. Project lead for CareTorter, a medical documentation system with QA and Scribe review roles.",
    tags: ["React", "Next.js", "Ant Design", "NestJS", "PostgreSQL", "Sequelize", "TypeScript"],
  },
  {
    date: "Aug 2022 — May 2024",
    title: "Frontend Developer · Channakya Software",
    place: "Sinamangal, Kathmandu",
    body: "Built responsive interfaces for an HR management system and a task management system with Tailwind CSS, i18next localization and role-based security. Led code reviews, mentored junior developers and improved component reusability and performance.",
    tags: ["React", "TypeScript", "REST API", "Tailwind", "Nx", "i18next"],
  },
];

export const projects = [
  {
    title: "Care Kernel (NDIS System)",
    body: "Full stack platform for NDIS providers. I ship features, enhancements and fixes across the React frontend and the Nest.js and PostgreSQL backend.",
    tags: ["React", "Next.js", "Ant Design", "NestJS", "Sequelize"],
  },
  {
    title: "CareTorter",
    body: "Medical documentation system that records doctor-patient conversations and converts them into structured documents, with a role-based review and approval workflow for QA and Scribe roles. I led the project.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
  },
  {
    title: "Human Resources Management System",
    body: "Responsive HR interface built with Tailwind CSS, with ESLint and Prettier standards and i18next localization.",
    tags: ["React", "TypeScript", "Tailwind", "i18next"],
  },
  {
    title: "Task Management System",
    body: "Adaptable, fast-loading task management UI with role-based security for reliable user authentication.",
    tags: ["React", "TypeScript", "REST API", "Nx"],
  },
];

export const education = [
  {
    date: "May 2026 — Present",
    title: "M.Sc. Informatics and Intelligent Systems Engineering · Thapathali Campus, IOE, Tribhuvan University",
    place: "Kathmandu, Nepal",
  },
  {
    date: "Nov 2017 — Apr 2022",
    title: "B.E. Electronics and Communication Engineering · Pulchowk Campus, IOE, Tribhuvan University",
    place: "Lalitpur, Nepal",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["HTML5", "CSS", "Tailwind", "React", "Ant Design", "Next.js", "Nx"] },
  { group: "Backend & Database", items: ["NestJS", "PostgreSQL", "Sequelize", "JWT Authentication", "DBeaver"] },
  { group: "Cloud & DevOps", items: ["AWS SDK", "CI/CD basics", "Git & GitHub"] },
  { group: "Tools", items: ["Trello", "Jira", "Slack", "MS Teams", "Figma", "MS Office"] },
];
