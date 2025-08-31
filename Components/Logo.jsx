"use client"
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext";

export default function Logo() {

    const { theme } = useContext(ThemeContext);

    return (
        <img src={theme ? "/Shajid-International-Logo.svg" : "/Shajid-International-Logo-dark.svg"} alt="Shajid International Logo" className="w-full max-w-32" />
    )
}
