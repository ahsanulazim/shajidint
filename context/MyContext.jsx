"use client"
import { createContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "@/Firebase/firebase.config";


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

  // Firebase Auth
  const [user, setUser] = useState(null);

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return () => observer();
  }, [])


  //Login handler
  const handleLogin = () => {

  }

  //Logout handler
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }


  const data = { navbar, footer, user, handleLogin, handleLogout };

  return (
    <NavContext value={data}>
      {children}
    </NavContext>
  )
}
