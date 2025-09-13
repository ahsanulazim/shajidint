'use client'

import { redirect, useRouter } from 'next/navigation'
import { FaRegEnvelope } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";

export default function Login() {
  const router = useRouter()

  function handleLogin(e) {
    e.preventDefault();
    redirect("/dashboard");
  }

  return (
    <>
      <main className="h-dvh bg-bgCustom flex flex-col justify-center items-center pt-[80px]">
        <form
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
          onSubmit={handleLogin}
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
            />
          </label>

          <label className="label">Password</label>
          <label className="input">
            <IoKeyOutline className="opacity-50" />
            <input type="password" required placeholder="Password" />
          </label>

          <button type="submit" className="btn btn-success mt-4 rounded-md">
            Login
          </button>
        </form>
      </main>
    </>
  );
}
