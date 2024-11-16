import React from "react";
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import ContactForm from "@/components/ContactForm/ContactForm";

const page = () => {
  return (
    <main className="text-white bg-black">
      <Hero />
      <Banner />
      <div className="pt-40">
        <Services />
      </div>
      <Projects />
      <ContactForm />
    </main>
  );
};

export default page;
