import React from "react";
import ecom from "./image/ecom-project.png";
import password from "./image/password-gen.png";
import todo from "./image/todo-list.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const project = [
  {
    id: 1,
    img: ecom,
    title: "Ecommerce Website",
    link: "https://ecomsitereact.netlify.app/",
    descritption:
      "An e-commerce website designed to provide a seamless shopping experience with core functionalities such as browsing products, viewing detailed product pages, and adding items to the cart for easy checkout.",
  },
  {
    id: 2,
    img: password,
    title: "Password Generator",
    link: "https://generatepasskey.netlify.app/",
    descritption:
      "A password generator website that helps users create secure, random passwords with customizable options for length, complexity, and character types, ensuring enhanced online security.",
  },
  {
    id: 3,
    img: todo,
    title: "To-Do List",
    link: "https://our-tasklist.netlify.app/",
    descritption:
      "A user-friendly to-do list application designed to help users organize tasks efficiently. Features include adding and deleting tasks, with a clean interface for seamless task management.",
  },
];

function Projects() {
  return (
    <>
      <div id="projects" className="mt-20 mx-auto">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-center text-3xl font-extrabold my-10 bg-gradient-to-r from-[#fcb0f3] to-[#3d05dd] bg-clip-text text-transparent tracking-tight md:text-6xl"
        >
          projects
        </motion.h1>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
          className="mx-auto max-w-4xl"
        >
          {project.map((projects) => (
            <div
              key={project.id}
              className="block lg:flex text-white text-center lg:text-left"
            >
              <img
                src={projects.img}
                className="w-64 lg:w-80 mx-auto md:mx-auto rounded-xl m-5 md:m-10"
              />
              <div className="m-2 md:m-10">
                <a href={projects.link} target="_blank">
                  <h1 className="text-lg md:text-3xl lg:text-4xl font-semibold lg:m-2">
                    {projects.title}{" "}
                    <FontAwesomeIcon
                      icon={faLink}
                      className="text-gray-500 w-8 md:ms-2"
                    />{" "}
                  </h1>
                </a>
                <h1 className="hidden md:block lg:block md:text-sm lg:text-lg text-gray-400 font-light lg:m-2 mt-5">
                  {projects.descritption}
                </h1>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
