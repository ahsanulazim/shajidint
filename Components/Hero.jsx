import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`hero ${styles.myHero} min-h-screen`} data-theme="dark">
      <div className="hero-content text-center max-w-[1440px] mx-auto">
        <div className="">
          <h2 className="badge badge-outline badge-success md:badge-xl py-5 mb-3 uppercase">
            <div className="inline-grid *:[grid-area:1/1]">
              <div className="status status-success animate-ping"></div>
              <div className="status status-success"></div>
            </div>
            Company Profile
          </h2>
          <h1 className="font-bold text-balance text-5xl sm:text-6xl md:text-7xl tracking-tight">
            Shajid International
          </h1>
          <p className="py-6 text-gray-400 text-balance tracking-tighter">
            All kinds of Military Vehicles Modernization Standardization & All
            types of Spare Parts Supply
          </p>
        </div>
      </div>
    </section>
  );
}
