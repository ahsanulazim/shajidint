"use client"
import { createContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation";


export const NavContext = createContext()

export default function MyContext({ children }) {


  const path = usePathname();
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    setNavbar(!path.startsWith("/dashboard"))

  }, [path]);

  return (
    <NavContext value={navbar}>
      {children}
    </NavContext>
  )
}
