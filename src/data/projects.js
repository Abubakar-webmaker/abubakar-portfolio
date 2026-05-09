import blogImage from "../assets/blog.png";
import chateImage from "../assets/chate.png";

const projects = [
  {
    title: "MeBlog",
    desc: "A full-stack CMS blogging platform with rich post editor, user authentication, and admin dashboard — built with the MERN stack and deployed on Vercel.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: blogImage,
    live: "https://cms-frontend-three-kohl.vercel.app",
    github: "https://github.com/Abubakar-webmaker/cms-frontend",
    status: "live"
  },
  {
    title: "Chate App",
    desc: "A real-time chat application built with React, featuring a clean UI for seamless conversations.",
    tech: ["React", "TypeScript", "CSS"],
    image: chateImage,
    live: "https://chate-frontend-3sso.vercel.app",
    github: "https://github.com/Abubakar-webmaker/chate-frontend.git",
    status: "live"
  },
  {
    title: "Ecommerce Store",
    desc: "A modern ecommerce web app concept with product listings, cart flow, checkout-ready structure, and a clean shopping experience.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "coming-soon"
  },
  {
    title: "Agency Portfolio",
    desc: "A conversion-focused landing page built for agencies, featuring strong messaging, service cards, testimonials, and a clear contact path.",
    tech: ["React", "HTML", "CSS"],
    status: "coming-soon"
  }
];

export default projects;
