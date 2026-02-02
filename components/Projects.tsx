"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-gray-400 mb-3">What I build</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group bg-zinc-900/60 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:border-white/30 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
