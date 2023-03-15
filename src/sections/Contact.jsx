import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdOutlineContentCopy } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleCopy = (e) => {
    navigator.clipboard.writeText(e);
    toast.success("Copied!");
  };

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Email send successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="flex flex-col py-[3rem] px-[20px] w-full bg-white dark:bg-[#121212] md:py-[4.5rem] md:px-[14.5rem]"
      id="contact"
    >
      <motion.div
        className="font-[600] text-[36px] leading-[1.2] w-full dark:text-white md:text-[34px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        view={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Contact Me
      </motion.div>
      {/* email, phone, address details section */}
      <div className="w-full flex flex-col pt-[4rem] md:flex-row">
        <div className="w-full flex flex-col justify-start items-center md:pt-20">
          <motion.div
            className="flex items-center justify-start w-full gap-2 "
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            view={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <MdOutlineEmail className="w-[24px] h-[24px] text-black animate-pulse dark:text-[#a7a7a8] md:w-[28px] md:h-[28px]" />
            <div className="text-black text-[16px] dark:text-white/70 md:text-[18px]">
              shehansub@gmail.com
            </div>
            <MdOutlineContentCopy
              className="text-black opacity-40 cursor-pointer hover:opacity-60 dark:text-white/50"
              onClick={() => handleCopy("shehansub@gmail.com")}
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-start w-full gap-2 pt-8"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            view={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <FiPhoneCall className="w-[24px] h-[24px] text-black animate-pulse dark:text-[#a7a7a8] md:w-[28px] md:h-[28px]" />
            <div className="text-black text-[16px] dark:text-white/70 md:text-[18px]">
              +94702678212
            </div>
            <MdOutlineContentCopy
              className="text-black opacity-40 cursor-pointer hover:opacity-60 dark:text-white/50"
              onClick={() => handleCopy("+94702678212")}
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-start w-full gap-2 pt-8"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            view={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <GoLocation className="w-[24px] h-[24px] text-black animate-pulse dark:text-[#a7a7a8] md:w-[28px] md:h-[28px]" />
            <div className="text-black text-[16px] dark:text-white/70 md:text-[18px]">
              Gampaha, Sri Lanka
            </div>
          </motion.div>
        </div>
        {/* contact form section */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col pt-[3rem] md:pt-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          view={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            required
            className="w-full h-[50px] p-3 border rounded-md text-[14px] bg-black/10 text-black dark:text-white/90"
          />
          <input
            type="text"
            placeholder="Subject"
            name="user_subject"
            required
            className="w-full h-[50px] p-3 border mt-3 rounded-md text-[14px] bg-black/10 text-black dark:text-white/90"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="w-full h-[50px] p-3 border mt-3 rounded-md text-[14px] bg-black/10 text-black dark:text-white/90"
          />
          <textarea
            name="user_message"
            placeholder="Message"
            cols="30"
            rows="5"
            required
            className="w-full p-3 border mt-3 rounded-md text-[14px] bg-black/10 text-black dark:text-white/90"
          ></textarea>
          <div className="flex w-full h-[45px] justify-center mt-5">
            <button className="bg-black text-white px-[3rem] rounded-md text-[14px] shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/70 dark:bg-white/90 dark:text-black dark:font-medium">
              Submit
            </button>
          </div>
        </motion.form>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Contact;
