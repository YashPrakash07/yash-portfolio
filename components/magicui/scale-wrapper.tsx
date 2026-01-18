"use client";

import { motion } from "framer-motion";
import React from "react";

export function ScaleWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div whileHover={{ scale: 1.02 }} className={className}>
            {children}
        </motion.div>
    );
}
