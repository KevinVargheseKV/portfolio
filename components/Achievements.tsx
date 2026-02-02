"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">

        {/* heading */}
        <div className="mb-14">
          <p className="text-gray-400 mb-2">Learning & Recognition</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Achievements
          </h2>
        </div>

        {/* achievement cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/60 backdrop-blur border border-white/10 rounded-xl p-6 text-gray-300 hover:border-white/30 transition"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
