"use client";

import { NavContext } from "@/context/MyContext";
import Link from "next/link";
import { useContext } from "react";
import {
  FaArrowRightToBracket,
  FaBell,
  FaGear,
  FaMoon,
  FaSun,
  FaUser,
} from "react-icons/fa6";
import Notification from "./Notification";

export default function NavDash({ logout }) {
  const { user, currentUser, isDark, setIsDark } = useContext(NavContext);

  const themeHandler = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <header className="navbar bg-base-300 w-full">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="mx-2 px-2">
          <Link href="/">
            {isDark ? (
              <img
                className="w-full max-w-28 md:max-w-32"
                src="/shajidintDark.svg"
                alt="Shajid International Logo"
              />
            ) : (
              <img
                className="w-full max-w-28 md:max-w-32"
                src="/shajidint.svg"
                alt="Shajid International Logo"
              />
            )}
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FaBell className="size-5" />
                <div className="inline-grid *:[grid-area:1/1]">
                  <div className="status status-error animate-ping"></div>
                  <div className="status status-error"></div>
                </div>
              </div>
            </button>
            <Notification />
          </div>
          <div className="dropdown dropdown-end ms-3">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {currentUser && currentUser.profilePic ? (
                  <img alt={user?.displayName} src={currentUser.profilePic} />
                ) : (
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="text-xs">
                        {user?.displayName.slice(0, 1)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="menu-title">
                {user ? `Hi, ${user?.displayName?.split(" ")[0]}` : "User"}
              </li>
              <li>
                <Link href="/dashboard/profile">
                  <FaUser /> Profile
                </Link>
              </li>
              <li>
                <button onClick={themeHandler}>
                  {isDark ? (
                    <>
                      <FaSun />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <FaMoon /> Dark Mode
                    </>
                  )}
                </button>
              </li>
              <li>
                <Link href="/dashboard/settings">
                  <FaGear />
                  Settings
                </Link>
              </li>
              <li>
                <button onClick={logout}>
                  <FaArrowRightToBracket /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
