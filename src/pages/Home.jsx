import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg"; // swap your own

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hey there, I’m Nicole!
        </motion.h1>
      </motion.section>

      {/* Intro / Bio */}
      <motion.section
        className="max-w-3xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4"
          custom={1}
          variants={fadeInUp}
        >
          A bit about me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          custom={2}
          variants={fadeInUp}
        >
          I’m a React developer with a passion for crafting beautiful,
          accessible web experiences. When I’m not coding, I’m exploring UX/UI
          trends, dabbling in illustration, or hunting down the perfect latte.
        </motion.p>
      </motion.section>

      {/* Quick Skills */}
      <motion.section
        className="bg-gray-100 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
          {[
            { label: "React", emoji: "⚛️" },
            { label: "Tailwind CSS", emoji: "💨" },
            { label: "Framer Motion", emoji: "🎞️" },
          ].map((skill, i) => (
            <motion.div
              key={skill.label}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              custom={i + 1}
              variants={fadeInUp}
            >
              <div className="text-4xl mb-2">{skill.emoji}</div>
              <h3 className="text-xl font-medium">{skill.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p className="text-lg mb-6" custom={1} variants={fadeInUp}>
          Curious to see what I’ve built? Check out my projects below!
        </motion.p>
        <motion.a
          href="/projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          custom={2}
          variants={fadeInUp}
        >
          View Projects
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Home;
