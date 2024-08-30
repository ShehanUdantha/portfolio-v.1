import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Experience = () => {
  const [experiencesList, setExperienceList] = useState([]);
  const experienceRef = collection(db, "experience");

  useEffect(() => {
    const getExperienceList = async () => {
      // read data from db
      //set the experience list
      try {
        const data = await getDocs(experienceRef);

        const filteredExperiences = data.docs
          ?.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .sort((a, b) => {
            const priorityA = a.priority || 0;
            const priorityB = b.priority || 0;
            return priorityB - priorityA; // sort by priority in descending order
          });

        setExperienceList(filteredExperiences);
      } catch (e) {
        console.log("error", e.message);
      }
    };

    getExperienceList();
  }, []);

  return (
    <section
      className="pt-[3rem] pb-[8rem] bg-white pr-[22px] pl-[18px] dark:bg-[#121212] md:px-[3rem] md:flex md:justify-center"
      id="experience"
    >
      <div className="flex h-full max-w-4xl w-full justify-center items-start md:items-center">
        <div className="flex flex-col w-full">
          {/* title */}
          <motion.div
            className="font-[600] w-full flex text-[36px] leading-[1.2] dark:text-white mini:text-[28px] md:text-[34px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Experience
          </motion.div>

          {/* experience section */}
          <motion.div
            className="container mx-auto pt-[4.5rem] flex flex-col min-h-[20rem] mini:pt-[3rem] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="relative">
              <div className="absolute w-px bg-gray-200 h-full left-8 transform -translate-x-1/2" />
              {experiencesList.map((experience, index) => (
                <div key={index} className="flex-col mb-5">
                  <div className="pb-5 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="relative z-10">
                        <img
                          className="w-16 h-16 rounded-full p-1 border bg-white border-gray-200 object-contain"
                          src={experience.company_logo}
                          alt={experience.company}
                        />
                      </div>
                    </div>
                    <div className="ml-8 w-full">
                      <p className="text-sm text-gray-500 text-right dark:text-[#9D9D9D] pb-3 md:pb-1">
                        {experience.date}
                      </p>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {experience.role}
                      </h4>

                      <p className="text-sm text-gray-500 dark:text-[#A2A2A2]">
                        {`${experience.company} - ${experience.location}`}
                      </p>

                      {/* description */}
                      <div className="mt-3">
                        {experience.description?.map((item, index) => {
                          return (
                            <p
                              key={index + 0.3}
                              className="text-sm text-gray-700 mt-2 dark:text-[#cccccc]"
                            >
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="ml-8 gap-5 border-t border-dashed border-gray-300 w-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
