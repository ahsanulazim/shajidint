import BentoGrid from "./BentoGrid";

export default function Services() {
    return (
        <section className="bg-black" data-theme="dark">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 text-center space-y-4">
                <h2 className="badge badge-outline badge-success py-5 mb-3 uppercase"><div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                </div> Quality</h2>
                <h2 className="font-bold text-4xl">Our Services</h2>
                <p className="opacity-70">Shajid International supplies quite a lot of Military equipments, never compromises on quality</p>
                <BentoGrid />
            </div>

        </section>
    )
}
