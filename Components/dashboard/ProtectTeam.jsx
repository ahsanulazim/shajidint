"use client";

import { NavContext } from "@/context/MyContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Loader from "../Loader";

export default function ProtectTeam({ children }) {
  const router = useRouter();
  const { user, currentUser } = useContext(NavContext);
  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user && !currentUser) return setChecking(true);

    if (currentUser?.role !== "Admin") {
      router.push("/dashboard");
      return;
    }

    setAllowed(true);
    setChecking(false);
  }, [user, currentUser]);

  if (checking || !allowed) return <Loader />;

  return <>{children}</>;
}
