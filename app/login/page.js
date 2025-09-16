"use client";

import Loader from "@/Components/Loader";
import { NavContext } from "@/context/MyContext";
import auth from "@/Firebase/firebase.config";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { toast } from "react-toastify";

export default function Login() {
  const { user, handleLogin } = useContext(NavContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // If user is already logged in, redirect to dashboard
      router.push("/dashboard");
    }
  }, [user]);

  //Validate and process login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) ? "" : "Invalid email format";
  };

  const validatePassword = (value) => {
    return value.length >= 6 ? "" : "Password must be at least 6 characters";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
  };

  // Check if email exists in Firebase Auth

  const checkEmailExists = async (email) => {
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      return methods.length > 0;
    } catch (error) {
      return false;
    }
  };

  //Login handler

  const processLogin = async (e) => {
    e.preventDefault();

    // Step 1: Sync validation
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    // Step 2: Check if email exists
    const exists = await checkEmailExists(email);
    if (!exists) {
      toast.error("Email not registered.");
      return;
    }

    // Step 3: Proceed with login
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
              required
              onChange={handleEmailChange}
              placeholder="Email"
              autoComplete="email"
              name="email"
            />
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <label className="label">Password</label>
          <label className="input">
            <IoKeyOutline className="opacity-50" />
            <input
              type="password"
              required
              onChange={handlePasswordChange}
              placeholder="Password"
              name="password"
            />
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <button type="submit" className="btn btn-success mt-4 rounded-md">
            Login
          </button>
        </form>
      </main>
    </>
  );
}
