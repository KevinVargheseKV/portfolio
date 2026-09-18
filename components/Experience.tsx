"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { experience } from "@/data/experience";

type ExperienceItem = (typeof experience)[number];

type ExperienceSlideProps = {
  item: ExperienceItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

export default function Experience() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="experience"
      className="experience-slider"
    >
      <div className="experience-sticky">

        {/* HEADER */}

        <div className="experience-header">
          <span>05 / EXPERIENCE</span>
        </div>

        {/* SLIDES */}

        <div className="experience-stage">
          {experience.map((item, index) => (
            <ExperienceSlide
              key={`${item.organization}-${item.role}`}
              item={item}
              index={index}
              total={experience.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ExperienceSlide({
  item,
  index,
  total,
  progress,
}: ExperienceSlideProps) {
  /*
   * Divide the complete scroll into equal sections.
   */

  const sectionSize = 1 / total;

  const start = index * sectionSize;
  const end = (index + 1) * sectionSize;

  /*
   * Slide enters from RIGHT
   * stays in CENTER
   * leaves to LEFT
   */

  const x = useTransform(
    progress,
    [
      start,
      start + sectionSize * 0.18,
      end - sectionSize * 0.18,
      end,
    ],
    [
      "110vw",
      "0vw",
      "0vw",
      "-110vw",
    ]
  );

  /*
   * Slight rotation while entering/leaving
   */

  const rotate = useTransform(
    progress,
    [
      start,
      start + sectionSize * 0.18,
      end - sectionSize * 0.18,
      end,
    ],
    [
      8,
      0,
      0,
      -8,
    ]
  );

  /*
   * Scale
   */

  const scale = useTransform(
    progress,
    [
      start,
      start + sectionSize * 0.18,
      end - sectionSize * 0.18,
      end,
    ],
    [
      0.88,
      1,
      1,
      0.88,
    ]
  );

  /*
   * Fade
   */

  const opacity = useTransform(
    progress,
    [
      start,
      start + sectionSize * 0.12,
      end - sectionSize * 0.12,
      end,
    ],
    [
      0,
      1,
      1,
      0,
    ]
  );

  return (
    <motion.article
      className="experience-slide"
      style={{
        x,
        rotate,
        scale,
        opacity,
      }}
    >
      {/* NUMBER */}

      <div className="experience-slide-number">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* CONTENT */}

      <div className="experience-slide-content">

        <span className="experience-slide-type">
          {item.type}
        </span>

        <h2>{item.role}</h2>

        <h3>{item.organization}</h3>

        <p>{item.description}</p>

        <div className="experience-slide-bottom">
          <span>{item.period}</span>

          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

      </div>

      {/* ARROW */}

      <div className="experience-slide-arrow">
        ↗
      </div>
    </motion.article>
  );
}