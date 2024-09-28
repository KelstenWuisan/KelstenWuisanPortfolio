"use client"
import React from 'react'
import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import phone and location icons

type Props = {}

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-8 uppercase tracking-[20px] text-white text-2xl'>
        About me
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        src="https://i.imgur.com/UJcqUng.jpeg"
        className="-mb-2 md:mt-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] mt-20 xl:ml-48 xl:mt-2"
      />

      <div className='space-y-6 mt-16 px-0 md:px-10 xl:mt-2'>
        <h4 className='text-3xl font-semibold mt-2'>
          My Background
        </h4>
        <h4 className='font-light xl:mr-28 mt-1'>
          I am a 5th semester student at Bina Nusantara University, majoring in Computer Science with a specialization in Intelligent Systems 
          and Artificial Intelligence. Throughout my time at BINUS, I have served as a freshmen leader and partner, which has helped me improve 
          my leadership and communication skills. My main interests lie in data science and web programming, and I am passionate about exploring 
          more about Computer Science.
        </h4>

        {/* My Contact Section */}
        <div className="mt-10">
          <h4 className='font-semibold -mt-3'>My Contact</h4>
          <div className='flex flex-col mt-2'>
            <a href="mailto:kelsten.wuisan3@gmail.com" className='flex items-center space-x-2 hover:text-blue-400'>
              <FaEnvelope />
              <span>Email: kelsten.wuisan3@gmail.com</span>
            </a>
            <a className='flex items-center space-x-2'>
              <FaPhone />
              <span>Phone: +62 812-1642-8883</span>
            </a>
            <a href="https://www.linkedin.com/in/kelsten-wuisan" className='flex items-center space-x-2 hover:text-blue-400'>
              <FaLinkedin />
              <span>LinkedIn: Kelsten Wuisan</span>
            </a>
            <a href="https://github.com/kelstenwuisan" className='flex items-center space-x-2 hover:text-blue-400'>
              <FaGithub />
              <span>GitHub: Kelsten Wuisan</span>
            </a>
            <div className='flex items-center space-x-2'>
              <FaMapMarkerAlt />
              <span>Location: Tangerang Selatan, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
