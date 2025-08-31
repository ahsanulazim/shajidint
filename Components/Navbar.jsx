import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import Logo from "./Logo";

export default function Navbar() {

    const nav = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/whoweare">Who We Are</Link></li>
        <li><Link href="/team">Team</Link></li>
        <li><Link href="/contact">Contact</Link></li>

    </>


    return (
        <header className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full max-w-[1440px] mx-auto">
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
                    {/* End of Hamburger Menu */}


                    <div className="navbar-start">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium">
                            {nav}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <ThemeChanger className="mr-3" />
                        <a className="btn">Button</a>
                    </div>


                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {nav}
                </ul>
            </div>
        </header>
    )
}
