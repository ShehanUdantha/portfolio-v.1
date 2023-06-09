import React from "react";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";

const About = () => {
  const CV =
    "https://drive.google.com/uc?export=download&id=1QcjheiRudrZxst7LvCDlmcV7yytI55xO";

  return (
    <section
      className="py-[1rem] bg-white px-[20px] dark:bg-[#121212] md:px-[3rem]"
      id="about"
    >
      <div className="flex flex-col h-full w-full pt-[3rem] pb-5 justify-center items-start md:items-center lg:px-[3rem] xl:pt-[4.5rem] xl:pb-[9rem] xl:px-[9.3rem]">
        <motion.div
          className="font-[600] w-full text-[36px] leading-[1.2] dark:text-white mini:text-[28px] md:text-[34px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About Me
        </motion.div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="w-full">
            {/* image section */}
            <motion.div
              className="flex justify-center pt-[2.5rem] lg:pt-[4.5rem] lg:justify-end"
              initial={{ y: -15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              <img
                src={Profile}
                alt="profile"
                className="h-[280px] w-auto rounded-xl mini:h-[240px] lg:h-[350px] lg:min-w-[310px]"
              />
            </motion.div>
          </div>
          {/* description section */}
          <div className="w-full flex flex-col justify-center items-center lg:pl-[3rem]">
            <motion.div
              className="pt-[2.5rem] text-[16.8px] text-[#54565C] dark:text-white/70 mini:text-[15px] lg:pt-[5rem]"
              initial={{ x: -15, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Hi, My name is Shehan Udantha, I'm a Software Engineering
              Undergraduate who loves front-end development and learn new
              technologies. I excel in designing and maintaining responsive
              websites that offer a smooth user experience😎.
            </motion.div>
            {/* download button section */}
            <motion.div
              className="pt-[1rem] w-full flex flex-col justify-start items-center lg:items-start"
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <a href={CV} download="Shehan_Udantha_CV">
                <motion.button
                  className="flex items-center justify-center gap-1 h-[44px] w-[150px] text-[14px] rounded-md shadow-xl bg-black text-white dark:shadow-none dark:bg-white/90 dark:text-black"
                  whileHover={{ scale: 1.1 }}
                >
                  Download CV
                  <HiOutlineDocumentText className="h-[17px] w-[18px]" />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
