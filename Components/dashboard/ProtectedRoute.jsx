"use client";
import { useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavContext } from "@/context/MyContext";
import Loader from "../Loader";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(NavContext);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, path]);

  if (loading) return <Loader/>; // Prevent flash of protected content
  if (!user) return null;

  return <>{children}</>;
}