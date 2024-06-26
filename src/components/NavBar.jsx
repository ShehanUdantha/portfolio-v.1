import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-scroll";

const NavBar = () => {
  const navItemsList = [
    { name: "Home", id: "1" },
    { name: "About", id: "2" },
    { name: "Projects", id: "3" },
    { name: "Experience", id: "4" },
    { name: "Contact", id: "5" },
  ];
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="w-full pb-[0.55rem] pt-[1rem] bg-white px-[20px] dark:bg-[#121212] md:px-[3rem] fixed z-10">
      <div className="flex justify-between relative">
        <h2 className="font-bold text-[13px] leading-none text-black dark:text-white md:text-[16px]">
          Shehan.dev
        </h2>
        <div className="hidden md:block">
          <ul className="flex gap-6 font-semibold items-center">
            {navItemsList.map((item, index) => {
              return (
                <li
                  className="hover:opacity-50 transition duration-500 text-[14px] text-black cursor-pointer dark:text-white"
                  key={item.id + index}
                >
                  <Link
                    to={item.name.toLowerCase()}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* small navbar section */}
        <div className="md:hidden">
          {/* nav open and close icon */}
          {navToggle ? (
            <BiMenuAltLeft
              className="text-black cursor-pointer transition duration-500 rotate-180 hover:opacity-50 dark:text-white w-[20px] h-[20px]"
              onClick={() => setNavToggle(!navToggle)}
            />
          ) : (
            <BiMenuAltRight
              className="text-black cursor-pointer transition duration-500 rotate-0 hover:opacity-50 dark:text-white w-[20px] h-[20px]"
              onClick={() => setNavToggle(!navToggle)}
            />
          )}
        </div>
        <AnimatePresence mode="wait">
          {navToggle && (
            <motion.div
              className="w-full h-[70px] bg-[#f8f8f8]/80 absolute top-7 rounded-b-lg flex items-center justify-center dark:bg-white/10 backdrop-blur-[10px] overflow-x-auto md:hidden"
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "70px",
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.8,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.25,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.8,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.25,
                  },
                },
              }}
            >
              <ul className="flex gap-6 text-[13px] font-semibold mini:gap-3 pl-20 pr-5">
                {navItemsList.map((item, index) => {
                  return (
                    <li
                      className="hover:opacity-50 transition duration-500 cursor-pointer text-black dark:text-white"
                      key={item.id + "-" + index}
                    >
                      <Link
                        to={item.name.toLowerCase()}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={5}
                        duration={500}
                        delay={100}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                        spyThrottle={500}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
