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
      <main className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 bg-gradient-to-br from-black via-zinc-900 to-black">

        {/* STAR / PARTICLE DOTS */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06]" />

        {/* GLOW BLOBS */}
        <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-indigo-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-cyan-400/10 blur-[140px] rounded-full" />

        {/* FLOATING TECH LINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />

        <div className="relative max-w-5xl w-full grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
              Kevin Varghese
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-400">
              AI & ML Engineer • LLMs • Robotics
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/KevinVargheseKV"
                target="_blank"
                className="text-white text-2xl hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kevin-varghese-063967340/"
                target="_blank"
                className="text-white text-2xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: PHOTO */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-[280px] md:w-[340px] h-[400px] md:h-[480px] mx-auto"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 blur-xl" />
            <Image
              src="/kevin-1.jpg"
              alt="Kevin Varghese"
              fill
              priority
              className="object-cover rounded-xl relative"
            />
          </motion.div>

        </div>
      </main>

      {/* ================= PROJECTS ================= */}
      <Projects />

      {/* ================= SKILLS ================= */}
      <Skills />

      {/* ================= ACHIEVEMENTS ================= */}
      <Achievements />
    </>
  );
}
