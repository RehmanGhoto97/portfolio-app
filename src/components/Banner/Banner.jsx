"use client";

import React from "react";
import Image from "next/image";
import grainImg from "./../../assets/grains.png";
import main2Img from "./../../assets/re-banner-2.JPG";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { SlidUp } from "./../Hero/Hero";

const BgGrain = {
  backgroundImage: `url(${grainImg.src})`,
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <section id="banner" className="bg-black text-white">
      <div className="container pb-10">
        <div
          style={BgGrain}
          className="bg-gray-950 rounded-3xl 
          py-14 px-5 grid grid-cols-1
           md:grid-cols-2 space-y-2 md:space-y-0 translate-y-36"
        >
          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-end justify-center"
            // style={{ opacity: 1, willChange: "auto" }}
          >
            <Image
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src={main2Img}
              alt="A person portrait"
              width={1024} // Adjust the width and height as needed
              height={1025}
              className="w-[300px] lg:w-[400px]"
              style={{ color: "transparent" }}
            />
          </motion.div>
          {/* Banner Info */}
          <div className="flex flex-col justify-center">
            <div className="text-left space-y-7 lg:max-w-[400px]">
              <motion.h1
                variants={SlidUp(0.3)}
                initial="initial"
                whileInView="animate"
                className="text-3xl lg:text-4xl font-bold"
              >
                I am a Frontend Developer
              </motion.h1>
              <motion.p
                className="text-white/70"
                variants={SlidUp(0.7)}
                initial="initial"
                whileInView="animate"
              >
                {
                  "  Driven by a commitment to excellence in frontend development, I leverage modern JavaScript frameworks like React.js to create interactive, user-focused applications. Over the past year, I’ve improved web app responsiveness by 30% and boosted engagement by 20% through custom UI enhancements and optimized design. Let’s connect and turn ideas into engaging, high-quality digital solutions!"
                }
              </motion.p>
              <div className="flex items-center gap-4">
                <motion.button
                  variants={SlidUp(0.9)}
                  initial="initial"
                  whileInView="animate"
                  className="btn text-xs py-3 md:text-base"
                  onClick={() => {
                    const servicesSection = document.getElementById("services");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Know more
                </motion.button>

                <a href="./Resume.pdf">
                  {" "}
                  <motion.button
                    variants={SlidUp(0.3)}
                    initial="initial"
                    whileInView="animate"
                    className="border border-white/50 rounded-lg
                   px-4 text-xs md:text-base flex items-center gap-2 md:py-3"
                  >
                    <FiDownload />
                    Download Resume
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
