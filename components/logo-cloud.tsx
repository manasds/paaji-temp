"use client"
import Image from "next/image";
import React from "react";
import { easeOut, motion } from "motion/react";
export const LogoCloud = () => {
  const logos = [
    {
      title: "Open AI",
      src: "https://assets.aceternity.com/logos/openai.png",
    },
    {
      title: "Hello Patient",
      src: "https://assets.aceternity.com/logos/hello-patient.png",
    },
    {
      title: "Granola",
      src: "https://assets.aceternity.com/logos/granola.png",
    },
    {
      title: "Character AI",
      src: "https://assets.aceternity.com/logos/characterai.png",
    },
    {
      title: "Oracle",
      src: "https://assets.aceternity.com/logos/oracle.png",
    },
    {
      title: "Portola",
      src: "https://assets.aceternity.com/logos/portola.png",
    },
  ];
  return (
    <section className="pb-10 md:pb-10">
      <h2 className="text-neutral-600 dark:text-neutral-400 font-medium text-lg text-center max-w-xl mx-auto">
        Trusted by Modern Operators Across Industries. <br />
        <span className="text-neutral-400 ">From pilot to scale without chaos.</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto mt-10">
      {logos.map((logo, idx) => (
        <motion.div
        initial={{
          opacity : 0 ,
          y: -10 ,
          filter : "blur(10px)"
        }}
        whileInView={{
          opacity : 1 ,
          y: 0 ,
          filter : "blur(0px)"
        }}
        transition={{
          duration : 0.5 ,
          delay : idx*0.1 ,
          ease : "easeOut"
        }}
        
        
        >
          <Image
          src={logo.src}
          key={logo.title}
          alt={logo.title}
          height={100}
          width={100}
          className="size-20 object-contain mx-auto dark:filter dark:invert"
          />
          </motion.div>
        ))}
        </div>
    </section>
  );
};
