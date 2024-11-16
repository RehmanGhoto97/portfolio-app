"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import sendEmail from "./../../assets/send-email.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j0vj6hd",
        "template_89ffwte",
        e.target,
        "ImjOkseHbF_Nc_yNY"
      )
      .then(
        (result) => {
          console.log(result.text, "SUCCESS!");
          alert("Email sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to sent email.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
         initial={{ opacity: 0.1 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center items-center"
          style={{ opacity: 1, willChange: "auto" }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-t from-black to-primary/45 p-8 rounded-xl text-white w-full max-w-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
            <div className="mb-4">
              <label className="block text-white/70">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white/70">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300
           rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white/70">Message</label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                name="message"
                className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black text-white"
              ></textarea>
            </div>
            <button type="submit" className="btn mt-4 px-8">
              Send Email
            </button>
          </form>
        </motion.div>
        <div className="hidden md:flex justify-center items-center">
          <Image
            loading="lazy"
            decoding="async"
            data-nimg="1"
            src={sendEmail}
            alt="send email"
            width={722} 
            height={491}
            className="w-[300px] lg:w-[400px] animate-rocket"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
