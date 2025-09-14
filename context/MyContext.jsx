"use client"
import { createContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation";


export const NavContext = createContext()

export default function MyContext({ children }) {


  const path = usePathname();
  const [navbar, setNavbar] = useState(true);
  const [footer, setFooter] = useState(true);


  useEffect(() => {
    const isDashboard = path.startsWith("/dashboard");
    setNavbar(!isDashboard);
    setFooter(!isDashboard);

  }, [path]);

  return (
    <NavContext value={navbar}>
      {children}
    </NavContext>
  )
}
