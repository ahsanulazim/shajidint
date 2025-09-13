import Dashboard from "@/Components/dashboard/Dashboard";
import Image from "next/image";
import { FaArrowRightToBracket, FaBell, FaCircleQuestion, FaFileZipper, FaGear, FaUserGroup } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { RiLayout2Fill } from "react-icons/ri";

export default function dashboard() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
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
              <Image src="/Shajid-International-Logo.svg" alt="Shajid International Logo" width={128} height={34} className="w-full max-w-28 md:max-w-32" />
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <button tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <FaBell />
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
                </button>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end ms-5">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      width={40} height={40}
                      alt="Tailwind CSS Navbar component"
                      src="/plabon.jpg" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>

            </div>
          </div>
          {/* Page content here */}
          <main className="p-10">
            <Dashboard />
          </main>
        </div>
        <aside className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <li className="menu-title">Overview</li>
            <li><a><RiLayout2Fill /> Dashboard</a></li>
            <li><a><IoChatbubbles /> Inbox</a></li>
            <li><a><FaFileZipper /> Projects</a></li>
            <li><a><FaUserGroup /> Team</a></li>
            <li className="menu-title">General</li>
            <li><a><FaGear /> Settings</a></li>
            <li><a><FaCircleQuestion /> Help</a></li>
            <li><a><FaArrowRightToBracket /> Logout</a></li>

          </ul>
        </aside>
      </div>
    </>
  )
}
