'use client'

import { useContext } from "react";
import Footer from "./Footer";
import { NavContext } from "@/context/MyContext";


export default function FooterWrapper() {

    const { footer } = useContext(NavContext);

    if (!footer) return null;


    return (
        <>
            <Footer />
        </>
    )
}
