import React, { useEffect, useState } from "react";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import Spinner from "../assets/Spinner-1.9s-44px.svg";

const About = () => {
  const [isClick, setIsClick] = useState(false);

  const [CV, setCV] = useState();
  const cvRef = doc(db, "cv", "GzGzbA1FW6GjP2teVymY");

  useEffect(() => {
    const getCV = async () => {
      try {
        const dataSnap = await getDoc(cvRef);
        setCV(dataSnap.data().url);
      } catch (e) {
        console.log("error", e.message);
      }
    };
    getCV();
  }, []);

  return (
    <section
      className="py-[4rem] bg-white px-[20px] dark:bg-[#121212] md:px-[3rem] md:flex md:justify-center"
      id="about"
    >
      <div className="flex h-full max-w-4xl w-full justify-center items-start md:items-center">
        <div className="flex flex-col w-full items-center md:flex-row">
          {/* title and image section */}
          <div className="w-full pt-[1rem] md:pt-0">
            {/* title */}
            <motion.div
              className="font-[600] w-full flex text-[36px] leading-[1.2] dark:text-white mini:text-[28px] md:text-[34px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About Me
            </motion.div>
            {/* image section */}
            <div className="overflow-hidden">
              <motion.div
                className="flex justify-center pt-[2.5rem] lg:pt-[4.5rem]"
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
                  className="h-[280px] w-auto rounded-xl mini:h-[200px] lg:h-[350px] lg:min-w-[310px]"
                />
              </motion.div>
            </div>
          </div>

          {/* description and download button section */}
          <div className="flex flex-col w-full">
            {/* description section */}
            <motion.div
              className="pt-[2.5rem] text-[16.8px] text-[#54565C] dark:text-white/70 mini:text-[15px] lg:pt-[5rem]"
              initial={{ x: -15, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Hi, My name is Shehan Udantha, I'm a Software Engineering
              Undergraduate who loves Mobile apps and Front-end Web
              developments. And I excel in designing and maintaining beautiful
              and responsive apps that offer a smooth user experience😎.
            </motion.div>
            {/* download button section */}
            <motion.div
              className="pt-[1rem] w-full flex flex-col justify-start items-center lg:items-start"
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
              onClick={() => {
                setIsClick(true);
                setTimeout(() => {
                  setIsClick(false);
                }, 4000);
              }}
            >
              <a href={CV} download="Shehan_Udantha_CV">
                <motion.button
                  className="h-[44px] px-4 text-[14px] rounded-md shadow-xl bg-black text-white dark:shadow-none dark:bg-white/90 dark:text-black"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className={`flex items-center justify-center gap-1 ${
                      isClick ? "hidden" : "display"
                    }`}
                  >
                    Download CV
                    <HiOutlineDocumentText className="h-[17px] w-[18px]" />
                  </div>
                  <div
                    className={`flex items-center justify-center ${
                      isClick ? "display" : "hidden"
                    }`}
                  >
                    <img src={Spinner} alt="spinner" />
                    Downloading...
                  </div>
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
