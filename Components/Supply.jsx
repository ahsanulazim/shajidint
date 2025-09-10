import ShowCase from "./ShowCase";

export default function Supply() {

    const contentOne = {
        title: "Logistics",
        heading: 'Strategic Supply & Procurement',
        desc: "Our logistics team ensures smooth, compliant procurement of essential supplies. We manage sourcing, documentation, and delivery helping defense agencies stay equipped, efficient, and focused on their mission.",
        img: "/logistics.jpg",
        btn1: "Get Quote",
        btn2: "Services"
    }
    const contentTwo = {
        title: "Gear",
        heading: 'Mission-Ready Tactical Gear',
        desc: "We supply a wide range of military-grade equipment—from body armor and helmets to communication devices and field kits. Every item is tested for resilience and built to meet the demands of modern defense forces.",
        img: "/Gear.webp",
        btn1: "Gear Catalog",
        btn2: "Specs"
    }

    return (
        <section className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20">
            <div className="text-center space-y-4 mb-10">
                <h2 className="badge badge-outline badge-success py-5 mb-3 uppercase"><div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                </div> Bangladesh's No. 1</h2>
                <h2 className="font-bold text-4xl">Leader in Military Hardware</h2>
                <p className="opacity-70">Comprehensive Defense Solutions From Tactical Gear to Strategic Supply Chains</p>
            </div>
            <ShowCase content={contentTwo} reverse={false} />
            <ShowCase content={contentOne} reverse={true} />
        </section>
    )
}
