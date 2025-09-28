"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "@/Firebase/firebase.config";
import { toast } from "react-toastify";

export const NavContext = createContext();

export default function MyContext({ children }) {
  const serverUrl = process.env.NEXT_PUBLIC_API_BASE;
  const path = usePathname();
  const router = useRouter();
  const [navbar, setNavbar] = useState(true);
  const [footer, setFooter] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

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

        //fetch user data from MongoDB
        const email = user.email;

        //current user data from mongodb and backend

        if (!email) return;

        fetch(`${serverUrl}/users/${email}`)
          .then((res) => res.json())
          .then((data) => setCurrentUser(data))
          .catch((err) => {
            setCurrentUser(null);
          });

        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return () => observer();
  }, []);

  //Login handler

  const handleLogin = (email, password, setLoading) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setLoading(false);
        toast.success("Login Successful!");
        router.push("/dashboard");
        // ...
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Wrong Email/Password");
      });
  };

  //Logout handler
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        router.push("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //dashboard context
  const [isDark, setIsDark] = useState(false);
  const [msgs, setMsgs] = useState(null);
  const themeToggler = useRef(null);

  useEffect(() => {
    if (!themeToggler?.current) return;
    themeToggler.current.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  //Msg fetch
  useEffect(() => {
    fetch(`${serverUrl}/msgs`)
      .then((res) => res.json())
      .then((data) => setMsgs(data));
  }, []);

  //Massage Data for Chart

  // Dummy fallback for last 7 days
  const generateDummyStats = () => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (6 - i));
      const date = d.toLocaleDateString("en-BD", {
        timeZone: "Asia/Dhaka",
        day: "numeric",
        month: "short",
      });
      return {
        rawDate: d.toISOString().split("T")[0],
        count: 0,
      };
    });
  };

  const [stats, setStats] = useState([generateDummyStats()]);

  useEffect(() => {
    fetch(`${serverUrl}/msgs/stats/all`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data
          .filter((item) => item.date)
          .map((item) => ({
            rawDate: new Date(item.date).toISOString().split("T")[0],
            count: item.count,
          }));

        const last7Days = generateDummyStats();

        const merged = last7Days.map((day) => {
          const match = formatted.find((f) => f.rawDate === day.rawDate);
          return {
            date: new Date(day.rawDate).toLocaleDateString("en-BD", {
              timeZone: "Asia/Dhaka",
              day: "numeric",
              month: "short",
            }),
            count: match ? match.count : 0,
          };
        });

        setStats(merged);
      });
  }, []);

  //1 Month Massage Stats Get

  const [massageCount, setMessageCount] = useState(null);
  const [massageGrowth, setMessageGrowth] = useState(null);

  useEffect(() => {
    fetch(`${serverUrl}/msgs/stats/summary`)
      .then((res) => res.json())
      .then(({ currentCount, percentChange }) => {
        setMessageCount(currentCount);
        setMessageGrowth(percentChange);
      });
  }, []);

  //Visitor Tracking Post
  useEffect(() => {
    fetch(`${serverUrl}/visitors/track`, { method: "POST" });
  }, []);

  //Visitor Count Context
  const [visitorData, setVisitorData] = useState([]);

  useEffect(() => {
    fetch(`${serverUrl}/visitors/stats`)
      .then((res) => res.json())
      .then((stats) => {
        const formatted = stats.dateStats.map((d) => ({
          date: new Date(d.date).toLocaleDateString("en-BD"),
          count: d.count,
        }));
        setVisitorData(formatted);
      });
  }, []);

  const data = {
    navbar,
    footer,
    user,
    handleLogin,
    handleLogout,
    loading,
    serverUrl,
    currentUser,
    isDark,
    setIsDark,
    themeToggler,
    msgs,
    stats,
    massageCount,
    massageGrowth,
    visitorData,
  };

  return <NavContext value={data}>{children}</NavContext>;
}
