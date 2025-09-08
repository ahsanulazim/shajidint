import Link from "next/link";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Footer() {

    const nav = <>
        <Link className="link link-hover" href="/services">Services</Link>
        <Link className="link link-hover" href="/projects">Projects</Link>
        <Link className="link link-hover" href="/whoweare">Who We Are</Link>
        <Link className="link link-hover" href="/team">Team</Link>

    </>


    return (
        <div className="bg-main" data-theme="dark">
            <footer className="footer sm:footer-horizontal grid-rows-2 lg:grid-rows-1 max-w-[1440px] mx-auto text-base-content px-5 py-10 sm:p-14">
                <aside>
                    <img src="/Shajid-International-Logo-dark.svg" alt="Shajid International" className="w-full max-w-44 mb-5" />
                    <p className="max-w-96">Shajid International
                        With more than 7 years of national and global experience. Shajid International is continuing to serve businesses around the globe.</p>

                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    {nav}
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link className="link link-hover" href="/partners">Partners</Link>
                    <Link className="link link-hover" href="/workprocess">Work Process</Link>
                    <Link className="link link-hover" href="/contact">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <p className="flex items-center gap-2"><FaPhone /> +880 1741 587 230</p>
                    <p className="flex items-center gap-2"><FaEnvelope /> aminul@shajidint.com</p>
                    <p className="flex items-center gap-2"><FaLocationDot /> 195/2/G, Shantibagh, Dhaka-1217, Bangladesh</p>
                </nav>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p className="text-gray-500"><span className="text-base-content">Copyright © {new Date().getFullYear()} </span>- All right reserved by <span className="text-base-content">Shajid International.</span> Developed by <a className="link text-base-content" href="https://www.fiverr.com/ahsanulazim6" target="_blank">Ahsanul Azim Plabon</a></p>
                </aside>
            </footer>
        </div>
    )
}
