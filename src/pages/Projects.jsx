import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const projects = [
  {
    title: "Dryft Local Discovery",
    desc: "A gamified travel app with NFC-enabled tokens to collect at local spots.",
    img: proj1,
    link: "https://github.com/nicotif/DryftFinal",
  },
  {
    title: "Menu App",
    desc: "Web app with speech-to-text and custom color themes for better readability.",
    img: proj2,
    link: "https://github.com/nicotif/Menu-App",
  },
  {
    title: "Quiz App",
    desc: "UI/UX overhaul of a waste-management rental site using responsive grids.",
    img: proj3,
    link: "https://codesandbox.io/p/sandbox/hhhcw8",
  },
  {
    title: "Expo To-do List App",
    desc: "AR-powered children’s story platform built with React Three Fiber.",
    img: proj4,
    link: "https://github.com/nicotif/todo-app",
  },
];

const Projects = () => (
  <div className="px-4 py-12 max-w-6xl mx-auto space-y-12">
    <motion.h1
      className="text-4xl font-bold text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Featured Projects
    </motion.h1>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
          custom={i}
          variants={cardVariants}
        >
          <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 underline"
            >
              View Code
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Optional: Filter / Category Buttons */}
    <motion.div
      className="flex justify-center space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {["All", "Mobile", "Web", "AR/VR"].map((category) => (
        <button
          key={category}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          {category}
        </button>
      ))}
    </motion.div>
  </div>
);

export default Projects;
