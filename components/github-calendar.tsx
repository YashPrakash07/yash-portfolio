"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export default function GithubCalendarComponent({ username }: { username: string }) {
    const { theme } = useTheme();

    return (
        <div className="flex w-full items-center justify-center p-4 overflow-x-auto">
            <GitHubCalendar
                username={username}
                colorScheme={theme === "dark" ? "dark" : "light"}
                blockSize={12}
                blockMargin={5}
                fontSize={16}
            />
        </div>
    );
}
