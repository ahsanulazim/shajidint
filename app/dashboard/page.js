import Image from "next/image";
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
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a>Navbar Item 1</a></li>
                <li><a>Navbar Item 2</a></li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          Content
        </div>
        <aside className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 rounded-box w-56">
            <li className="menu-title">Overview</li>
            <li><a><RiLayout2Fill /> Dashboard</a></li>
            <li><a>Inbox</a></li>
            <li><a>Projects</a></li>
          </ul>
        </aside>
      </div>
    </>
  )
}
