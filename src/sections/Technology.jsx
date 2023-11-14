import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  SiDart,
  SiFlutter,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const Technology = () => {
  const tools = [
    {
      id: 1,
      name: "Flutter",
      tag: <SiFlutter className="h-[37px] w-[37px] hover:opacity-80" />,
    },
    {
      id: 2,
      name: "Dart",
      tag: <SiDart className="h-[37px] w-[37px] hover:opacity-80" />,
    },
    {
      id: 3,
      name: "HTML 5",
      tag: <FaHtml5 className="h-[40px] w-[40px] hover:opacity-80" />,
    },
    {
      id: 4,
      name: "CSS 3",
      tag: <FaCss3Alt className="h-[40px] w-[40px] hover:opacity-80" />,
    },
    {
      id: 5,
      name: "JavaScript",
      tag: <SiJavascript className="h-[37px] w-[37px] hover:opacity-80" />,
    },
    {
      id: 6,
      name: "React",
      tag: <FaReact className="h-[40px] w-[40px] hover:opacity-80" />,
    },
    {
      id: 7,
      name: "Tailwind",
      tag: <SiTailwindcss className="h-[40px] w-[40px] hover:opacity-80" />,
    },
    {
      id: 8,
      name: "Git",
      tag: <FaGitAlt className="h-[41px] w-[41px] hover:opacity-80" />,
    },
    {
      id: 9,
      name: "Firebase",
      tag: <SiFirebase className="h-[38px] w-[38px] hover:opacity-80" />,
    },
    {
      id: 9,
      name: "MySQL",
      tag: <GrMysql className="h-[38px] w-[38px] hover:opacity-80" />,
    },
    {
      id: 10,
      name: "Figma",
      tag: <FiFigma className="h-[40px] w-[40px] hover:opacity-80" />,
    },
  ];
  return (
    <section
      className="pt-[3rem] pb-[4rem] bg-white pr-[22px] pl-[18px] dark:bg-[#121212] md:px-[3rem] md:flex md:justify-center"
      id="technology"
    >
      <div className="flex h-full max-w-4xl w-full justify-center items-start md:items-center">
        <div className="flex flex-col w-full">
          {/* title */}
          <div className="font-[600] w-full text-[18px] leading-[1.2] text-center dark:text-white">
            Languages and Tools I use
          </div>
          {/* technologies display section */}
          <div className="pt-[3rem]">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 dark:text-[#DBDBDB]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              {tools.map((tool, index) => {
                return (
                  <motion.div
                    className="flex gap-2 justify-center items-center ml-1 mb-1 h-[100px] border border-[#DBDBDB] flex-col overflow-hidden dark:border-[#919191] lg:flex-row"
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
      </div>
    </section>
  );
};

export default Technology;
