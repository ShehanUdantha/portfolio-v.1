import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const darkCharacterList = [
    {
      character: "D",
      id: "1",
    },
    {
      character: "A",
      id: "2",
    },
    {
      character: "R",
      id: "3",
    },
    {
      character: "K",
      id: "4",
    },
  ];

  const lightCharacterList = [
    {
      character: "L",
      id: "1",
    },
    {
      character: "I",
      id: "2",
    },
    {
      character: "G",
      id: "3",
    },
    {
      character: "H",
      id: "4",
    },
    {
      character: "T",
      id: "5",
    },
  ];

  // shuffled given character list
  function shuffleList(array) {
    let newArray = [];
    newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      let temp = newArray[i];
      newArray[i] = newArray[random];
      newArray[random] = temp;
    }
    // console.log("shuffle" + "" + newArray.map((item) => item.character));
    return newArray;
  }

  function shuffle(array) {
    let shuffledCharacterList = [];

    shuffledCharacterList = shuffleList(array);
    let testCharacters = shuffledCharacterList.map((item) => item.character);
    // console.log("color" + " " + testCharacters);
    if (
      testCharacters.join("") === "LIGHT" ||
      testCharacters.join("") === "DARK"
    ) {
      // console.log("found" + " " + testCharacters);
      shuffledCharacterList = shuffleList(array);
    }
    // console.log(
    //   "display" + "" + shuffledCharacterList.map((item) => item.character)
    // );
    return shuffledCharacterList;
  }

  const [shuffledDarkCharacterList, setShuffledDarkCharacterList] = useState(
    shuffle(darkCharacterList)
  );

  const [shuffledLightCharacterList, setShuffledLightCharacterList] = useState(
    shuffle(lightCharacterList)
  );

  const [darkCharacter, setDarkCharacter] = useState([]);
  const [lightCharacter, setLightCharacter] = useState([]);

  // character drag and drop handle events
  function handleOnDrag(e, draggedOnCharacter) {
    e.dataTransfer.setData("theCharacter", draggedOnCharacter);
  }

  function handleOnDragOver(e) {
    e.preventDefault();
    // console.log("drag over");
  }

  function handleOnDrop(e) {
    const draggedDropCharacter = e.dataTransfer.getData("theCharacter");
    // console.log("theCharacter" + draggedDropCharacter);
    if (darkMode) {
      setLightCharacter([...lightCharacter, draggedDropCharacter]);
    } else {
      setDarkCharacter([...darkCharacter, draggedDropCharacter]);
    }
  }

  function handleOnTap(tapCharacter) {
    if (darkMode) {
      setLightCharacter([...lightCharacter, tapCharacter]);
    } else {
      setDarkCharacter([...darkCharacter, tapCharacter]);
    }
  }

  // get stored theme color form localStorage
  const theme = JSON.parse(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    if (darkCharacter.length === darkCharacterList.length) {
      if (darkCharacter.join("") === "DARK") {
        setDarkMode(true);
        localStorage.setItem("theme", JSON.stringify(true));
        document.documentElement.classList.add("dark");
        setDarkCharacter([]);
        setShuffledDarkCharacterList(shuffle(darkCharacterList));
      } else {
        setDarkCharacter([]);
        setShuffledDarkCharacterList(shuffle(darkCharacterList));
      }
    }
    if (lightCharacter.length === lightCharacterList.length) {
      if (lightCharacter.join("") === "LIGHT") {
        setDarkMode(false);
        localStorage.setItem("theme", JSON.stringify(false));
        document.documentElement.classList.remove("dark");
        setLightCharacter([]);
        setShuffledLightCharacterList(shuffle(lightCharacterList));
      } else {
        setLightCharacter([]);
        setShuffledLightCharacterList(shuffle(lightCharacterList));
      }
    }
  }, [darkCharacter, lightCharacter]);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <section
      className="py-[1rem] px-[20px] bg-white dark:bg-[#121212] md:px-[3rem] lg:h-screen"
      id="home"
    >
      {/* body details section */}
      <div className="flex h-full w-full pt-[8rem] pb-5 justify-center items-start md:items-center lg:pt-0 lg:pl-[3rem] xl:pl-[9rem] xl:pr-[2.8rem]">
        <div className="flex flex-col items-center w-full md:flex-row lg:mt-0">
          {/* text area section */}
          <div className="w-full pt-[1rem] md:pt-0">
            <div className="font-[800] overflow-hidden flex items-center justify-start text-[36px] leading-[1.2] w-full text-black dark:text-white mini:text-[28px] lg:text-[49px]">
              <motion.span
                initial={{
                  opacity: 0,
                  y:
                    window.innerWidth <= 1023
                      ? window.innerWidth > 280
                        ? 40
                        : 20
                      : 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.6, 0.01, 0.05, 0.95],
                }}
              >
                Hi,
              </motion.span>
              &nbsp;
              <motion.span
                initial={{
                  opacity: 0,
                  y:
                    window.innerWidth <= 1023
                      ? window.innerWidth > 280
                        ? 40
                        : 20
                      : 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.6, 0.01, 0.05, 0.95],
                }}
              >
                I'm
              </motion.span>
              &nbsp;
              <motion.span
                initial={{
                  opacity: 0,
                  y:
                    window.innerWidth <= 1023
                      ? window.innerWidth > 280
                        ? 40
                        : 20
                      : 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.6, 0.01, 0.05, 0.95],
                }}
              >
                Shehan
              </motion.span>
              <motion.span
                initial={{
                  opacity: 0,
                  y:
                    window.innerWidth <= 1023
                      ? window.innerWidth > 280
                        ? 40
                        : 20
                      : 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.6, 0.01, 0.05, 0.95],
                }}
              >
                {darkMode ? "👋🏻" : "👋"}
              </motion.span>
            </div>
            <div className="font-[400] overflow-hidden text-[14.5px] leading-[1.2] text-[#54565C] pt-[0.6rem] w-full dark:text-white/70 mini:text-[14px] md:pt-[0.4rem] lg:text-[19px]">
              <motion.p
                initial={{
                  opacity: 0,
                  y:
                    window.innerWidth <= 1023
                      ? window.innerWidth >= 682 && window.innerWidth < 768
                        ? 10
                        : -30
                      : -50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.3,
                  delay: 0.7,
                  ease: [0.6, 0.01, 0.05, 0.95],
                }}
              >
                I'm a front-end developer with a passion for building a
                beautiful and functional websites.
              </motion.p>
            </div>
            <motion.div
              className="flex justify-start items-center mt-4 gap-4 lg:mt-8"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/shehan-udantha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-[22px] h-[22px] text-black dark:text-white lg:w-[27px] lg:h-[27px]" />
              </a>
              <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/ShehanUdantha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-[22px] h-[22px] text-black dark:text-white lg:w-[27px] lg:h-[27px]" />
              </a>
            </motion.div>
          </div>
          {/* drag and drop section */}
          <div
            className={`flex justify-end items-center w-full pt-[5rem] overflow-hidden mini:pt-[3.5rem] md:pt-0 ${
              darkMode ? "xl:px-[2.7rem]" : "xl:px-[4.5rem]"
            }`}
          >
            <motion.div
              className={`flex flex-col justify-center items-center pt-0 w-full md:pt-10 ${
                darkMode ? "px-[1.6rem] lg:px-[2.8rem]" : "px-[2rem]"
              }`}
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 1.3,
              }}
            >
              <div className="h-[80px] w-full max-w-[270px] flex items-center border-dashed border-[2px] border-black overflow-clip dark:border-white dark:max-w-[285px] mini:w-[220px] lg:h-[100px] lg:max-w-[325px] lg:dark:max-w-[340px]">
                <div className="w-full relative">
                  {/* dashed text inside of the box */}
                  <div className="flex gap-[1.3rem] w-full leading-[1.3] px-[14px] pr-6 pt-0 dark:gap-[1rem] dark:pl-[14px] dark:pr-0 mini:gap-[0.6rem] dark:mini:gap-[0.35rem] dark:mini:pt-[1.5px]">
                    {(darkMode ? lightCharacterList : darkCharacterList).map(
                      (item, index) => {
                        return (
                          <div
                            className="text-[60px] dashed-font text-black opacity-20 dark:text-white mini:text-[55px] lg:text-[79px]"
                            key={index + item.id}
                          >
                            {item.character}
                          </div>
                        );
                      }
                    )}
                  </div>
                  {/* dropping character display section */}
                  <div
                    className="absolute h-[70px] w-full top-0 flex items-center gap-[17px] pt-[2px] px-4 dark:gap-[15px] mini:gap-[9px] lg:px-3 lg:h-[98px] dark:mini:gap-[6px]"
                    onDrop={handleOnDrop}
                    onDragOver={handleOnDragOver}
                  >
                    {(darkMode ? lightCharacter : darkCharacter).map(
                      (item, index) => {
                        return (
                          <div
                            className="text-[65px] font-bold leading-[1.1] text-black dark:text-white mini:text-[55px] lg:text-[86px]"
                            key={index}
                          >
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
              {/* dragging characters section for desktop*/}
              <div
                className={`h-auto mt-5 hidden items-center gap-[22px] px-5 md:flex`}
              >
                {(darkMode
                  ? shuffledLightCharacterList
                  : shuffledDarkCharacterList
                )
                  .filter((item) => {
                    return !(
                      darkMode ? lightCharacter : darkCharacter
                    ).includes(item.character);
                  })
                  .map((item) => {
                    return (
                      <motion.div
                        key={item.id}
                        className="font-bold text-[44px] text-black/60 bg-transparent cursor-pointer hover:opacity-90 transition duration-500 dark:text-white"
                        draggable
                        onDragStart={(e) => {
                          handleOnDrag(e, item.character);
                        }}
                        initial={{ scale: 0 }}
                        animate={{ rotate: [0, 180, 0], scale: 1 }}
                        transition={{
                          type: "spring",
                          delay: 1.4,
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        {item.character}
                      </motion.div>
                    );
                  })}
              </div>
              {/* tap characters section for mobile view*/}
              <div
                className={`h-auto mt-5 flex items-center gap-5 px-5 md:hidden`}
              >
                {(darkMode
                  ? shuffledLightCharacterList
                  : shuffledDarkCharacterList
                )
                  .filter((item) => {
                    return !(
                      darkMode ? lightCharacter : darkCharacter
                    ).includes(item.character);
                  })
                  .map((item) => {
                    return (
                      <motion.div
                        key={item.id}
                        className="font-bold text-[44px] text-black/60 bg-transparent cursor-pointer hover:opacity-90 transition duration-500 dark:text-white mini:text-[38px]"
                        onClick={() => handleOnTap(item.character)}
                        initial={{ scale: 0 }}
                        animate={{ rotate: [0, 180, 0], scale: 1 }}
                        transition={{
                          type: "spring",
                          delay: 1.4,
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        {item.character}
                      </motion.div>
                    );
                  })}
              </div>
              <div className="text-[11px] text-[#54565C] text-center pb-10 animate-bounce hidden md:block">
                drag and drop to fill the word
              </div>
              <div className="text-[11px] text-[#54565C] text-center pb-10 animate-bounce block md:hidden">
                tap on a characters to fill the word
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
