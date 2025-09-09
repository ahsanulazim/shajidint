import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import "./Hero.css"

export default function Hero() {
    return (

        <section className="hero min-h-screen" data-theme="dark">
            <div className="hero-content text-center max-w-[1440px] mx-auto">
                <div className="">
                    <h2 className="badge badge-outline badge-success md:badge-xl py-5 mb-3 uppercase"><div className="inline-grid *:[grid-area:1/1]">
                        <div className="status status-success animate-ping"></div>
                        <div className="status status-success"></div>
                    </div> Mission</h2>
                    <h1 className="font-bold text-balance text-6xl md:text-7xl tracking-tight">Protect Your World</h1>
                    <p className="py-6 text-gray-400 text-balance tracking-tighter">
                        We believe in a world where peace is lived, not just imagined, where safety and freedom are rights, not privileges. But peace demands strength, we support those who protect it, delivering mission-ready gear to uphold security and sovereignty.
                    </p>
                    <Link href="/projects"><button className="btn btn-wide bg-white hover:bg-white/85 text-black !rounded-full">What We Do <IoIosArrowForward /></button></Link>
                </div>

            </div>
        </section>
    )
}
