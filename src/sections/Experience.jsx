import React, { useEffect, useState } from "react";
import { SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
        const sortedData = data.docs;
        const filteredExperiences = sortedData.map((doc) => ({
          ...doc.data(),
        }));

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
          <div className="pt-[3rem]">
            <VerticalTimeline lineColor="#DBDBDB">
              {experiencesList?.map((experience, index) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "none",
                      boxShadow: "none",
                      border: "1px solid #DBDBDB",
                      textAlign: "left",
                      padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                      borderRight: "0.4rem solid #DBDBDB",
                    }}
                    style={{
                      color: "#7d7d7d",
                    }}
                    date={experience.date}
                    icon={<SiFlutter className="text-white" />}
                    iconStyle={{
                      background: "#1e1e1e",
                    }}
                    key={index + 0.7}
                  >
                    <h3 className="font-semibold capitalize text-black dark:text-white">
                      {experience.role}
                    </h3>
                    <p className="font-normal !mt-0 text-black/50 dark:text-white/80">
                      {experience.company}
                    </p>
                    <p className="text-[#54565C] dark:text-white/70 mini:text-[15px]">
                      {experience.description}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
