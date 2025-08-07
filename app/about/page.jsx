"use client"
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'
import Stats from '@/components/Stats'
import Info from '@/components/Info'
import Journey from '@/components/Journey'
import Skills from '@/components/Skills'
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition:
          { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='h-screen flex items-center lg:mt-0 mt-15'
    >
      <div className="container mx-auto p-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          <div className="hidden xl:flex w-full bg-pink-50/10 h-full pt-14 max-w-[430px] relative ">1</div>
          <ScrollArea className="w-full h-[680px] p-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className='text-3xl font-bold text-accent'>About me</p>
              </div>
              <h2 className='h2 mb-6'>
                <span className="text-accent">Hritik </span>
                Sharma
              </h2>
              <p className='max-w-[540px] mb-12'>
                I'm Hritik Sharma, a Computer Science student passionate about coding, creativity, and community. As co-founder of Nova Coders, I love building impactful tech solutions, exploring new ideas, and inspiring growth through collaboration, learning, and real-world problem-solving.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats/>
                <Info/>
                <Journey/>
                <Skills/>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  )
}

export default About
