'use client'
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(true);

    function toggleTheme() {
        setTheme(!theme);
    }

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme === "light" ? true : false);
            document.documentElement.setAttribute("data-theme", localTheme);
        } else {
            setTheme(true);
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme ? "light" : "dark");
        document.documentElement.setAttribute("data-theme", theme ? "light" : "dark");
    }, [theme]);

    return (
        <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
    )
}
