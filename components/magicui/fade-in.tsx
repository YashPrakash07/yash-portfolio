"use client";

import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

export const FadeIn = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};
