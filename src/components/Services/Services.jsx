"use client";
import React from "react";
import redBg2 from "./../../assets/redbg2.png";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { CiPen } from "react-icons/ci";
import { IoFolderOpen } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { SlidUp } from "../Hero/Hero";

const BgServices = {
  backgroundImage: `url(${redBg2.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const ServicesData = [
  {
    id: 1,
    title: "Website Development",
    icon: <CiPen />,
    link: "/services",
    descr:
      "Crafted high-quality web applications using HTML, CSS, JavaScript, and frameworks like React.js, Material UI, and Tailwind CSS.",
    delay: 1.2,
  },
  {
    id: 2,
    title: "Performance Optimization",
    icon: <IoFolderOpen />,
    link: "#",
    descr:
      "Enhanced application performance by optimizing React.js components, achieving a 30% increase in responsiveness at Beyond Logic.",
    delay: 1.6,
  },
  {
    id: 3,
    title: "UI Design & Development",
    icon: <RiComputerFill />,
    link: "#",
    descr:
      "Developed interactive and user-friendly interfaces, achieving 20% increased engagement through modern design practices.",
    delay: 2,
  },
];

const Services = () => {
  return (
    <section id="services" style={BgServices}>
      <div
        className="bg-gradient-to-b from-black to-primary/5 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to top, black, transparent), linear-gradient(to bottom, black, transparent)",
        }}
      >
        <div className="container py-16 py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* services info */}
            <div className="flex justify-center flex-col">
              <div className="text-left space-y-7 lg:max-w-[400px]">
                <motion.h1
                  className="text-3xl lg:text-4xl font-bold"
                  variants={SlidUp(0.3)}
                  initial="initial"
                  whileInView="animate"
                >
                  Services
                </motion.h1>
                <motion.p
                  className="text-white/70"
                  variants={SlidUp(0.5)}
                  initial="initial"
                  whileInView="animate"
                >
                  I am a Frontend Developer with a focus on creating optimized,
                  responsive, and visually appealing web applications. My
                  approach combines problem-solving skills with a deep
                  understanding of modern web frameworks.
                </motion.p>
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => {
                      const projectssSection =
                        document.getElementById("priects");
                      if (projectssSection) {
                        projectssSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-white text-primary rounded font-bold px-5 py-3 text-xs md:text-base hover:red-shadow"
                    variants={SlidUp(0.7)}
                  initial="initial"
                  whileInView="animate"
                  >
                    View Projects
                  </motion.button>
                  <a href="./Resume.pdf">
                    <motion.button
                      className="border border-white/50 rounded-lg px-4 text-xs md:text-base flex items-center gap-2 py-3"
                      variants={SlidUp(0.9)}
                      initial="initial"
                      whileInView="animate"
                    >
                      <FiDownload /> Download Resume
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
            {/* services cards  */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ServicesData.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={SlidUp(service.delay)}
                    initial="initial"
                    whileInView="animate"
                   
                    // transition={{ duration: 0.1, delay: service.delay }}
                    className="flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl"
                  >
                    <div className="text-primary/80 bg-white/70 rounded-full p-2">
                      {service.icon}
                    </div>
                    <h1 className="text-2xl font-bold">{service.title}</h1>
                    <p className="text-sm text-white/70">{service.descr}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
