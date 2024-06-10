import React from "react";
import { motion } from "framer-motion";

const index = () => {
  const TransitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };
  return (
    <div className="h-screen">
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#3b2371]"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <div className="xl:flex mt-20 flex-row-reverse">
        <div className="xl:w-1/2 border-2 flex my-auto">
        <p className="text-white lg:text-lg text-center">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Laravel,CodeIgniter, SQL
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
        </div>
        <div className="xl:w-1/2 border-2 flex my-auto">
        <img
            src="./farid2.png"
            width={300}
            height={300}
            alt=""
            style={{ transform: "scaleX(-1)" }}
          />
       
        </div>
      </div>
    </div>
  );
};

export default index;
