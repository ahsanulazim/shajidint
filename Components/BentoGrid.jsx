export default function BentoGrid() {
    return (
        <>
            <div className="grid grid-cols-1 grid-rows-12 sm:grid-cols-2 sm:grid-rows-7 lg:grid-cols-3 lg:grid-rows-5 xl:grid-cols-4 xl:grid-rows-4 text-left gap-5 mt-10">
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 row-span-2 order-3 xl:order-1 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Tactical Gear</h2>
                        <p className="text-gray-400 text-sm">Field-tested armor, helmets, and protective wear for combat readiness.</p>
                    </div>
                    <img src="/Grid/tacticalGear.webp" loading="lazy" alt="Tactical Gear" draggable="false" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 order-2 sm:order-5 xl:order-2 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Secure Comms</h2>
                        <p className="text-gray-400 text-sm">Military-grade communication devices for encrypted, mission-critical use.</p>
                    </div>
                    <img src="/Grid/secureComms.webp" loading="lazy" alt="Secure Comms" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 order-4 sm:order-2 xl:order-3 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Mission Planning Tools</h2>
                        <p className="text-gray-400 text-sm">Software and kits for strategic operations and battlefield coordination.</p>
                    </div>
                    <img src="/Grid/planning.webp" loading="lazy" alt="Mission Planning Tools" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 row-span-2 order-5 sm:order-4 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Logistics & Supply Chain</h2>
                        <p className="text-gray-400 text-sm">End-to-end sourcing, delivery, and compliance for defense procurement.</p>
                    </div>
                    <img src="/Grid/logistics.webp" loading="lazy" alt="logistics" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 order-6 sm:order-8 lg:order-6 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Procurement Support</h2>
                        <p className="text-gray-400 text-sm">Streamlined acquisition for government and defense agencies.</p>
                    </div>
                    <img src="/Grid/procurement.webp" loading="lazy" alt="Procurement Support" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 sm:col-span-2 lg:row-span-2 order-1 xl:order-5 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg"> Field-Ready Equipment</h2>
                        <p className="text-gray-400 text-sm">Durable tools and kits built for harsh environments and rapid deployment.</p>
                    </div>
                    <img src="/Grid/field.webp" loading="lazy" alt="Field-Ready Equipment" className="sm:hidden lg:block" />
                    <img src="/Grid/equipments.webp" loading="lazy" alt="Field-Ready Equipment" className="hidden sm:block lg:hidden" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 sm:col-span-2 order-8 sm:order-6 lg:order-8 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Government Contracts</h2>
                        <p className="text-gray-400 text-sm">Trusted supplier for defense tenders and certified government partnerships.</p>
                    </div>
                    <img src="/Grid/handshake.webp" loading="lazy" alt="Government Contracts" className="hidden sm:block" />
                    <img src="/Grid/handshake2.webp" loading="lazy" alt="Government Contracts" className="sm:hidden" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 order-9 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Navigation & Surveillance</h2>
                        <p className="text-gray-400 text-sm">GPS, drones, and surveillance tools for tactical awareness and control.</p>
                    </div>
                    <img src="/Grid/drone.webp" loading="lazy" alt="" />
                </div>
                <div className="rounded-md flex flex-col justify-between bg-neutral-900 border border-neutral-700 row-span-2 lg:row-span-1 xl:row-span-2 order-10 sm:order-7 overflow-clip">
                    <div className="p-5">
                        <h2 className="font-bold text-lg">Support Services</h2>
                        <p className="text-gray-400 text-sm">Training, consultation, and after-sales support for military clients.</p>
                    </div>
                    <img src="/Grid/support.webp" loading="lazy" alt="Support Services" className="lg:hidden xl:block" />
                    <img src="/Grid/instructor.webp" loading="lazy" alt="Support Services" className="hidden lg:block xl:hidden" />
                </div>
            </div>
        </>
    )
}
