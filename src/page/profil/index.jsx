import { React, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Brawijaya University",
        stage: "Faculty Of Computer Science",
      },
      {
        title: "GPA: 3.68",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
];
const index = () => {
  const [index, setIndex] = useState(0);
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
      <section>
        <div className="xl:px-44 xl:flex pt-10 flex-row-reverse">
          <div className="px-5 xl:w-1/2  flex my-auto">
            <p className="text-white lg:text-2xl font-semibold text-center">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Node.js, Laravel,CodeIgniter, SQL
              Sequelize, HTML, CSS, and Git. I am a quick learner and I am
              always looking to expand my knowledge and skill set. I am a team
              player and I am excited to work with others to create amazing
              applications.
            </p>
          </div>
          <div className="xl:w-1/2  flex mx-auto justify-center my-auto">
            <img
              src="./farid2.png"
              className="w-2/3"
              alt=""
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className=" py-10  mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 justify-center">
          <div className="">
            <div className="flex gap-x-4 xl:gap-x-20 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    }text-center cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center text-center p-5 w-80 xl:w-[30rem] bg-white/10 backdrop-blur-sm text-lg ">
            {aboutData[index].info.map((item, itemIndex)=>{
              return(
                <div className="" key={itemIndex}>
                  <h1>{item.title}</h1>
                  <h1>{item.stage}</h1>
                  <div className="flex gap-x-4 ">
                    {item.icons?.map((icon, itemIndex)=>{
                      return <div className="">{icon}</div>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
