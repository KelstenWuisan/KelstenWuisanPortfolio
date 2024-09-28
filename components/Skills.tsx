"use client"
import React from 'react'
import {motion} from "framer-motion";
import Skill from './Skill';
import Skill2 from './Skill2';

type Props = {
}

const Skills = (props: Props) => {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:spce-y0 mx-auto items-center'>
        <h3 className='absolute xl:top-24 uppercase tracking-[20px] text-white text-2xl top-36'>
            Skills
        </h3>

        <h3 className='absolute xl:top-48 uppercase tracking-[3px] text-white text-sm top-56'>
            Hover to the skill icon for more detail
        </h3>

        <div className='grid grid-cols-4 gap-3 pt-36 xl:gap-10'>
            <Skill imgUrl="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" skillName="HTML CSS" skillLevel="80%" />
            <Skill imgUrl="https://cdn-icons-png.flaticon.com/128/3334/3334886.png" skillName="React" skillLevel="85%" />
            <Skill imgUrl="https://cdn-icons-png.flaticon.com/128/5968/5968705.png" skillName="Figma" skillLevel="75%" />
            <Skill imgUrl="https://cdn-icons-png.flaticon.com/128/16845/16845814.png" skillName="JavaScript" skillLevel="85%" />
            <Skill2 imgUrl="https://cdn-icons-png.flaticon.com/128/10900/10900763.png" skillName="MySQL" skillLevel="70%" />
            <Skill2 imgUrl="https://cdn-icons-png.flaticon.com/128/3098/3098090.png" skillName="Python" skillLevel="65%" />
            <Skill2 imgUrl="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" skillName="C" skillLevel="60%" />
            <Skill2 imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" skillName="Laravel" skillLevel="75%" />
        </div>
    </motion.div>
  )
}

export default Skills