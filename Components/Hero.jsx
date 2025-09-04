import Link from "next/link";
import "./Hero.css";

export default function Hero() {
    return (
        <div className="hero min-h-screen justify-items-normal">
            <div className="hero-content px-5 lg:px-10 max-w-[1440px] w-full justify-between flex-col lg:flex-row-reverse mx-auto">
                <img
                    src="/Hero.png"
                    className="max-w-xl w-full rounded-lg"
                />
                <div>
                    <h2 className="text-lg sm:text-2xl mb-2">Equipping Forces. Securing Nations</h2>
                    <h1 className="text-3xl sm:text-6xl font-bold text-balance">Gear for defense and mission success</h1>
                    <p className="py-6">
                        Explore our range of tactical gear, defense equipment, and mission-critical supplies trusted by professionals worldwide.
                    </p>
                    <Link href="/contact"><button className="btn text-white bg-second/90 border-second shadow-second shadow-xs hover:bg-second">Contact Us</button></Link>
                    <Link href="/projects"><button className="btn border-second/95 hover:border-second hover:bg-second hover:text-white btn-outline ms-5">Projects</button></Link>
                </div>
            </div>
        </div>
    )
}
