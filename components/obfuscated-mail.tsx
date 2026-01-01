"use client";

import { cn } from "@/lib/utils";

interface ObfuscatedMailProps extends React.HTMLAttributes<HTMLSpanElement> {
    email: string;
    label?: string;
}

export function ObfuscatedMail({
    email,
    label = "Email Me",
    className,
    ...props
}: ObfuscatedMailProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
    };

    return (
        <span
            onClick={handleClick}
            className={cn("text-blue-500 hover:underline cursor-pointer", className)}
            {...props}
        >
            {label}
        </span>
    );
}
