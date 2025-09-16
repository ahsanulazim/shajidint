"use client";

import ProtectedRoute from "@/Components/dashboard/ProtectedRoute";
import Skeleton from "@/Components/dashboard/Skeleton";
import { NavContext } from "@/context/MyContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import {
  FaArrowRightToBracket,
  FaBell,
  FaCircleQuestion,
  FaFileZipper,
  FaGear,
  FaUser,
  FaUserGroup,
} from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { RiLayout2Fill } from "react-icons/ri";

export default function RootLayout({ children }) {
  const { user, handleLogout } = useContext(NavContext);

  const logout = () => {
    handleLogout();
  };

  return (
    <>
      <ProtectedRoute>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col bg-[#F1F4F6]">
            {/* Navbar */}
            <header className="navbar bg-white w-full border-b border-b-gray-300">
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
              <div className="mx-2 flex-1 px-2">
                <Link href="/">
                  <Image
                    src="/Shajid-International-Logo.svg"
                    alt="Shajid International Logo"
                    width={128}
                    height={34}
                    className="w-full max-w-28 md:max-w-32"
                  />
                </Link>
              </div>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <button
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <FaBell className="size-5" />
                      <span className="badge badge-xs badge-error indicator-item"></span>
                    </div>
                  </button>
                  <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-64 md:w-80 shadow"
                  >
                    <div className="card-body">
                      <h2 className="text-lg font-bold">Your Notifications</h2>
                      <div role="alert" className="alert alert-info">
                        <span>12 unread messages. Tap to see.</span>
                      </div>
                      <div role="alert" className="alert alert-success">
                        <span>Your purchase has been confirmed!</span>
                      </div>
                      <div role="alert" className="alert alert-warning">
                        <span>Warning: Invalid email address!</span>
                      </div>
                      <div role="alert" className="alert alert-error">
                        <span>Error! Task failed successfully.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end ms-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <Image
                        width={40}
                        height={40}
                        alt="Tailwind CSS Navbar component"
                        src="/plabon.jpg"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li className="menu-title">
                      {user ? (
                        `Hi, ${user?.displayName.split(" ")[0]}`
                      ) : (
                        <Skeleton />
                      )}
                    </li>
                    <li>
                      <Link href="/dashboard/profile">
                        <FaUser /> Profile
                      </Link>
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
            {/* Page content here */}
            <main className="p-5">{children}</main>
          </div>
          <aside className="drawer-side border-r border-r-gray-300">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-72 p-4">
              <li className="menu-title">Overview</li>
              <li>
                <Link href="/dashboard">
                  <RiLayout2Fill /> Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/inbox">
                  <IoChatbubbles /> Inbox
                </Link>
              </li>
              <li>
                <Link href="/dashboard/project">
                  <FaFileZipper /> Projects
                </Link>
              </li>
              <li>
                <Link href="/dashboard/team">
                  <FaUserGroup /> Team
                </Link>
              </li>
              <li className="menu-title">General</li>
              <li>
                <Link href="/dashboard/profile">
                  <FaUser /> Profile
                </Link>
              </li>
              <li>
                <Link href="/dashboard/settings">
                  <FaGear /> Settings
                </Link>
              </li>
              <li>
                <a>
                  <FaCircleQuestion /> Help
                </a>
              </li>
              <li>
                <button onClick={logout}>
                  <FaArrowRightToBracket /> Logout
                </button>
              </li>
            </ul>
          </aside>
        </div>
      </ProtectedRoute>
    </>
  );
}
