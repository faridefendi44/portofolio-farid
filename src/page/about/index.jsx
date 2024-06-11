import React from "react";
import { motion } from "framer-motion";
import BlobAnimation from "../../components/BlobAnimation";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";


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
    <div className="">
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
      <div className="xl:flex space-y-14 xl:space-y-0 justify-center w-full mx-0 xl:justify-between xl:px-36 mx-auto  h-screen pt-[50px] xl:pt-0 my-auto items-center">
        <h1 className=" xl:w-2/3 w-full text-center">
          <h1 className="text-white my-auto mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Farid Efendi",
                1000,
                "Front-end Developer",
                1000,
                "Back-end Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <a
              href="mailto: faridnurefendi@student.ub.ac.id"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </a>
            <a target="blank"
              href="https://drive.google.com/file/d/1C9SvWuPsOZXe0xaUQQaIWkaNP5OcREiO/view?usp=sharing"
              className="px-1 inline-block py-1 w-fit sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-blue-600 hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </h1>
        
        <div className="w-full xl:w-1/2 justify-center mx-auto flex">
        <div className=" rounded-full bg-gradient-to-br from-purple-600 to bg-red-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <img
            src="./farid.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
          
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default index;
