import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import BookWorld from "@/public/BookWorld.png";
import Portfolio from "@/public/Portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer Intern",
    company: "Target Technology",
    location: "Kolkata, West Bengal",
    description:
      "I leveraged React, Tailwind CSS, and JavaScript skills to craft visually appealing and responsive web interfaces.Collaborated closely with teams, translating designs into seamless user experiences. Optimized website performance for diverse platforms, enhancing project efficiency",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2023 — Jan 2024",
  },
  {
    title: "Full Stack Developer Intern",
    company: "INFOTRIXS",
    location: "Maharashtra",
    description:
      "Built a fitness tracker with a dynamic team using React and Tailwind CSS. Collaborated closely, honed problem-solving skills, and thrived in an agile environment.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 — August 2023",
  },
  {
    title: "Web Developer Intern",
    location: "Madhya Pradesh",
    description:
      "I had the opportunity to work on exciting projects, including the development of a Netflix clone using Tailwind CSS and JavaScript. I collaborated with a talented team to bring this project to life, applying my skills in web development to create an engaging and user-friendly platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 — Aug 2022",
  },
] as const;

export const schoolData = [
  {
    title: "Bachelor of Computer Applications",
    location: "Kolkata, West Bengal",
    description:
      "Having graduated from Techno India Kolkata, with a BCA degree, I possess a solid foundation in technology and adept problem-solving skills, ready to contribute to the dynamic world of computer applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2024",
  },
  {
    title: "Senior Secondary School",
    location: "Asansol, West Bengal",
    description:
      "I successfully completed my 11th and 12th grades at D.A.V. Public School, building a solid academic foundation for my future endeavors",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Secondary School",
    location: "Asansol, West Bengal",
    description:
      "I completed my 1st and 10th grades, laying the educational groundwork at D.A.V. Public School, establishing a strong academic foundation for future pursuits.",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "BookWorld",
    description:
      " A seamlessly designed web platform powered by Firebase, ReactJS, and Tailwind CSS, where technology meets literature in style. ",
    tags: ["React", "Firebase", "Tailwind"],
    githubUrl: "https://github.com/Atanu0341/Book-Store",
    liveUrl: "https://book-store-lyart-chi.vercel.app/",
    imageUrl: BookWorld,
  },
  {
    title: "Portfolio",
    description:
      "A digital canvas reflecting my journey in web development, blending design finesse and coding prowess. ",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    githubUrl: "https://github.com/Atanu0341/portfolio-2",
    liveUrl: "https://atanumajumder.vercel.app/",
    imageUrl: Portfolio,
  },
  // {
  //   title: "Contact Book",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js"],
  //   githubUrl: "https://github.com/Atanu0341/portfolio-2",
  //   liveUrl: "https://atanumajumder.vercel.app/",
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Python",
  "Framer Motion",
] as const;