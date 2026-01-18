"use client";

import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";
import { useState } from "react";

const quotes = [
    {
        text: "Do so much work that it would be unreasonable for you to not be successful.",
        author: "Alex Hormozi",
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
    },
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
    },
    {
        text: "Code is like humor. When you have to explain it, it’s bad.",
        author: "Cory House",
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
    },
];

export function DailyQuote({ className }: { className?: string }) {
    const [quote] = useState(() => {
        // Calculate day index to select a daily quote
        const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
        return quotes[dayIndex % quotes.length];
    });

    return (
        <div className={cn("flex flex-col items-center justify-center space-y-4 py-12 text-center", className)}>
            <QuoteIcon className="size-8 text-muted-foreground/40 rotate-180" />
            <div className="space-y-2 max-w-[600px]">
                <p className="text-xl md:text-2xl font-serif italic text-muted-foreground text-pretty">
                    &quot;{quote.text}&quot;
                </p>
                <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground/60">
                    — {quote.author}
                </p>
            </div>
        </div>
    );
}
