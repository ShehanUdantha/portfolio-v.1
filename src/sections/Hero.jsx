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

  function shuffleArray(array) {
    let newArray = [];
    newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      let temp = newArray[i];
      newArray[i] = newArray[random];
      newArray[random] = temp;
    }

    if (newArray.join("") === "DARK" || newArray.join("") === "LIGHT") {
      // console.log("found");
      shuffleArray(newArray);
    }

    return newArray;
  }

  const [shuffledDarkCharacterList, setShuffledDarkCharacterList] = useState(
    shuffleArray(darkCharacterList)
  );

  const [shuffledLightCharacterList, setShuffledLightCharacterList] = useState(
    shuffleArray(lightCharacterList)
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
        setShuffledDarkCharacterList(shuffleArray(darkCharacterList));
      } else {
        setDarkCharacter([]);
        setShuffledDarkCharacterList(shuffleArray(darkCharacterList));
      }
    }
    if (lightCharacter.length === lightCharacterList.length) {
      if (lightCharacter.join("") === "LIGHT") {
        setDarkMode(false);
        localStorage.setItem("theme", JSON.stringify(false));
        document.documentElement.classList.remove("dark");
        setLightCharacter([]);
        setShuffledLightCharacterList(shuffleArray(lightCharacterList));
      } else {
        setLightCharacter([]);
        setShuffledLightCharacterList(shuffleArray(lightCharacterList));
      }
    }
  }, [darkCharacter, lightCharacter]);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className="py-[1rem] bg-white px-[20px] dark:bg-[#121212] md:px-[3rem] h-screen"
      id="home"
    >
      {/* body details section */}
      <div className="flex h-full w-full pt-[8rem] pb-5 justify-center items-start md:items-center md:pt-0 md:pl-[11.5rem] md:pr-[5rem]">
        <div className="flex flex-col items-center w-full md:flex-row">
          {/* text area section */}
          <div className="w-full pt-[1rem] md:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              view={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-[800] text-[36px] leading-[1.2] w-full text-black dark:text-white md:text-[49px]"
            >
              Hi, I'm Shehan{darkMode ? "👋🏻" : "👋"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              view={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="font-[400] text-[14.5px] leading-[1.2] text-[#54565C] pt-[0.6rem] w-full dark:text-white/70 md:pt-[0.4rem] md:text-[19px]"
            >
              I'm a front-end developer with a passion for building a beautiful
              and functional websites.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              view={{ once: true, amount: 0.5 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex justify-start items-center mt-4 gap-4 md:mt-8"
            >
              <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/shehan-udantha-4a69651b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-[22px] h-[22px] text-black dark:text-white md:w-[27px] md:h-[27px]" />
              </a>
              <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/ShehanUdantha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-[22px] h-[22px] text-black dark:text-white md:w-[27px] md:h-[27px]" />
              </a>
            </motion.div>
          </div>
          {/* drag and drop section */}
          <div
            className={`flex justify-end items-center w-full pt-[5rem] md:pt-0 ${
              darkMode ? "md:px-[2.7rem]" : "md:px-[5rem]"
            }`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              view={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className={`flex flex-col justify-center items-center pt-0 w-full md:pt-10 ${
                darkMode ? "px-[1.6rem] md:px-[2.8rem]" : "px-[2rem]"
              }`}
            >
              <div className="h-[80px] w-full border-dashed border-[2px] border-black overflow-clip dark:border-white md:h-[100px]">
                <div className="w-full relative">
                  {/* dashed text inside of the box */}
                  <div className="flex gap-[1.3rem] w-full leading-[1.3] px-[14px] pr-6 dark:gap-[1rem] dark:pl-[14px] dark:pr-0">
                    {(darkMode ? lightCharacterList : darkCharacterList).map(
                      (item, index) => {
                        return (
                          <div
                            className="text-[60px] dashed-font text-black opacity-10 dark:text-white md:text-[80px]"
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
                    className="absolute h-[70px] w-full top-0 flex items-center gap-[17px] pt-[2px] px-4 dark:gap-[15px] md:px-3 md:h-[98px]"
                    onDrop={handleOnDrop}
                    onDragOver={handleOnDragOver}
                  >
                    {(darkMode ? lightCharacter : darkCharacter).map(
                      (item, index) => {
                        return (
                          <div
                            className="text-[65px] font-bold leading-[1.1] text-black dark:text-white md:text-[86px]"
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
              {/* dragging characters section */}
              <div className={`h-auto mt-5 flex items-center gap-5 px-5`}>
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
              <div className="text-[11px] text-[#54565C] pb-10 animate-bounce">
                drag and drop to fill the word
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
