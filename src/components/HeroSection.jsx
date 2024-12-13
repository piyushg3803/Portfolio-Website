import React from "react";
import image from "./image/portfolio-image.webp";
import "../index.css";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

const container=(delay)=>({
  hidden: {y:-50, opacity: 0},
  visible: {y: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
});

function HeroSection() {
  return (
    <>
      {/* Large View */}
      <div className="hidden lg:flex lg:h-screen lg:justify-center items-center">
        <div
          className="text-white lg:text-5xl xl:text-6xl font-extrabold  leading-tight"
          id="heroSection"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3, 
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1>hi there... 👋</h1>
            <h1>
              i am{" "}
              <span className="bg-gradient-to-r from-[#ea98da] to-[#5b6cf9] bg-clip-text text-transparent tracking-tight">
                piyush
              </span>
            </h1>
            <h1>web developer</h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex justify-left font-normal"
          >
            <a href="#projects">
              {" "}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#ea98da] to-[#5b6cf9] w-52 text-black mt-5 m-2 p-2 text-lg lg:text-lg lg:p-4 xl:text-xl xl:p-5 rounded-full"
              >
                See My Work
              </motion.button>
            </a>

            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 mt-5 m-2 p-2 text-lg lg:text-lg lg:p-4 xl:text-xl xl:p-5 rounded-full"
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>
        </div>

        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="lg:w-[400px] xl:w-[450px]"
            src={image}
            alt="image"
          />
        </div>
      </div>

      {/* Mobile/Tab View */}

      <div className="h-screen flex flex-col items-center justify-center text-white lg:hidden">
        <div className="mb-5">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="w-64 md:w-[500px] mx-auto object-contain"
            src={image}
            alt="profile image"
          />
        </div>

        <div className="text-center text-2xl md:text-6xl font-extrabold leading-7">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1>hi there... 👋</h1>
            <h1>
              i am{" "}
              <span className="bg-gradient-to-r from-[#ea98da] to-[#5b6cf9] bg-clip-text text-transparent tracking-tight">
                piyush
              </span>
            </h1>
            <h1>web developer</h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mt-5 space-x-2 font-semibold"
          >
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#ea98da] to-[#5b6cf9] text-black px-3 py-3 md:px-10 md:py-4 text-sm md:text-xl rounded-full"
              >
                See My Work
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-2 py-3 md:px-10 md:py-4 text-sm md:text-xl rounded-full"
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
