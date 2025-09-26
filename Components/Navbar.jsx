import Image from "next/image";
import Link from "next/link";

export default function Navbar({ glass, user }) {

    const nav = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/ourservices">Our Services</Link></li>
        <li><Link href="/contactus">Contact Us</Link></li>

    </>


    return (
        <header className={`drawer transition-all duration-300 fixed z-10 ${glass ? "bg-black/80 backdrop-blur-xs" : "bg-transparent"}`} data-theme="dark">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar lg:px-10 w-full max-w-[1440px] mx-auto md:min-h-20">
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
                            <Image width={128} height={34} src="/shajidintDark.svg" alt="Shajid International Logo" className="w-full max-w-28 md:max-w-32" />

                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium">
                            {nav}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? <Link href="/dashboard" className=""><button className="btn bg-white text-black rounded-md ms-2">Dashboard</button></Link> : <Link href="/login" className=""><button className="btn bg-white text-black rounded-md ms-2">Login</button></Link>}

                    </div>


                </div>
            </div>
            <menu className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {nav}
                </ul>
            </menu>
        </header>
    )
}
