import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaLocationDot,
  FaPhone,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";

export default function Footer() {
  const nav = (
    <>
      <Link className="link link-hover" href="/">
        Home
      </Link>
      <Link className="link link-hover" href="/#services">
        Services
      </Link>
      <Link className="link link-hover" href="/contact">
        Contact Us
      </Link>
    </>
  );

  return (
    <div className="bg-base-300" data-theme="dark">
      <footer className="footer sm:footer-horizontal grid-rows-2 lg:grid-rows-1 max-w-[1440px] mx-auto text-base-content px-5 py-10 sm:py-14 sm:px-10">
        <aside>
          <Link href="/" className="w-full">
            <Image
              width={176}
              height={46}
              src="/shajidintDark.svg"
              alt="Shajid International"
              className="w-full max-w-44 mb-5"
            />
          </Link>
          <p className="max-w-80">
            All kinds of Military Vehicles Modernization Standardization & All
            types of Spare Parts Supply
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          {nav}
        </nav>

        <nav>
          <h6 className="footer-title">Contact</h6>
          <a href="tel:+8801741587230">
            <p className="flex items-center gap-2">
              <FaPhone /> +880 1741 587 230
            </p>
          </a>
          <a href="mailto:shajidint@gmail.com">
            <p className="flex items-center gap-2">
              <FaEnvelope /> shajidint@gmail.com
            </p>
          </a>
          <p className="flex items-center gap-2">
            <FaLocationDot /> 195/2/G, Shantibagh,
            <br /> Dhaka-1217, Bangladesh
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Find Us</h6>
          <div className="flex gap-x-3">
            <a className="text-xl" href="#">
              <FaFacebook />
            </a>
            <a className="text-xl" href="#">
              <FaSquareWhatsapp />
            </a>
            <a className="text-xl" href="#">
              <IoLogoWechat />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-black  text-base-content p-4">
        <aside>
          <p className="text-gray-500">
            <span className="text-base-content">
              Copyright © {new Date().getFullYear()}{" "}
            </span>
            - All right reserved by{" "}
            <span className="text-base-content">Shajid International.</span>{" "}
          </p>
        </aside>
      </footer>
    </div>
  );
}
