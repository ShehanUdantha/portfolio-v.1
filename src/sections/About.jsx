import React from "react";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

const About = () => {
  return (
    <div
      className="py-[1rem] bg-white px-[20px] dark:bg-[#121212] md:px-[3rem]"
      id="about"
    >
      <div className="flex flex-col h-full w-full pt-[3rem] pb-5 justify-center items-start md:items-center lg:py-[4.5rem] lg:px-[11.5rem]">
        <motion.div
          className="font-[600] w-full text-[36px] leading-[1.2] dark:text-white md:text-[34px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          view={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          About Me
        </motion.div>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="w-full">
            {/* image section */}
            <motion.div
              className="flex justify-center pt-[2.5rem] lg:pt-[4.5rem] lg:justify-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              view={{ once: true, amount: 0.5 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <img
                src={Profile}
                alt="profile"
                className="h-[280px] w-auto rounded-xl lg:h-[350px]"
              />
            </motion.div>
          </div>
          {/* description section */}
          <div className="w-full flex flex-col justify-center items-center lg:pl-[3rem]">
            <motion.div
              className="pt-[2.5rem] text-[16.8px] text-[#54565C] dark:text-white/70 lg:pt-[5rem]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              view={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              Hi, My name is Shehan Udantha, I'm a Software Engineering
              Undergraduate who loves front-end development and learn new
              technologies. I excel in designing and maintaining responsive
              websites that offer a smooth user experience😎.
            </motion.div>
            {/* download button section */}
            <motion.div
              className="pt-[1rem] w-full flex flex-col justify-start items-center lg:items-start"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              view={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <button className="flex items-center justify-center gap-1 h-[44px] w-[150px] text-[14px] rounded-md shadow-md bg-black text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/70 dark:bg-white/90 dark:text-black">
                Download CV{" "}
                <HiOutlineDocumentText className="h-[17px] w-[18px]" />
              </button>
            </motion.div>
            {/* tech stack section */}
            <motion.div
              className="w-full hidden justify-start font-[600] text-[22px] text-black dark:text-white/90 pt-[2.5rem] md:flex"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              view={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              Tech Stack |
            </motion.div>

            <div className="flex flex-col w-full animate-pulse text-black/80 pt-[3.5rem] dark:text-[#a7a7a8] md:pt-[0.9rem] md:flex-row md:justify-center lg:justify-start">
              <div className="flex w-full gap-9 justify-center items-center md:justify-start md:gap-7 md:w-auto">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  view={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  <FaHtml5 className="h-[29px] w-[29px] hover:opacity-80" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  view={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  <FaCss3Alt className="h-[29px] w-[29px] hover:opacity-80" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  view={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <SiJavascript className="h-[29px] w-[29px] hover:opacity-80" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  view={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                >
                  <FaReact className="h-[29px] w-[29px] hover:opacity-80" />
                </motion.div>
              </div>
              <div className="flex w-full gap-9 justify-center items-center pt-[1.5rem] md:gap-7 md:justify-start md:pt-0 md:pl-[27px] md:w-auto">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  view={{ once: true, amount: 0.5 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <SiTailwindcss className="h-[29px] w-[29px] hover:opacity-80" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  view={{ once: true, amount: 0.5 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  <FaGitAlt className="h-[30px] w-[30px] hover:opacity-80" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  view={{ once: true, amount: 0.5 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                >
                  <FiFigma className="h-[29px] w-[29px] hover:opacity-80" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
