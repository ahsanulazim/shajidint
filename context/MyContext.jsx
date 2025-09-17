"use client"
import { createContext, useEffect, useState } from "react"
import { redirect, usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "@/Firebase/firebase.config";
import { toast } from "react-toastify";


export const NavContext = createContext()

export default function MyContext({ children }) {

  const serverUrl = "http://localhost:5000";
  const path = usePathname();
  const router = useRouter();
  const [navbar, setNavbar] = useState(true);
  const [footer, setFooter] = useState(true);


  useEffect(() => {
    const isDashboard = path.startsWith("/dashboard");
    setNavbar(!isDashboard);
    setFooter(!isDashboard);

  }, [path]);

  // Firebase Auth
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // Monitor auth state
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
      setLoading(false);
    });
    return () => observer();
  }, [])


  //Login handler

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user);
        toast.success("Login Successful!");
        router.push("/dashboard");
        // ...
      })
      .catch((error) => {
        toast.error("Wrong Email/Password");
      });
  }

  //Logout handler
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      router.push("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }


  const data = { navbar, footer, user, handleLogin, handleLogout, loading, serverUrl };

  return (
    <NavContext value={data}>
      {children}
    </NavContext>
  )
}
