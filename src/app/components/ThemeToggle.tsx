"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
const { theme, setTheme } = useTheme();

return (
    <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded-full bg-gray-200 dark:bg-[#0B0B0F] transition"
    >
        {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800" />
        ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
        )}
    </button>
    );
}
