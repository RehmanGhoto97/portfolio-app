import React from "react";
import { navLinks } from "../Navbar/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";


const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div className="md:hidden">
      <div
        className={`fixed top-0  z-[999] bg-black text-white flex flex-col ${
          showMenu ? "left-0" : "-left-[100%]"
        } justify-between h-screen w-[75%] pt-16 pl-10 duration-300 md:hidden rounded-r-xl shadow-md`}
      >
        {/* menu section */}
        <div className="mt-10">
          <ul>
            {navLinks.map((link) => (
              <li className="py-6" key={link.id}>
                <Link
                  href={link.link}
                  className="text-2xl font-medium text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* menu footer section */}
        <div>
          <p>Made with 💖 by AR</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
