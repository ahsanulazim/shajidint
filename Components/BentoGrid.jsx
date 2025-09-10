export default function BentoGrid() {
    return (
        <>
            <div className="grid grid-cols-1 grid-rows-13 sm:grid-cols-2 sm:grid-rows-8 lg:grid-cols-3 lg:grid-rows-5 2xl:grid-cols-4 2xl:grid-rows-4 text-left gap-5 mt-10">
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 row-span-2 order-3 2xl:order-1 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Tactical Gear</h2>
                        <p className="text-gray-400 text-sm">Field-tested armor, helmets, and protective wear for combat readiness.</p>
                    </div>
                    <img src="/Grid/tacticalGear.jpg" alt="Tactical Gear" draggable="false" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 order-2 sm:order-5 2xl:order-2 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Secure Comms</h2>
                        <p className="text-gray-400 text-sm">Military-grade communication devices for encrypted, mission-critical use.</p>
                    </div>
                    <img src="/Grid/secureComms.jpg" alt="Secure Comms" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 order-4 sm:order-2 2xl:order-3 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Mission Planning Tools</h2>
                        <p className="text-gray-400 text-sm">Software and kits for strategic operations and battlefield coordination.</p>
                    </div>
                    <img src="/Grid/planning.jpg" alt="Mission Planning Tools" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 row-span-2 order-5 sm:order-4 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Logistics & Supply Chain</h2>
                        <p className="text-gray-400 text-sm">End-to-end sourcing, delivery, and compliance for defense procurement.</p>
                    </div>
                    <img src="/Grid/logistics.jpg" alt="logistics" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 order-6 sm:order-8 lg:order-6">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Procurement Support</h2>
                        <p className="text-gray-400 text-sm">Streamlined acquisition for government and defense agencies.</p>
                    </div>
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 sm:col-span-2 row-span-2 order-1 2xl:order-5">
                    <div className="p-5">
                        <h2 className="font-bold text-lg"> Field-Ready Equipment</h2>
                        <p className="text-gray-400 text-sm">Durable tools and kits built for harsh environments and rapid deployment.</p>
                    </div>
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 sm:col-span-2 order-8 sm:order-6 lg:order-8">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Government Contracts</h2>
                        <p className="text-gray-400 text-sm">Trusted supplier for defense tenders and certified government partnerships.</p>
                    </div>
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 order-9">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Navigation & Surveillance</h2>
                        <p className="text-gray-400 text-sm">GPS, drones, and surveillance tools for tactical awareness and control.</p>
                    </div>
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 row-span-2 lg:row-span-1 2xl:row-span-2 order-10 sm:order-7">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Support Services</h2>
                        <p className="text-gray-400 text-sm">Training, consultation, and after-sales support for military clients.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
