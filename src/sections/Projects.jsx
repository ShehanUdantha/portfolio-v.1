import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Netflix from "../assets/netflix.png";
import Salon from "../assets/salon.png";
import ToolTip from "../components/ToolTip";

const Projects = () => {
  return (
    <section
      className="py-[1rem] bg-white px-[20px] dark:bg-[#121212] md:px-[3rem]"
      id="projects"
    >
      <div className="flex flex-col h-full w-full pt-[3rem] pb-5 justify-center items-start md:items-center lg:pr-[3.5rem] lg:pl-[3rem] xl:py-[4.5rem] xl:px-[11.5rem]">
        <motion.div
          className="font-[600] w-full text-[36px] leading-[1.2] dark:text-white md:text-[34px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Projects
        </motion.div>

        <div className="w-full">
          {/* first project */}
          <div className="w-full pt-[4.5rem] flex flex-col">
            <div className="w-full px-[2rem]">
              {/* project name */}
              <motion.div
                className="text-[24px] font-semibold text-black/90 flex justify-center dark:text-white/90 md:justify-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                SalonLK
              </motion.div>
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full md:pt-2">
                {/* description area */}
                <div className="w-full md:pl-[2rem] md:mt-[1.5rem]">
                  <motion.div
                    className="bg-black/90 text-white text-[14px] p-[2rem] min-h-[200px] max-h-[270px] rounded-b-md backdrop-blur w-full overflow-hidden md:rounded-l-md md:rounded-br-none lg:w-full dark:text-black dark:bg-[#a7a7a8]"
                    initial={{ y: -15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                    }}
                  >
                    <p>
                      SalonLK is a salon appointment booking website. that
                      allows customer to book a wide range of services and make
                      the appointment. This is our university group project. I
                      have done the front-end part of this website.
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
                  <div className="flex justify-center gap-5 px-[2rem] w-full py-[1rem] text-[14px] text-black dark:text-[#a7a7a8] md:justify-start">
                    <motion.div
                      initial={{ x: -15, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.9,
                      }}
                    >
                      <ToolTip message={"view source code"}>
                        <a
                          className="flex gap-1 w-full items-center cursor-pointer hover:opacity-50 transition duration-500 justify-center md:justify-start md:w-auto"
                          href="https://github.com/ToshaEX/SALOnLK"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>Code</p>
                          <FaGithub className="h-[21px] w-[21px]" />
                        </a>
                      </ToolTip>
                    </motion.div>
                    <motion.div
                      initial={{ x: -15, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1,
                      }}
                    >
                      <ToolTip message={"view live demo"}>
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
                      </ToolTip>
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* demo image section */}
              <motion.div
                className="w-full h-[280px] rounded-t-lg overflow-hidden mt-[2rem] shadow-md md:rounded-lg md:mt-2 lg:mt-0"
                initial={{ y: -15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                }}
              >
                <img
                  src={Salon}
                  alt="netflix"
                  className="transition-all duration-2000 hover:-translate-y-[65%] md:hover:-translate-y-[73%]"
                />
              </motion.div>
            </div>
          </div>

          {/* second project */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
