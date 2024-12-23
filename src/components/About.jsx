import React from "react";
import { motion, transform } from "framer-motion";
import { duration } from "@mui/material";

const About = () => {
  return (
    <>
      {/*For large screens  */}
      <div className="hidden lg:block pt-16 justify-around items-center px-32">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
          className="bg-gradient-to-r from-[#fcb0f3] to-[#3d05dd] bg-clip-text text-transparent tracking-tight text-center text-5xl px-3 font-extrabold"
        >
          about me
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-white px-48 pt-12 text-left text-xl leading-8"
        >
          I am Piyush Goswami a Freelancer Web Developer. Currently, I am a
          Computer Science Engineering student in Surat, India.  With a focus on creating modern, responsive, and scalable frontend websites, I aim to deliver seamless user experiences and robust web solutions to my clients.
          As a budding developer, I am continually exploring new technologies and refining my
          skills. My commitment to writing clean, efficient, and maintainable code
          ensures that every project I work on meets the highest standards.
        </motion.div>
      </div>

      {/* for Mobile screens */}

      <div className="mt-10 lg:hidden">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-center text-3xl font-extrabold bg-gradient-to-r from-[#ea98da] to-[#5b6cf9] bg-clip-text text-transparent tracking-tight md:text-6xl"
        >
          about me
        </motion.div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-white p-10 md:text-3xl md:px-20 md:leading-10"
        >
          I am Piyush Goswami a Freelancer Web Developer. Currently, I am a
          Computer Science Engineering in Surat, India. As a budding developer
          my aim is to craft solid and scalable frontend website for my clients.
        </motion.div>
      </div>
    </>
  );
};

export default About;
