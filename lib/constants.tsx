// NOTE: Imports
import bgTextures from "@/public/images/bg-textures.webp";
import star from "@/public/images/star.png";
import zap from "@/public/images/zap.png";
import about1 from "@/public/images/about-1.jpg";
import about2 from "@/public/images/about-2.webp";
import about3 from "@/public/images/about-3.webp";
import about4 from "@/public/images/about-4.webp";
import figma from "@/public/images/figma.webp";
import framer from "@/public/images/framer.webp";
import typescript from "@/public/images/typescript.webp";
import next from "@/public/images/next.webp";
import tailwind from "@/public/images/tailwind.png";
import mongo from "@/public/images/mongo.png";
import express from "@/public/images/express.png";
import process1 from "@/public/images/process-1.jpg";
import process2 from "@/public/images/process-2.webp";
import bedrock from "@/public/images/projects/bedrock.png";
import threads from "@/public/images/projects/threads.png";
import miro from "@/public/images/projects/miro.png";
import uniSolver from "@/public/images/projects/uni-solver.png";
import gemini from "@/public/images/projects/gemini.png";

// NOTE: Assets
export {
  star,
  zap,
  bgTextures,
  about1,
  about2,
  about3,
  about4,
  figma,
  framer,
  typescript,
  next,
  tailwind,
  mongo,
  express,
  process1,
  process2,
};

// NOTE: Lists
export const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
];

export const socialLinks = [
  {
    label: "GitHub",
    link: "https://github.com/AbdulrahmanSE2003",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/abdulrahman-saad-hassan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    link: "https://instagram.com/username",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Email",
    link: "mailto:abdulrahman.saad2303@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];
export const stack = [
  {
    image: next,
    name: "Next.js",
    description:
      "My primary framework for building fast, production-ready web apps — SSR, App Router, and seamless full-stack integration.",
  },
  {
    image: typescript,
    name: "TypeScript",
    description:
      "How I write JavaScript — typed, predictable, and easier to scale across any codebase.",
  },
  {
    image: express,
    name: "Node.js & Express",
    description:
      "My backend foundation — building REST APIs, handling auth, and connecting everything to the database layer.",
  },
  {
    image: mongo,
    name: "MongoDB",
    description:
      "My database of choice for flexible, document-based data modeling with Mongoose on top.",
  },
  {
    image: tailwind,
    name: "Tailwind CSS",
    description:
      "My go-to for styling — utility-first, consistent, and pairs perfectly with component-driven architecture.",
  },
  {
    image: figma,
    name: "Figma",
    description:
      "Where I think before I build — wireframing, prototyping, and aligning design decisions before touching code.",
  },
  {
    image: framer,
    name: "Framer Motion",
    description:
      "Where interactions come alive — smooth animations and micro-interactions that make interfaces feel intentional.",
  },
];

export const experiences = [
  {
    role: "Program Coordinator",
    company: "Eyouth",
    duration: "May 2026 – Present · Part-time",
    description:
      "Coordinating program operations and bridging communication between teams to support the delivery of youth training and development initiatives.",
  },
  {
    role: "Co-founder & Lead Frontend",
    company: "Texon Startup",
    duration: "Oct 2025 – Present · Part-time",
    description:
      "Architected the frontend with Next.js App Router and TypeScript. Built a reusable component library and led a 3-dev Agile team.",
  },
  {
    role: "Frontend Mentor",
    company: "GDG on Campus",
    duration: "Jan 2025 – Apr 2025",
    description:
      "Mentoring 15+ students in React.js, state management, and responsive design.",
  },
];

export const steps = [
  {
    id: "01",
    title: "Understand & Plan",
    desc: "I start by understanding the problem, the users, and the goals — then map out a clear technical approach before writing a single line of code.",
    bg: "bg-neutral-900",
    span: "md:col-span-1",
  },
  { image: process1, span: "md:col-span-1" },
  {
    id: "02",
    title: "Design & Architect",
    desc: "I think through the UI and system architecture together — component structure, data flow, and interactions.",
    bg: "bg-neutral-900",
    span: "md:col-span-1",
  },
  { image: process2, span: "md:col-span-1" },
  {
    id: "03",
    title: "Build & Iterate",
    desc: "I build in focused cycles — shipping working features, gathering feedback, and refining.",
    bg: "bg-foreground",
    text: "text-background",
    span: "md:col-span-1 md:col-span-2",
  },
  {
    id: "04",
    title: "Optimize & Polish",
    desc: "Performance, accessibility, and micro-interactions — the details that separate a good product from a great one.",
    bg: "bg-neutral-900 ",
    span: "md:col-span-2",
  },

  {
    id: "05",
    title: "Ship & Support",
    desc: "Clean deployment, documentation, and ongoing maintenance.",
    bg: "bg-neutral-900",
    span: "md:col-span-1",
  },
];

export const projects = [
  {
    title: "Bedrock",
    description:
      "Minimalist task manager with Kanban, habit tracking, and Google Tasks sync.",
    tech: ["Next.js 16", "Supabase", "Shadcn", "Tailwind"],
    repo: "https://github.com/AbdulrahmanSE2003/Bedrock",
    demo: "https://bedrock-ysgz.vercel.app/",
    image: bedrock,
  },
  {
    title: "Threads-flow",
    description:
      "Full-stack social platform with real-time feeds and nested threading architecture.",
    tech: ["Next.js 16", "Prisma", "Neon PostgreSQL", "Cloudinary"],
    repo: "https://github.com/AbdulrahmanSE2003/threads-flow",
    demo: "https://threads-flow.vercel.app/",
    image: threads,
  },
  {
    title: "Uni-Solver",
    description:
      "AI-powered assignment helper that processes PDFs and generates structured solutions.",
    tech: ["Next.js 16", "Tailwind", "Google Gemini API", "AI"],
    repo: "https://github.com/AbdulrahmanSE2003/uni-solver",
    demo: "https://uni-solver.vercel.app/",
    image: uniSolver,
  },
  {
    title: "Miro Clone",
    description:
      "Real-time collaborative whiteboard featuring infinite canvas and multi-user cursors.",
    tech: ["Next.js 16", "Clerk", "Liveblocks", "Convex"],
    repo: "https://github.com/AbdulrahmanSE2003/miro-clone",
    demo: "https://miro-clone-five.vercel.app/",
    image: miro,
  },
  {
    title: "Gemini Clone",
    description:
      "A functional, responsive clone of the Gemini AI chat interface.",
    tech: ["TypeScript", "Next.js"],
    repo: "https://github.com/AbdulrahmanSE2003/gemini-clone",
    demo: "https://gemini-clone-eight-sooty.vercel.app/",
    image: gemini,
  },
];

import { Flame, Layers, Sparkles, Terminal } from "lucide-react";

export const testimonials = [
  {
    name: "Abdullah Fathallah",
    role: "Backend Engineer",
    quote:
      "A highly professional frontend engineer. His code is clean, production-ready, and meticulously polished.",
    initial: <Terminal className="size-18 stroke-[1.5px]  text-muted" />,
  },
  {
    name: "Mahmoud Harraz",
    role: "CEO & Founder",
    company: "Edmen Co",
    quote:
      "He executed our product vision flawlessly and delivered ahead of schedule. Exceptional speed without sacrificing quality.",
    initial: <Sparkles className="size-18 stroke-[1.5px]  text-muted" />,
  },
  {
    name: "Ramez Khaled",
    role: "Co-Founder & Frontend Engineer",
    company: "Texon",
    quote:
      "Incredible technical execution and rapid turnaround. He consistently bridges the gap between complex logic and seamless UI.",
    initial: <Layers className="size-18 stroke-[1.5px]  text-muted" />,
  },
  {
    name: "Dr. Salma Mohammed",
    role: "Founder Ashiaa Store",
    company: "Ashiaa Online Store",
    quote:
      "Translated complex specifications into pixel-perfect, highly responsive interfaces on the first attempt. Brilliant execution.",
    initial: <Flame className="size-18 stroke-[1.5px] text-muted" />,
  },
];
