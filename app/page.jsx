"use client"
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Blob from '@/components/Blob';
import {MdArrowOutward} from 'react-icons/md';
import {HiOutlinePhone,HiOutlineMail} from 'react-icons/hi';
import Image from 'next/image';
import avatarImg from '@/public/assets/avatar.png'
import Socials from '@/components/Socials';
import Pattern from '@/components/Pattern';

const Home = () => {
  return (
    <motion.section 
      initial={{opacity:0}} 
      animate={{
        opacity:1,
        transition:
        {delay:2.4, duration:0.4, ease:"easeIn"}
        }}
        className='h-screen flex items-center '>
          <Pattern/>
          <div className='flex flex-col xl:flex-row items-center justify-between w-full'>
            <div className='w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left'>
              <h1 className='h1 flex-1 mb-[28px]'>Hi! I'm Hritik,<br/>
                <TypeAnimation 
                  sequence={["Web Developer", 2000,"Web Designer",2000]} 
                  wrapper='span' 
                  speed={40} 
                  className='text-accent'
                  repeat={Infinity}
                  cursor={false}
                  />
              </h1>
              <p className='max-w-[500px] mb-[44px]'>
                I create visually appealing, user-friendly websites and web apps. Always try my best to do wonders.
              </p>
              {/* contact button  */}
              <button className='btn btn-lg btn-accent mb-16'>
                <div className='flex items-center gap-3 '>
                  <span>Let's talk</span>
                  <MdArrowOutward className='text-xl'/>
                </div>
              </button>
              <div className='flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0'>
                {/* phone  */}
                <div className="flex items-center gap-4 text-lg">
                  <span className='text-accent'>
                    <HiOutlinePhone className='text-xl'/>
                  </span>
                  <span>
                    +91 9548474709
                  </span>
                </div>
                {/* email  */}
                <div className="flex items-center gap-4 text-lg">
                  <span className='text-accent'>
                    <HiOutlineMail className='text-xl'/>
                  </span>
                  <span>
                    hritiksharma08725@gmail.com
                  </span>
                </div>
              </div>
              <Socials containerStyles='flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-7 2xl:transform 2xl:translate-x-1/2 2xl:-translate-y-1/2' iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"/>
            </div>
            <div className='flex-1 xl:block hidden relative z-20'>
              <Blob containerStyles="w-[560px] h-[560px]"/>
              <Image 
              src={avatarImg} 
              alt='a person having a purple shirt facing towards you '
              width={450}
              height={600} 
              quality={100}
              className='absolute -top-15 left-[140px]'
              />
            </div>
          </div>
    </motion.section>
  )
}

export default Home
