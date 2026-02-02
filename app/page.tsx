"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <main className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Kevin Varghese
            </h1>

            {/* MOVING TEXT */}
            <motion.p
              className="mt-3 text-lg md:text-xl text-gray-400 overflow-hidden whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              AI & ML Engineer · LLMs · Robotics · Developer
            </motion.p>

            {/* SOCIALS */}
            <div className="mt-5 flex gap-5 justify-center md:justify-start">
              <a
                href="https://github.com/KevinVargheseKV"
                target="_blank"
                className="text-white text-2xl hover:text-gray-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kevin-varghese-063967340/"
                target="_blank"
                className="text-white text-2xl hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT: PHOTO */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[260px] md:w-[320px] h-[380px] md:h-[460px] mx-auto"
          >
            <Image
              src="/kevin-1.jpg"
              alt="Kevin Varghese"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </main>

      {/* ================= ABOUT / SUMMARY ================= */}
      <section className="bg-black text-white px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I am an AI & Machine Learning Engineering student with a strong
            interest in building intelligent, real-world systems. My work
            focuses on areas such as Large Language Models, Retrieval-Augmented
            Generation, and applied machine learning.
            <br /><br />
            I enjoy transforming complex ideas into practical solutions,
            particularly in domains like healthcare, sustainability, and
            automation. I actively work on AI-ML projects, explore
            emerging AI technologies, and contribute to technical communities
            through IEEE and robotics initiatives.
          </p>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <Projects />

      {/* ================= SKILLS ================= */}
      <Skills />

      {/* ================= ACHIEVEMENTS ================= */}
      <Achievements />
    </>
  );
}
