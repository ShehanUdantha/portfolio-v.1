import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiJavascript, SiTailwindcss, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const Technology = () => {
  const tools = [
    {
      id: 1,
      name: "HTML 5",
      tag: <FaHtml5 className="h-[40px] w-[40px] hover:opacity-80" />,
    },
    {
      id: 2,
      name: "CSS 3",
      tag: <FaCss3Alt className="h-[40px] w-[40px] hover:opacity-80" />,
    },
    {
      id: 3,
      name: "JavaScript",
      tag: <SiJavascript className="h-[38px] w-[38px] hover:opacity-80" />,
    },
    {
      id: 4,
      name: "React",
      tag: <FaReact className="h-[40px] w-[40px] hover:opacity-80" />,
    },
    {
      id: 5,
      name: "Redux",
      tag: <SiRedux className="h-[38px] w-[38px] hover:opacity-80" />,
    },
    {
      id: 6,
      name: "Tailwind CSS",
      tag: <SiTailwindcss className="h-[40px] w-[40px] hover:opacity-80" />,
    },
    {
      id: 7,
      name: "Git",
      tag: <FaGitAlt className="h-[41px] w-[41px] hover:opacity-80" />,
    },
    {
      id: 8,
      name: "Figma",
      tag: <FiFigma className="h-[40px] w-[40px] hover:opacity-80" />,
    },
  ];
  return (
    <section
      className="py-[1rem] bg-white px-[20px] dark:bg-[#121212] md:px-[3rem]"
      id="technology"
    >
      <div className="flex flex-col h-full w-full pt-[3rem] pb-5 justify-center items-start md:items-center lg:pr-[3.5rem] lg:pl-[3rem] xl:px-[11.5rem]">
        <div className="font-[600] w-full text-[18px] leading-[1.2] text-center dark:text-white">
          Languages and Tools I use
        </div>
        {/* technologies display section */}
        <div className="w-full pt-[3rem] flex flex-col justify-center">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 dark:text-[#DBDBDB]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            {tools.map((tool, index) => {
              return (
                <motion.div
                  className="flex gap-2 justify-center ml-1 mb-1 items-center h-[160px] border border-[#DBDBDB] flex-col overflow-hidden dark:border-[#919191] lg:flex-row"
                  key={index + tool.id}
                  whileHover={{
                    scale: 1.025,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  {tool.tag}
                  <p className="font-medium text-[18px] text-center">
                    {tool.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
