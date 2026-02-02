"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">

        {/* heading */}
        <div className="mb-14">
          <p className="text-gray-400 mb-2">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Technical Skills
          </h2>
        </div>

        {/* skill cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900/60 backdrop-blur border border-white/10 rounded-xl p-6 text-gray-300 hover:border-white/30 transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
