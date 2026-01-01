"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { DATA } from "@/app/data/resume";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
    const { setTheme, theme } = useTheme();

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
            <div className="z-50 mx-auto flex h-full items-center justify-center gap-2 rounded-full border bg-background px-4 pointer-events-auto">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "rounded-full"
                            )}
                        >
                            <Icons.home className="size-4" />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Home</p>
                    </TooltipContent>
                </Tooltip>

                <Separator orientation="vertical" className="h-6" />

                {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <Tooltip key={name}>
                        <TooltipTrigger asChild>
                            <Link
                                href={social.url}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "rounded-full"
                                )}
                                target="_blank"
                            >
                                <social.icon className="size-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}

                <Separator orientation="vertical" className="h-6" />

                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "rounded-full"
                            )}
                        >
                            <Icons.sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Icons.moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Theme</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
}
