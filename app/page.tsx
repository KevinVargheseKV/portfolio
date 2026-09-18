"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  ["01", "STUDENT REPRESENTATIVE", "IEEE RAS KERALA CHAPTER", "2026"],
  ["02", "CHAIR", "IEEE RAS STUDENT BRANCH CHAPTER · SCT", "2026"],
  ["03", "AI / ML INTERN", "SAFCURL", "2026"],
  ["04", "COMPUTER INSTRUCTOR", "TEACHING · MENTORING · TECHNICAL TRAINING", "2023"],
];

const buildItems = [
  ["01", "ARTIFICIAL INTELLIGENCE", "Intelligent systems that turn data, models and ideas into useful products."],
  ["02", "GENERATIVE AI", "LLMs, RAG pipelines and knowledge-grounded interfaces."],
  ["03", "ROBOTICS", "Embodied intelligence where software meets sensors, machines and motion."],
  ["04", "COMPUTER VISION", "Perception systems for recognition, understanding and real-world interaction."],
  ["05", "MACHINE LEARNING", "Prediction, classification and temporal modelling from real-world data."],
  ["06", "HEALTHCARE AI", "Assistive and rehabilitation systems built around people and physical outcomes."],
];

const projects = [
  {
    number: "01",
    type: "AI × ROBOTICS",
    title: "ADAPTIVE REHABILITATION ORTHOSIS",
    description: "Wearable sensing, gait analysis and machine learning for adaptive robotic rehabilitation.",
    github: "",
    tag: "IN DEVELOPMENT",
  },
  {
    number: "02",
    type: "ASSISTIVE AI",
    title: "SAATHI",
    description: "Assistive communication using gesture recognition, facial emotion understanding and speech.",
    github: "https://github.com/KevinVargheseKV/saathi",
    tag: "GITHUB",
  },
  {
    number: "03",
    type: "ML × BIOINFORMATICS",
    title: "VIRO",
    description: "Machine learning based prediction of human–virus protein interactions.",
    github: "https://github.com/KevinVargheseKV/viro",
    tag: "GITHUB",
  },
  {
    number: "04",
    type: "GENERATIVE AI × RAG",
    title: "NEODOC",
    description: "A knowledge-grounded conversational AI system using retrieval augmented generation.",
    github: "https://github.com/KevinVargheseKV/neodoc",
    tag: "GITHUB",
  },
  {
    number: "05",
    type: "GENERATIVE AI × RAG",
    title: "CALMMIND",
    description: "A knowledge-grounded conversational AI system for mental health support using retrieval augmented generation.",
    github: "https://github.com/KevinVargheseKV/calmmind",
    tag: "GITHUB",
  },
];

const skills = [
  "PYTHON", "TENSORFLOW", "PYTORCH", "LANGCHAIN", "LLMs", "RAG",
  "COMPUTER VISION", "ROBOTICS", "AI / ML", "GENERATIVE AI",
];

function SocialIcon({ type }: { type: "linkedin" | "github" }) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.76-2-5.5-4.67-5.5-2.15 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.5v-6.19c0-1.63.31-3.2 2.33-3.2 1.99 0 2.01 1.86 2.01 3.31V21H21v-7.15Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.99c.85 0 1.7.12 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.69-4.58 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2.2Z" />
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".nav-item", { y: -18, opacity: 0, stagger: 0.04, duration: 0.65 })
        .from(".hero-copy > *", { y: 45, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.25")
        .from(imageRef.current, { x: 90, opacity: 0, rotate: 5, scale: .94, duration: 1.15 }, "-=0.65");

      gsap.to(".hero-copy", {
        y: -90,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(imageRef.current, {
        y: 80,
        rotate: -2,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: .9,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-tile").forEach((tile, index) => {
        gsap.from(tile, {
          y: 65,
          opacity: 0,
          rotateX: index % 2 ? -5 : 5,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: tile, start: "top 92%", once: true },
        });
      });

      const cursor = cursorRef.current;
      if (cursor && window.matchMedia("(pointer: fine)").matches) {
        const moveCursor = (event: MouseEvent) => gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: .16, ease: "power2.out" });
        const grow = () => gsap.to(cursor, { scale: 2.4, opacity: .9, duration: .2 });
        const shrink = () => gsap.to(cursor, { scale: 1, opacity: .6, duration: .2 });
        window.addEventListener("mousemove", moveCursor);
        document.querySelectorAll("a, .experience-card, .build-card, .project-tile").forEach((el) => {
          el.addEventListener("mouseenter", grow);
          el.addEventListener("mouseleave", shrink);
        });
        return () => {
          window.removeEventListener("mousemove", moveCursor);
          document.querySelectorAll("a, .experience-card, .build-card, .project-tile").forEach((el) => {
            el.removeEventListener("mouseenter", grow);
            el.removeEventListener("mouseleave", shrink);
          });
        };
      }
    });

    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  const experienceLoop = [...experience, ...experience];
  const buildLoop = [...buildItems, ...buildItems];
  const skillsLoop = [...skills, ...skills];

  return (
    <main id="top" className="site">
      <div ref={cursorRef} className="custom-cursor" />
      <div className="global-noise" />

      <nav className="navbar">
        <a href="#top" className="nav-logo nav-item">KEVIN VARGHESE<span>.</span></a>
        <div className="nav-links">
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#build" className="nav-item">What I Build</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
        <div className="nav-socials nav-item">
          <a href="https://www.linkedin.com/in/kevin-varghese-063967340/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a>
          <a href="https://github.com/KevinVargheseKV" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a>
        </div>
      </nav>

      <section ref={heroRef} className="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy">
          <div className="hero-eyebrow">AI &amp; MACHINE LEARNING ENGINEER /</div>
          <h1><span>KEVIN</span><span className="red">VARGHESE</span></h1>
          <p className="hero-statement">Turning ideas into systems at the intersection of <strong>AI, robotics &amp; real-world applications.</strong></p>
        </div>
        <div ref={imageRef} className="hero-portrait">
          <div className="portrait-frame">
            <img src="/kevin.jpeg" alt="Kevin Varghese" />
            <div className="portrait-corner portrait-corner-a" />
            <div className="portrait-corner portrait-corner-b" />
          </div>
          <div className="portrait-meta"><span>PORTRAIT / 01</span><span>AI · ML · ROBOTICS</span></div>
        </div>
        <div className="hero-footer"><span>THIRUVANANTHAPURAM / INDIA</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section id="experience" className="experience-section">
        <div className="journey-intro reveal">
          <div className="journey-number">01</div>
          <div className="journey-copy">
            <span>ABOUT / MY JOURNEY</span>
            <h2>TURNING IDEAS<br /><em>INTO SYSTEMS.</em></h2>
            <p>I build at the intersection of artificial intelligence, machine learning, robotics and real-world applications — learning by taking ideas from concept to working systems.</p>
          </div>
          <div className="journey-side">MY JOURNEY<br />ROLES / 2026</div>
        </div>

        <div className="experience-label"><span>MY EXPERIENCE</span><b>SELECTED ROLES / CONTINUOUS MOTION</b></div>
        <div className="experience-marquee">
          <div className="experience-track">
            {experienceLoop.map(([number, role, org, year], index) => (
              <article className="experience-card" key={`${number}-${index}`}>
                <div className="experience-top"><span>{number}</span><span>{year}</span></div>
                <div className="experience-body"><small>ROLE / {number}</small><h3>{role}</h3><p>{org}</p></div>
                <div className="experience-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="build" className="build-section">
        <div className="build-title reveal">
          <span>02 / CAPABILITIES</span>
          <h2>WHAT I<br /><em>BUILD.</em></h2>
          <p>Systems, interfaces and intelligent machines — moving continuously.</p>
        </div>
        <div className="build-stage">
          <div className="build-stage-grid" aria-hidden="true" />
          <div className="build-marquee">
            <div className="build-track">
              {buildLoop.map(([number, title, description], index) => (
                <article className="build-card" key={`${number}-${index}`}>
                  <div className="build-card-top"><span>{number}</span><span>CAPABILITY</span></div>
                  <div className="build-card-main"><h3>{title}</h3><p>{description}</p></div>
                  <div className="build-card-foot"><span>KEVIN / SYSTEM 0{number}</span><b>↗</b></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-title reveal">
          <span>03 / SELECTED WORK</span>
          <h2>MY <em>PROJECTS.</em></h2>
          <p>Four real systems. One continuous build process.</p>
        </div>
        <div className="project-board-wrap">
          <div className="project-board">
            <div className="board-core"><span>KEVIN</span><strong>PROJECTS</strong><small>AI / ML / ROBOTICS</small></div>
            {projects.map((project, index) => (
              <article className={`project-tile project-tile-${index + 1}`} key={project.number}>
                <div className="tile-top"><span>{project.number}</span><span>{project.tag}</span></div>
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>
                ) : <span className="tile-status">IN DEVELOPMENT</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section" aria-label="Skills and technologies">
        <div className="skills-heading"><span>TOOLS / SKILLS</span><p>THE STACK BEHIND THE SYSTEMS</p></div>
        <div className="skills-window"><div className="skills-track">
          {skillsLoop.map((skill, index) => <span className="skill-pill" key={`${skill}-${index}`}>{skill}<b>✦</b></span>)}
        </div></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-orbit orbit-a" />
        <div className="contact-orbit orbit-b" />
        <div className="contact-panel">
          <div className="contact-panel-top"><span>04 / CONTACT</span><span>LET&apos;S MAKE SOMETHING REAL</span></div>
          <div className="contact-main">
            <div><span className="contact-kicker">HAVE AN IDEA?</span><h2>LET&apos;S<br /><em>BUILD.</em></h2></div>
            <div className="contact-copy"><p>AI · ML · ROBOTICS · GENERATIVE AI</p><p className="contact-note">Open to building ambitious systems, experiments and products.</p><div className="contact-links"><a href="https://www.linkedin.com/in/kevin-varghese-063967340/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com/KevinVarghese" target="_blank" rel="noreferrer">GITHUB ↗</a></div></div>
          </div>
          <div className="contact-panel-bottom"><span>KEVIN VARGHESE</span><span>THIRUVANANTHAPURAM / INDIA</span><span>↗</span></div>
        </div>
      </section>

      <footer><span>KEVIN VARGHESE</span><span>TURNING IDEAS INTO SYSTEMS.</span><span>© 2026</span></footer>
    </main>
  );
}
