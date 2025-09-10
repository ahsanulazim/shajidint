'use client'
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {

    const [glass, setGlass] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setGlass(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <Navbar glass={glass} />
        </>
    )
}
