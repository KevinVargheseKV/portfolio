export type Project = {
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Adaptive AI-Powered Wearable Orthosis",
    shortTitle: "Adaptive Orthosis",
    description:
      "An AI-driven rehabilitation orthosis that analyzes gait and movement patterns using wearable IMU sensors and machine learning to adapt rehabilitation assistance according to recovery.",
    category: "AI × ROBOTICS × HEALTHCARE",
    technologies: [
      "Python",
      "Machine Learning",
      "CNN-LSTM",
      "BNO085",
      "TensorFlow",
      "Robotics",
    ],
    github: "",
    featured: true,
  },

  {
    title: "VIRO",
    shortTitle: "VIRO",
    description:
      "Machine learning based prediction of human-virus protein interactions using amino acid composition and dipeptide sequence features with a Random Forest classifier.",
    category: "AI × BIOINFORMATICS",
    technologies: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Bioinformatics",
      "UniProt",
      "PHISTO",
    ],
    github: "",
    featured: true,
  },

  {
    title: "NeoDoc",
    shortTitle: "NeoDoc",
    description:
      "A generative AI application using retrieval augmented generation to provide contextual responses from a specialized knowledge base.",
    category: "GENERATIVE AI × RAG",
    technologies: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Gemini",
      "RAG",
      "Gradio",
    ],
    github: "https://github.com/KevinVargheseKV/NeoDoc",
    featured: true,
  },

  {
    title: "CalmMind",
    shortTitle: "CalmMind",
    description:
      "An AI-powered application focused on providing interactive support and useful resources through conversational artificial intelligence.",
    category: "GENERATIVE AI",
    technologies: [
      "Python",
      "AI",
      "LLM",
      "NLP",
    ],
    github: "https://github.com/KevinVargheseKV/CalmMind",
    featured: false,
  },

  {
    title: "MoodBeats",
    shortTitle: "MoodBeats",
    description:
      "An intelligent application combining mood recognition with personalized music experiences.",
    category: "AI × MUSIC",
    technologies: [
      "Python",
      "Machine Learning",
      "Computer Vision",
    ],
    github: "https://github.com/KevinVargheseKV/MoodBeats",
    featured: false,
  },

  {
    title: "Gameplan",
    shortTitle: "Gameplan",
    description:
      "An AI-focused project exploring intelligent planning and decision-making.",
    category: "AI",
    technologies: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    github: "https://github.com/KevinVargheseKV/Gameplan",
    featured: false,
  },

  {
    title: "LLLM Test",
    shortTitle: "LLLM Test",
    description:
      "Experiments and implementations exploring large language model based applications.",
    category: "LLM",
    technologies: [
      "Python",
      "LLMs",
      "Generative AI",
    ],
    github: "https://github.com/KevinVargheseKV/lllm-test",
    featured: false,
  },
];