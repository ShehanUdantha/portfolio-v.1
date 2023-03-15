import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Netflix from "../assets/netflix.png";
import Salon from "../assets/salon.png";

const Projects = () => {
  return (
    <div
      className="flex flex-col py-[3rem] px-[20px] w-full bg-white dark:bg-[#121212] md:py-[4.5rem] md:px-[14.5rem]"
      id="projects"
    >
      <motion.div
        className="font-[600] text-[36px] leading-[1.2] w-full dark:text-white md:text-[34px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        view={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Projects
      </motion.div>

      {/* first project */}
      <div className="w-full pt-[5rem] flex flex-col">
        <div className="w-full px-[2rem]">
          {/* project name */}
          <motion.div
            className="text-[24px] font-semibold text-black/90 flex justify-center dark:text-white/90 md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            view={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            SalonLK
          </motion.div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="w-full md:pt-2">
            {/* description area */}
            <div className="w-full md:pl-[2rem] md:mt-[1.5rem]">
              <motion.div
                className="bg-black/90 text-white text-[14px] p-[2rem] rounded-b-md backdrop-blur w-full md:rounded-l-md md:rounded-br-none md:w-[450px] dark:text-black dark:bg-[#a7a7a8]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                view={{ once: true, amount: 0.5 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p>
                  SalonLK is a salon appointment booking website. that allows
                  customer to book a wide range of services and make the
                  appointment. This is our university group project. I have done
                  the front-end part of this website.
                </p>
                <div className="flex text-white/80 items-center justify-start pt-3 gap-3 w-full">
                  <div className="flex items-center gap-1">
                    <div className="w-[6px] h-[6px] rounded-r-full bg-white" />
                    React Js
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[6px] h-[6px] rounded-r-full bg-white" />
                    Tailwind CSS
                  </div>
                </div>
              </motion.div>
            </div>
            {/* link section */}
            <div className="w-full px-[2rem] flex justify-center md:justify-start">
              <motion.div
                className="flex gap-5 px-[2rem] w-full py-[1rem] text-[14px] text-black dark:text-[#a7a7a8]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                view={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <a
                  className="flex gap-1 w-full items-center cursor-pointer hover:opacity-50 transition duration-500 justify-center md:justify-start md:w-auto"
                  href="https://github.com/ToshaEX/SALOnLK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Code</p>
                  <FaGithub className="h-[21px] w-[21px]" />
                </a>
                <a
                  className="flex gap-1 w-full items-center cursor-pointer hover:opacity-50 transition duration-500 justify-center md:justify-start md:w-auto"
                  href="http://128.199.83.236:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Online</p>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
          {/* demo image section */}
          <motion.div
            className="w-full h-[280px] rounded-t-lg overflow-hidden mt-[2rem] shadow-md md:rounded-lg md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            view={{ once: true, amount: 0.5 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <img
              src={Salon}
              alt="netflix"
              className="transition-all duration-1000 hover:-translate-y-[65%] md:hover:-translate-y-[70%]"
            />
          </motion.div>
        </div>
      </div>

      {/* second project */}
      <div className="w-full pt-[4rem] flex flex-col">
        <div className="w-full px-[2rem] mt-[0.5rem]">
          {/* project name */}
          <motion.div
            className="text-[24px] font-semibold text-black/90 flex justify-center dark:text-white/90 md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            view={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Netflix Clone
          </motion.div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row">
          {/* description area */}
          <div className="w-full md:pt-2">
            <div className="w-full md:pl-[2rem] md:mt-[1.5rem]">
              <motion.div
                className="bg-black/90 text-white text-[14px] p-[2rem] rounded-b-md backdrop-blur w-full md:rounded-l-md md:rounded-br-none md:w-[450px] dark:text-black dark:bg-[#a7a7a8]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                view={{ once: true, amount: 0.5 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p>
                  Netflix is an extremely popular streaming service. So, I clone
                  the front-end of that website. that includes Homepage, Sign-in
                  and Sign-up pages.
                </p>
                <div className="flex text-white/80 items-center justify-start pt-3 gap-3 w-full">
                  <div className="flex items-center gap-1">
                    <div className="w-[6px] h-[6px] rounded-r-full bg-white" />
                    React Js
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[6px] h-[6px] rounded-r-full bg-white" />
                    Tailwind CSS
                  </div>
                </div>
              </motion.div>
            </div>
            {/* link area */}
            <div className="w-full px-[2rem] flex justify-center md:justify-start ">
              <motion.div
                className="flex gap-5 px-[2rem] py-[1rem] w-full text-[14px] text-black dark:text-[#a7a7a8]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                view={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <a
                  className="flex w-full gap-1 items-center cursor-pointer hover:opacity-50 transition duration-500 justify-center md:justify-start md:w-auto"
                  href="https://github.com/ShehanUdantha/netflix-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Code</p>
                  <FaGithub className="h-[21px] w-[21px]" />
                </a>
              </motion.div>
            </div>
          </div>
          {/* demo image section */}
          <motion.div
            className="w-full h-[280px] rounded-t-lg overflow-hidden mt-[2rem] shadow-md md:rounded-lg md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            view={{ once: true, amount: 0.5 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <img
              src={Netflix}
              alt="netflix"
              className="transition-all duration-1000 hover:-translate-y-[70%] md:hover:-translate-y-[75%]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
