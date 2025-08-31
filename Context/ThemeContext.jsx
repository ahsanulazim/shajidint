'use client'
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(true);

    function toggleTheme() {
        setTheme(prev => !prev);
    }

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme === "light");
            document.documentElement.setAttribute("data-theme", localTheme);
        } else {
            setTheme(true);
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    useEffect(() => {
        const currentTheme = theme ? "light" : "dark";
        localStorage.setItem("theme", currentTheme);
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [theme]);

    return (
        <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
    )
}
