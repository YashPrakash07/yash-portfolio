"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface LetterPullupProps {
    className?: string;
    words: string;
    delay?: number;
}

export default function LetterPullup({
    className,
    words,
    delay,
}: LetterPullupProps) {
    const letters = Array.from(words);

    const pullupVariant = {
        initial: { y: 100, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05 + (delay ?? 0), // By default, delay each letter's animation by 0.05 seconds
                duration: 0.2, // Faster animation
            },
        }),
    };

    return (
        <div className="flex">
            {letters.map((letter, i) => (
                <motion.h1
                    key={i}
                    variants={pullupVariant}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    className={cn(
                        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl md:leading-[5rem]",
                        className,
                    )}
                >
                    {letter === " " ? <span>&nbsp;</span> : letter}
                </motion.h1>
            ))}
        </div>
    );
}
