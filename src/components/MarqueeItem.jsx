import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ tool, from, to }) => {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {tool.map((tool, index) => {
          return (
            <motion.div
              className="flex gap-2 justify-center items-center ml-1 mb-1 h-[100px] flex-col overflow-hidden lg:flex-row pl-10"
              key={index + 1}
              whileHover={{
                scale: 1.025,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              {tool.tag}
              <p className="font-medium text-[18px] text-center">{tool.name}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {tool.map((tool, index) => {
          return (
            <motion.div
              className="flex gap-2 justify-center items-center ml-1 mb-1 h-[100px] flex-col overflow-hidden lg:flex-row pl-10"
              key={index + 2}
              whileHover={{
                scale: 1.025,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              {tool.tag}
              <p className="font-medium text-[18px] text-center">{tool.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
