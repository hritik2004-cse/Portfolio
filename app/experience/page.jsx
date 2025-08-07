"use client"
import { motion } from 'framer-motion'

const experience = () => {
  return (
    <motion.section 
      initial={{opacity:0}} 
      animate={{
        opacity:1,
        transition:
        {delay:2.4, duration:0.4, ease:"easeIn"}
        }}>
      experience
    </motion.section>
  )
}

export default experience
