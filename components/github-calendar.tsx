"use client";

import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";

export default function GithubCalendarComponent({ data }: { data: Array<{ date: string, count: number, level: number }> }) {
    const { theme } = useTheme();

    return (
        <div className="flex w-full items-center justify-center p-4 overflow-x-auto">
            <ActivityCalendar
                data={data}
                theme={{
                    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                colorScheme={theme === "dark" ? "dark" : "light"}
                blockSize={12}
                blockMargin={5}
                fontSize={16}
            />
        </div>
    );
}
