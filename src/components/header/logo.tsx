import React from "react";
import { motion } from "framer-motion";

export default function Logo(props: { finishedLoading: boolean }) {
    return (
        <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
            type: "spring",
            y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
            opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        }}
        className="relative h-12 w-10"
        >
        <motion.span
            initial={{ x: 1 }}
            className="absolute h-full w-full flex justify-center items-center text-lg font-bold text-AAsecondary"
        >
            S
        </motion.span>

        <motion.div
            animate={{ rotate: -30, y: 5 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="h-1 w-6 rounded bg-AAsecondary"
        ></motion.div>
        <motion.div
            animate={{ rotate: 90, x: -10, y: 18 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            className="h-1 w-6 rounded bg-AAsecondary"
        ></motion.div>
        <motion.div
            animate={{ rotate: 30, y: 31 }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse" }}
            className="h-1 w-6 rounded bg-AAsecondary"
        ></motion.div>
        <motion.div
            animate={{ rotate: -30, y: 27, x: 19 }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse" }}
            className="h-1 w-6 rounded bg-AAsecondary"
        ></motion.div>
        <motion.div
            animate={{ rotate: 30, x: 19, y: -10 }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
            className="h-1 w-6 rounded bg-AAsecondary"
        ></motion.div>
        <motion.div
            animate={{ rotate: 90, x: 28, y: 2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="h-1 w-6 rounded bg-AAsecondary"
        ></motion.div>
        </motion.div>
    );
}
