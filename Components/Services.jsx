import BentoGrid from "./BentoGrid";

export default function Services() {
  return (
    <section className="bg-black" id="services" data-theme="dark">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 text-center space-y-4">
        <h2 className="badge badge-outline badge-success py-5 mb-3 uppercase">
          <div className="inline-grid *:[grid-area:1/1]">
            <div className="status status-success animate-ping"></div>
            <div className="status status-success"></div>
          </div>
          What We Do
        </h2>
        <h2 className="font-bold text-4xl">Our Services</h2>
        <p className="opacity-70">
          We do all kinds of Military Vehicles Modernization Standardization &
          All types of Spare Parts Supply
        </p>
        <BentoGrid />
      </div>
    </section>
  );
}
