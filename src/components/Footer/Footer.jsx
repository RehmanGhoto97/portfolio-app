import React from "react";
import { motion } from "framer-motion";

import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import redBg2 from "./../../assets/redbg2.png";

const bgStyle = {

  backgroundImage: `url(${redBg2.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center right", // Corrected background position
  backgroundRepeat: "no-repeat",
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container">
     <div  
     className="bg-black rounded-2xl"
     style={bgStyle}>
     <div
        style={{backgroundImage: " linear-gradient(to left, black, transparent)",  opacity: 1, willChange:"auto"}}
          className=" text-white py-12 px-4 border-2 border-primary hover:red-shadow rounded-2xl
           flex flex-col lg:flex-row gap-8 justify-around items-center duration-300"
        >
          <div className="space-y-3 md:flex sm:flex md:flex-col">
            <h2 className="text-3xl font-bold font-satisfy text-black">Abdul Rehman</h2>
            <p>ghotogtk02@gmail.com</p>
            <p>copyright © 2024 Abdul Rehman</p>
          </div>
          <div className="flex items-center gap-3 lg:gap-10">
            <div>
              <a
                href="https://linkedin.com/in/abdul-rehman-062715188"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="text-4xl" />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/923052730732"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-4xl" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/people/Abdul-Rehman/pfbid0HocTB9mJ3isNBLNSE54fjEv4J3FFxvrDzTpivxWNHmeLqjT6ico1cPfVQxvSxx3dl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
     </div>
      </div>
    </footer>
  );
};

export default Footer;
