"use client";

import Link from "next/link";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { toast } from "react-toastify";
import { fetchSignInMethodsForEmail, sendPasswordResetEmail } from "firebase/auth";
import auth from "@/Firebase/firebase.config";
import { useRouter } from "next/navigation";

export default function Forgetpass() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value) ? "" : "Invalid email format";
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    };

    const handleReset = (e) => {
        e.preventDefault();

        fetchSignInMethodsForEmail(auth, email)
            .then((methods) => {
                if (methods.length === 0) {
                    toast.error("No account found with this email");
                } else {
                    return sendPasswordResetEmail(auth, email)
                        .then(() => {
                            toast.success("Password Reset Link Sent");
                            router.push("/login");
                        });
                }
            })
            .catch((error) => {
                toast.error("Something went wrong");
            });
    };




    return (
        <>
            <main className="h-dvh bg-bgCustom flex flex-col justify-center items-center pt-[80px]">
                <form
                    className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
                    onSubmit={handleReset}
                >
                    <h1 className="font-bold text-2xl">Enter Your Email</h1>
                    <p className="text-[16px] text-gray-500">Please enter your email address to get password reset link.</p>
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

                    <div className="flex gap-x-3 mt-5">
                        <Link href="/login" className="">
                            <button type="button" className="btn btn-neutral rounded-md">Cancel</button>
                        </Link>
                        <button type="submit" className="btn btn-success rounded-md ">Send</button>
                    </div>
                </form>

            </main>
        </>
    );
}
