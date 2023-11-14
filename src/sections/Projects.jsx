import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import ToolTip from "../components/ToolTip";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const projectsRef = collection(db, "projects");

  useEffect(() => {
    const getProjectsList = async () => {
      // read data from db
      //set the project list
      try {
        const data = await getDocs(projectsRef);
        const sortedData = data.docs?.sort((a, b) =>
          a.priority > b.priority ? -1 : 1
        );
        const filteredProjects = sortedData.map((doc) => ({
          ...doc.data(),
        }));
        setProjectsList(filteredProjects);
      } catch (e) {
        console.log("error", e.message);
      }
    };

    getProjectsList();
  }, []);

  return (
    <section
      className="py-[4rem] bg-white px-[22px] dark:bg-[#121212] md:px-[3rem] md:flex md:justify-center"
      id="projects"
    >
      <div className="flex h-full max-w-4xl w-full justify-center items-start md:items-center">
        <div className="flex flex-col w-full justify-start lg:mt-0">
          {/* title */}
          <motion.div
            className="font-[600] w-full flex text-[36px] leading-[1.2] dark:text-white mini:text-[28px] md:text-[34px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Projects
          </motion.div>

          {/* projects view section */}
          <div className="w-full">
            {projectsList?.map((project, index) => {
              return (
                <div
                  className="w-full pt-[4.5rem] flex flex-col mini:pt-[3rem]"
                  key={index + 0.5}
                >
                  <div className="w-full flex flex-col p-[1rem] rounded-xl bg-black/90 text-white dark:bg-[#1e1e1e] md:flex-row">
                    {/* project name */}
                    <motion.div
                      className="flex justify-center text-[24px] first-letter:font-semibold mt-[1rem] mb-5 text-white/90 mini:text-[22px] md:hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      {project.name}
                    </motion.div>
                    <div className="w-full flex flex-col-reverse  md:flex-row">
                      {/* title and description and links section */}
                      <div className="w-full pt-[1rem] md:pt-0 md:mr-5">
                        {/* project name */}
                        <motion.div
                          className="hidden text-[24px] pt-0 font-semibold justify-center mb-[1rem] text-white/90 mini:text-[22px] md:flex md:pt-[1rem]"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                        >
                          {project.name}
                        </motion.div>
                        <motion.div
                          initial={{ y: -15, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.7,
                          }}
                        >
                          {/* description */}
                          <p className="mt-3 md:mt-0 md:text-center">
                            {project.description}
                          </p>
                          {/* used technologies */}
                          <div className="text-white/80 grid grid-cols-[100px_minmax(0,_1fr)_100px] place-items-center pt-4 overflow-hidden">
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

                        {/* link section */}
                        <div className="w-full my-6 flex justify-center items-center">
                          <div className="flex justify-center gap-5 text-[14px] text-[#a7a7a8]">
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
                                    project.demo.length === 0
                                      ? "hidden"
                                      : "block"
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
                      {/* image section */}
                      <div className="flex flex-col w-full">
                        <motion.div
                          className="w-full h-[280px] rounded-t-lg overflow-hidden mt-0 shadow-sm-lf dark:shadow-none mini:h-[190px] md:h-[330px] md:shadow-xl md:rounded-lg md:mt-[1.5rem] lg:mt-[2px]"
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
                              project.style
                                ? "hover:-translate-y-[65%] lg:hover:-translate-y-[73.5%]"
                                : ""
                            }}`}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
