import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // your photo

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => (
  <div className="space-y-16 px-4 py-12 max-w-4xl mx-auto">
    {/* Heading */}
    <motion.h1
      className="text-4xl font-bold text-center"
      initial="hidden"
      animate="visible"
      custom={0}
      variants={fadeIn}
    >
      About Me
    </motion.h1>

    {/* Top Section: Photo + Intro */}
    <motion.section
      className="flex flex-col md:flex-row items-center gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover shadow-lg"
        custom={1}
        variants={fadeIn}
      />
      <motion.div custom={2} variants={fadeIn}>
        <p className="text-lg text-gray-700 leading-relaxed">
          I’m Nicole, a frontend engineer and UX/UI enthusiast based in [Your
          City]. I build accessible, responsive web experiences with React and
          Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          In my spare time, I explore illustration, photography, and the latest
          in AR/VR interactions.
        </p>
      </motion.div>
    </motion.section>

    {/* Skills Grid */}
    <motion.section
      className="bg-gray-50 p-8 rounded-lg shadow-inner"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { skill: "React", level: "Intermediate" },
          { skill: "JavaScript", level: "Intermediate" },
          { skill: "HTML/CSS", level: "Advanced" },
          { skill: "Illustration", level: "Intermediate" },
          { skill: "UX/UI Design", level: "Advanced" },
          { skill: "Figma", level: "Intermediate" },
        ].map((item, i) => (
          <motion.div
            key={item.skill}
            className="bg-white p-4 rounded-lg text-center"
            custom={i + 1}
            variants={fadeIn}
          >
            <h3 className="text-xl font-medium">{item.skill}</h3>
            <p className="mt-2 text-gray-500">{item.level}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Timeline / Experience */}
    <motion.section
      className="space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold text-center">
        Experience & Education
      </h2>
      <div className="border-l-2 border-blue-300 pl-6">
        {[
          {
            date: "2025–Present",
            title: "Marketing Coordinator",
            desc: "ServPro",
          },
          {
            date: "2024",
            title: "Web Designer and Social Media Specialist",
            desc: "Disposall",
          },
          {
            date: "2021-2025",
            title: "B.A. Digital Media - Web Design and Interactive Media",
            desc: "University of Central Florida",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            className="mb-6 relative"
            custom={i + 1}
            variants={fadeIn}
          >
            <span className="absolute -left-3 top-1 bg-blue-300 w-6 h-6 rounded-full"></span>
            <p className="text-sm text-gray-500">{item.date}</p>
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </div>
);

export default About;
