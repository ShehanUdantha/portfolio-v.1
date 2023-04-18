import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Salon from "../assets/salon.png";
import MemoryGame from "../assets/memory-game.png";
import ToolTip from "../components/ToolTip";

const Projects = () => {
  const projectDetails = [
    {
      name: "SalonLK",
      description:
        "SalonLK is a salon website where customers can choose from a wide range of services and easily schedule their appointment. This website is the result of our university group project, and I have developed the front-end part of this website.",
      tools: ["React", "Tailwind CSS"],
      github: "https://github.com/ToshaEX/SALOnLK",
      demo: "http://143.198.210.185/",
      image: Salon,
      animation: true,
      style: "hover:-translate-y-[65%] lg:hover:-translate-y-[73.5%]",
    },
    {
      name: "Memory Game",
      description:
        "I created a simple memory game to practice my JavaScript skills. The player's task is to remember the box sequence and select a box in the correct ascending order.",
      tools: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ShehanUdantha/floating-memory-game",
      demo: "https://floating-memory-game.pages.dev/",
      image: MemoryGame,
      animation: false,
    },
  ];
  return (
    <section
      className="py-[1rem] bg-white px-[22px] dark:bg-[#121212] md:px-[3rem]"
      id="projects"
    >
      <div className="flex flex-col h-full w-full pt-[3rem] pb-5 justify-center items-start md:items-center lg:pr-[3.5rem] lg:pl-[3rem] xl:py-[4.5rem] xl:px-[9.3rem]">
        <motion.div
          className="font-[600] w-full text-[36px] leading-[1.2] dark:text-white mini:text-[28px] md:text-[34px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Projects
        </motion.div>

        {/* projects view section */}
        <div className="w-full">
          {projectDetails?.map((project, index) => {
            return (
              <div
                className="w-full pt-[4.5rem] flex flex-col mini:pt-[3rem]"
                key={index + 0.5}
              >
                <div className="w-full px-[2rem]">
                  {/* project name */}
                  <motion.div
                    className="text-[24px] font-semibold text-black/90 flex justify-center dark:text-white/90 mini:text-[22px] md:justify-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {project.name}
                  </motion.div>
                </div>
                <div className="w-full flex flex-col-reverse md:flex-row">
                  <div className="w-full md:pt-2">
                    {/* description area */}
                    <div className="w-full md:pl-[2rem] md:mt-[1.5rem]">
                      <motion.div
                        className="bg-black/90 text-white text-[14px] p-[2rem] min-h-[200px] max-h-[270px] rounded-b-md backdrop-blur w-full overflow-hidden dark:bg-[#1e1e1e] mini:text-[12px] mini:py-[1rem] md:rounded-l-md md:rounded-br-none lg:w-full"
                        initial={{ y: -15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.7,
                        }}
                      >
                        <p>{project.description}</p>
                        <div className="text-white/80 flex items-center justify-start pt-3 gap-3 w-full overflow-hidden">
                          {project.tools?.map((tool, index) => {
                            return (
                              <div
                                className="flex items-center gap-1"
                                key={index + 0.3}
                              >
                                <div className="w-[6px] h-[6px] rounded-r-full bg-white" />
                                {tool}
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                    {/* link section */}
                    <div className="w-full px-[2rem] flex justify-center md:justify-start">
                      <div className="flex justify-center gap-5 px-[2rem] w-full py-[1rem] text-[14px] text-black dark:text-[#a7a7a8] md:justify-start">
                        <motion.div
                          initial={{ x: -15, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.9,
                          }}
                        >
                          <ToolTip message={"view source code"}>
                            <a
                              className="flex gap-1 w-full items-center cursor-pointer hover:opacity-50 transition duration-500 justify-center md:justify-start md:w-auto"
                              href={project.github}
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
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 1,
                          }}
                        >
                          <ToolTip message={"view live demo"}>
                            <a
                              className={`flex gap-1 w-full items-center cursor-pointer hover:opacity-50 transition duration-500 justify-center md:justify-start md:w-auto ${
                                project.demo.length === 0 ? "hidden" : "block"
                              }`}
                              href={project.demo}
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
                    className="w-full h-[280px] rounded-t-lg overflow-hidden mt-[2rem] shadow-sm-lf dark:shadow-none mini:h-[190px] md:shadow-xl md:rounded-lg md:mt-[1.5rem] lg:mt-[2px]"
                    initial={{ y: -15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className={`transition-all duration-2000 ${
                        project.animation ? project.style : ""
                      }`}
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
