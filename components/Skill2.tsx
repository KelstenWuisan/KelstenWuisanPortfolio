"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionRight?: boolean;
  imgUrl: string;
  skillName: string;
  skillLevel: string;
};

function Skill2({ directionRight, imgUrl, skillLevel, skillName }: Props) {
  return (
    <motion.div
      initial={{
        x: directionRight ? 200 : -200, // Handles direction based on the prop
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group relative flex cursor-pointer"
    >
      <div
        className="rounded-full border border-gray-300 h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 flex items-center justify-center
        transition duration-300 ease-in-out group-hover:scale-110"
      >
        <img
          src={imgUrl}
          className="object-cover w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </div>
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24
        md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-sm font-bold text-black opacity-100">{skillName}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill2;