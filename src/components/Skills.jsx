import React, { useState } from "react";
import html from "./image/html-logo.webp";
import css from "./image/css-logo.webp";
import javaScript from "./image/js-logo.webp";
import tailwind from "./image/tailwind_logo.webp";
import react from "./image/react-logo.webp";
import bootstrap from "./image/bootstrap-logo.webp";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: html,
    alt: "HTML Logo",
  },
  {
    id: 2,
    src: css,
    alt: "CSS Logo",
  },
  {
    id: 3,
    src: javaScript,
    alt: "JavaScript Logo",
  },
  {
    id: 4,
    src: react,
    alt: "React Logo",
  },
  {
    id: 5,
    src: tailwind,
    alt: "Tailwind Logo",
  },
  {
    id: 6,
    src: bootstrap,
    alt: "Bootstrap Logo",
  },
];

function Skills() {
  return (
    <>
      <div className="mt-20 mx-28">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-center text-3xl font-extrabold my-10 bg-gradient-to-r from-[#fcb0f3] to-[#3d05dd] bg-clip-text text-transparent tracking-tight md:text-6xl"
        >
          skills
        </motion.h1>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <Grid container spacing={2} justifyContent={"center"}>
            {images.map((image) => (
              <Grid item xs={6} sm={4} lg={2} key={image.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="border-2 p-5 border-gray-500 rounded-xl h-30"
                >
                  <img src={image.src} alt={image.alt} className="w-20" />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
