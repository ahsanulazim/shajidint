'use client'

import { createContext, useEffect } from "react";

export const VisitorContext = createContext(null);

export const VisitorProvider = ({ children }) => {

    const serverUrl = process.env.NEXT_PUBLIC_API_BASE;

    useEffect(() => {
        const alreadyTracked = localStorage.getItem("visitorTracked");
        if (alreadyTracked) return;

        const deviceType = /Mobi|Android/i.test(navigator.userAgent)
            ? "mobile"
            : "desktop";

        fetch(`${serverUrl}/visitors/track-visitor`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ deviceType }),
        }).then(() => {
            localStorage.setItem("visitorTracked", "true");
        });
    }, []);

    return <VisitorContext value={null}>
        {children}
    </VisitorContext>;
};