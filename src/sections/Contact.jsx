import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdOutlineContentCopy } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const REG_EMAIL =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e);
    toast.success("Copied!");
  };

  const formRef = useRef();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [nameWarning, setNameWarning] = useState("");
  const [subjectWarning, setSubjectWarning] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [messageWarning, setMessageWarning] = useState("");

  const handleName = (e) => {
    const value = e.target.value;

    setName(value);

    if (value.length === 0) {
      setNameWarning("Name is required!");
      setNameError(true);
    } else if (value.length > 0) {
      setNameError(false);
      setNameWarning("");
    }
  };

  const handleSubject = (e) => {
    const value = e.target.value;

    setSubject(value);

    if (value.length === 0) {
      setSubjectWarning("Subject is required!");
      setSubjectError(true);
    } else if (value.length > 0) {
      setSubjectError(false);
      setSubjectWarning("");
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;

    setEmail(value);

    if (!REG_EMAIL.test(value) && value !== "" && value.length > 6) {
      setEmailWarning("Please enter a valid email address");
      setEmailError(true);
    } else if (REG_EMAIL.test(value)) {
      setEmailError(false);
    } else {
      setEmailWarning("Email is required!");
      setEmailError(true);
    }
  };

  const handleMessage = (e) => {
    const value = e.target.value;

    setMessage(value);

    if (value.length === 0) {
      setMessageWarning("Message is required!");
      setMessageError(true);
    } else if (value.length > 0) {
      setMessageError(false);
      setMessageWarning("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0) {
      setNameError(true);
      setNameWarning("Name is required!");
    } else if (subject.length === 0) {
      setSubjectError(true);
      setSubjectWarning("Subject is required!");
    } else if (email.length === 0) {
      setEmailError(true);
      setEmailWarning("Email is required!");
    } else if (message.length === 0) {
      setMessageError(true);
      setMessageWarning("Message is required!");
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            toast.success("Email send successfully!");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section
      className="py-[1rem] bg-white px-[20px] dark:bg-[#121212] md:px-[3rem]"
      id="contact"
    >
      <div className="flex flex-col h-full w-full pt-[3rem] pb-5 justify-center items-start md:items-center lg:px-[3.5rem]  xl:px-[9.3rem] xl:py-[4.5rem]">
        <motion.div
          className="font-[600] w-full text-[36px] leading-[1.2] dark:text-white mini:text-[28px] md:text-[34px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Contact Me
        </motion.div>

        <div className="w-full flex flex-col pt-[4rem] mini:pt-[3rem] md:flex-row">
          {/* email, phone, address details section */}
          <div className="w-full flex flex-col justify-start items-center md:pl-10 md:pt-20">
            <motion.div
              className="flex items-center justify-start w-full gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
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
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FiPhoneCall className="w-[24px] h-[24px] text-black animate-pulse dark:text-[#a7a7a8] md:w-[28px] md:h-[28px]" />
              <div className="text-black text-[16px] dark:text-white/70 md:text-[18px]">
                +94 702678212
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
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
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
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {/* name field */}
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              onChange={(e) => {
                handleName(e);
              }}
              className="w-full h-[50px] p-3 border rounded-md text-[14px] bg-black/10 text-black dark:text-white/90"
            />
            <p
              className={`text-[12px] text-red-600 pt-[2px] dark:text-red-400 ${
                nameError ? "block" : "hidden"
              }`}
            >
              {nameWarning}
            </p>
            {/* subject field */}
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              onChange={(e) => {
                handleSubject(e);
              }}
              className="w-full h-[50px] p-3 border mt-3 rounded-md text-[14px] bg-black/10 text-black dark:text-white/90"
            />
            <p
              className={`text-[12px] text-red-600 pt-[2px] dark:text-red-400 ${
                subjectError ? "block" : "hidden"
              }`}
            >
              {subjectWarning}
            </p>
            {/* email field */}
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              onChange={(e) => {
                handleEmail(e);
              }}
              className="w-full h-[50px] p-3 border mt-3 rounded-md text-[14px] bg-black/10 text-black dark:text-white/90"
            />
            <p
              className={`text-[12px] text-red-600 pt-[2px] dark:text-red-400 ${
                emailError ? "block" : "hidden"
              }`}
            >
              {emailWarning}
            </p>
            {/* message field */}
            <textarea
              name="user_message"
              placeholder="Message"
              cols="30"
              rows="5"
              onChange={(e) => {
                handleMessage(e);
              }}
              className="w-full p-3 border mt-3 rounded-md text-[14px] bg-black/10 text-black dark:text-white/90"
            ></textarea>
            <p
              className={`text-[12px] text-red-600 pt-[2px] dark:text-red-400 ${
                messageError ? "block" : "hidden"
              }`}
            >
              {messageWarning}
            </p>
            {/* submit button */}
            <div className="flex w-full h-[45px] justify-center mt-5">
              <button className="bg-black text-white px-[3rem] rounded-md text-[14px] shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/70 dark:shadow-none dark:bg-white/90 dark:text-black dark:font-medium">
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contact;
