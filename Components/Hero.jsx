export default function Hero() {
    return (
        <div className="hero min-h-screen justify-items-normal">
            <div className="hero-content px-5 lg:px-10 max-w-[1440px] w-full justify-between flex-col lg:flex-row-reverse mx-auto">
                <img
                    src="/Hero.png"
                    className="min-w-sm rounded-lg"
                />
                <div>
                    <h2 className="text-2xl mb-2">Equipping Forces. Securing Nations</h2>
                    <h1 className="text-6xl font-bold text-balance">Gear for defense, tactical operations, and mission success</h1>
                    <p className="py-6">
                        Explore our range of tactical gear, defense equipment, and mission-critical supplies trusted by professionals worldwide.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
