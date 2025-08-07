"use client";
import { motion } from "framer-motion";

const Rectangle = () => {
    const rectangleVariants = {
        initial: {
            y: "-100%",
            height: "100%",
        },
        animate: {
            y: "0%",
            height: "0%",
        },
        exit: {
            y: ["0%", "-100%"],
            height: ["0%", "100%"],
        },
    }
    return (
        <>
            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0,
                    duration: 0.6,
                    ease: [0.63, 0, 0.17, 1],
                }}
                className="fixed top-full w-screen z-30 bg-[#1b1b2b]"
            />
            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.25,
                    duration: 0.8,
                    ease: [0.63, 0, 0.17, 1],
                }}
                className="fixed top-full w-screen z-30 bg-[#241e36]"
            />
            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.35,
                    duration:1,
                    ease: [0.63, 0, 0.17, 1],
                }}
                className="fixed top-full w-screen z-30 bg-[#2e2743]"
            />
        </>
    );
};

export default Rectangle
