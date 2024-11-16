"use client";
import wall from "./../../assets/wall.jpg";
import Image from "next/image";
import React from "react";
import circleImg from "./../../assets/red.png";
import redManImg from "./../../assets/rehman.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const wallBackground = {
  backgroundImage: `url(${wall.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export const SlidUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const paraStyle = {
  opacity: 1,
  willChange: "auto",
  transform: "none",
};

const Hero = () => {
  return (
    <section className="bg-black text-white" style={wallBackground}>
      <div
        className="bg-gradient-to-b  from-primary/50
       to-black"
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* Brand Info */}
          <div
            className="flex flex-col justify-center 
          md:text-left py-14 md:pr-3 ms:px-1 md:py-0"
          >
            <div className="text-center md:text-left space-y-6">
              <motion.p
                variants={SlidUp(0.3)}
                initial="initial"
                animate="animate"
                className="text-4xl"
                style={paraStyle}
              >
                {"Hello, I'm"}
              </motion.p>
              <motion.p
                variants={SlidUp(0.5)}
                initial="initial"
                animate="animate"
                className="text-5xl lg:text-7xl font-satisfy text-outline"
                style={paraStyle}
              >
                Abdul Rehman
              </motion.p>
              <motion.p
                variants={SlidUp(0.7)}
                initial="initial"
                animate="animate"
                className="text-sm leading-snug"
                style={paraStyle}
              >
                As a Frontend Developer with a passion for crafting seamless
                digital experiences, I specialize in building responsive,
                high-performance applications with React.js and JavaScript. With
                a background in mathematics, I bring a logical approach to
                solving complex UI challenges and delivering user-friendly
                interfaces. My commitment to continuous improvement drives me to
                stay updated on the latest web technologies to ensure optimal
                results.
              </motion.p>
              <motion.button
                variants={SlidUp(0.9)}
                initial="initial"
                animate="animate"
                className="btn"
                style={paraStyle}
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("banner").offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                Know More
              </motion.button>

              {/* states section */}
              <motion.div
                variants={SlidUp(1.1)}
                initial="initial"
                animate="animate"
                className="flex justify-around bg-gradient-to-b
               from-primary/50 to-black border-primary/80
                rounded-xl hover:red-shadow hover:scale-105
                 duration-300 md:max-w-[400px] !mt-[44px] p-4 border-2"
              >
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp
                      end={2}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollSpy
                    />
                  </p>
                  <p className="text-sm">Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp
                      end={14}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollSpy
                    />
                  </p>
                  <p className="text-sm">Projects</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp
                      end={5}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollSpy
                    />
                  </p>
                  <p className="text-sm">Clients</p>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center md:justify-end 
          items-center relative"
          >
            <div
              className="bg-black rounded-3xl
             overflow-hidden h-[500px] flex items-end
              relative group hover:red-shadow hover:scale-105 duration-700"
            >
              <Image
                src={circleImg}
                alt="A red circle"
                className="absolute top-4 -left-0 group-hover:animate-pulse duration-300 -z-0 animate-spin-superslow"
                loading={"lazy"}
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                width={500}
                height={500}
              />
              <Image
                src={redManImg}
                alt="A red silhouette of a man"
                className="w-[400px] relative z-10 group-hover:grayscale group-hover:scale-90 duration-700"
                loading={"lazy"}
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
