"use client"
import React from "react";
import Image from "next/image";
import { easeOut, motion } from "motion/react";
import { cn } from "@/lib/utils";
export const LandingImages = () => {
  return (
    <div className="relative">
    <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full pt-20 md:pt-0 perspective-distant translate-x-10 md:translate-x-28">
      <motion.div 
      initial={{
        opacity : 0 ,
        y : -100
      }}
      animate={{
        opacity : 1 ,
        y : 0
      }}
      transition={{
        duration: 0.5 ,
        ease : "easeOut"
      }}
      className="perspective-[4000px] pt-28 md:pt-0 ">
        <Image
          src="https://assets.aceternity.com/screenshots/4.jpg"
          alt="Demo for agenforce template "
          height={1080}
          width={1920}
          className={cn("absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl select-none pointer-events-none")}
          style={{
            transform : "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"
          }}
        />
      </motion.div>
      <motion.div 
      initial={{
        opacity : 0 ,
        y : -100

      }}
      animate={{
        opacity : 1 ,
        y : 0
      }}
      transition={{
        duration: 0.5 ,
        ease : "easeOut" ,
        delay : 0.1
 
      }}
      className="perspective-[4000px] translate-x-10 -translate-y-40">
        <Image
          src="https://assets.aceternity.com/screenshots/3.jpg"
          alt="Demo for agenforce template "
          height={1080}
          width={1920}
          className="absolute inset-0 -translate-x-10 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none pointer-events-none"
          style={{
            transform : "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"
          }}
        />
      </motion.div>
    </div>
    </div>
  );
};
