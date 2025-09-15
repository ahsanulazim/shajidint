"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NavContext } from "@/context/MyContext";
import Loader from "../Loader";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(NavContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) return <Loader/>; // Prevent flash of protected content

  return <>{children}</>;
}