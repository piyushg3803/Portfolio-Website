import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, ValidationError } from "@formspree/react";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import React from "react";

function Contact() {
  const [state, handleSubmit] = useForm("xqakonlp");

  if (state.succeeded) {
    alert("Your message has been delivered. Thank you!");
  }

  return (
    <>
      <div id="contact" className="mt-20 mx-10">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-center text-2xl font-extrabold mt-10 mb-4 bg-gradient-to-r from-[#fcb0f3] to-[#3d05dd] bg-clip-text text-transparent tracking-tight md:text-6xl"
        >
          send me a message!
        </motion.h1>
        <div className="max-w-3xl mx-auto p-2">
          <motion.h2
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-md lg:text-2xl text-center font-semibold text-gray-400 mb-4"
          >
            Got a question or proposal, or just want{" "}
            <br className="hidden lg:block" /> to say hello? Go ahead.
          </motion.h2>
          <motion.form
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full bg-transparent text-white p-3 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 transition-border duration-200"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="w-full bg-transparent text-white p-3 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 transition-border duration-200"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-transparent text-white p-3 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 transition-border duration-200"
              rows="5"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-56 p-3 bg-gradient-to-r from-[#ea98da] to-[#5b6cf9] text-black rounded-3xl hover:opacity-90 transition-opacity duration-200"
              disabled={state.submitting}
            >
              Send Message
            </motion.button>

            <h1 className="text-white text-xl">Or connect through</h1>
            <div className="text-white text-3xl flex justify-left">
              <a
                href="https://www.linkedin.com/in/piyush-goswami-b1aa66253"
                aria-label="LinkedIn Profile"
                className="mx-3"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.instagram.com/piyush_goswami003"
                aria-label="Instagram Profile"
                className="mx-3"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/piyushg3803"
                aria-label="GitHub Profile"
                className="mx-3"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default Contact;
