"use client";

import { motion } from "framer-motion";

interface WavingHandProps {
    delay?: number;
}

export function WavingHand({ delay = 0 }: WavingHandProps) {
    return (
        <motion.span
            className="animate-wave origin-bottom-right inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay, duration: 0.2, ease: "easeOut" }}
        >
            👋
        </motion.span>
    );
}
