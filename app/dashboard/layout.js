"use client";

import LogoutModal from "@/Components/dashboard/LogoutModal";
import NavDash from "@/Components/dashboard/NavDash";
import ProtectedRoute from "@/Components/dashboard/ProtectedRoute";
import Skeleton from "@/Components/dashboard/Skeleton";
import { NavContext } from "@/context/MyContext";
import Link from "next/link";
import { useContext, useRef } from "react";
import {
  FaArrowRightToBracket,
  FaCircleQuestion,
  FaFileZipper,
  FaGear,
  FaUser,
  FaUserGroup,
} from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { RiLayout2Fill } from "react-icons/ri";

export default function RootLayout({ children }) {
  const { currentUser, themeToggler } = useContext(NavContext);

  const logoutUser = useRef();

  const logout = () => {
    logoutUser.current.show();
  };

  return (
    <>
      <ProtectedRoute>
        <LogoutModal logoutUser={logoutUser} />
        <div className="drawer lg:drawer-open bg-base-300" ref={themeToggler}>
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            {/* Navbar */}
            <NavDash logout={logout} />
            {/* Page content here */}
            <main className="p-5">{children}</main>
          </div>
          <aside className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-72 p-4">
              <li className="menu-title">Overview</li>

              {/* Conditional Rendering */}

              {currentUser ? (
                <>
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
                  {currentUser.role == "Admin" && (
                    <li>
                      <Link href="/dashboard/team">
                        <FaUserGroup /> Team
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <>
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <li key={i}>
                        <Skeleton className="my-2" />
                      </li>
                    ))}
                </>
              )}

              <li className="menu-title">General</li>
              {currentUser ? (
                <>
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
                      <FaArrowRightToBracket />
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <li key={i}>
                        <Skeleton className="my-2" />
                      </li>
                    ))}
                </>
              )}
            </ul>
          </aside>
        </div>
      </ProtectedRoute>
    </>
  );
}
