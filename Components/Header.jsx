'use client'
import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import { NavContext } from "@/context/MyContext";

export default function Header() {

    const {navbar} = useContext(NavContext)
    const [glass, setGlass] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
      setGlass(window.scrollY > 80);
    };

        if(pathname === "/"){
            setGlass(false);
             window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }else{
        setGlass(true);
    }
    }, [pathname]);




    return (
        <>
            {navbar&&<Navbar glass={glass} />}
        </>
    )
}
