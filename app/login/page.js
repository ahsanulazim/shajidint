"use client";

import Loader from "@/Components/Loader";
import { NavContext } from "@/context/MyContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";

export default function Login() {
  const { user, handleLogin } = useContext(NavContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // If user is already logged in, redirect to dashboard
      router.push("/dashboard");
    }
  }, [user]);

  const processLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handleLogin(email, password);
  };
  if (user) return <Loader />;
  return (
    <>
      <main className="h-dvh bg-bgCustom flex flex-col justify-center items-center pt-[80px]">
        <form
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
          onSubmit={processLogin}
        >
          <h1 className="font-bold text-2xl text-center">Login</h1>
          <label className="label">Email</label>
          <label className="input">
            <FaRegEnvelope className="opacity-50" />
            <input
              type="email"
              className="validator"
              required
              placeholder="Email"
              autoComplete="email"
              name="email"
            />
          </label>

          <label className="label">Password</label>
          <label className="input">
            <IoKeyOutline className="opacity-50" />
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
            />
          </label>

          <button type="submit" className="btn btn-success mt-4 rounded-md">
            Login
          </button>
        </form>
      </main>
    </>
  );
}
