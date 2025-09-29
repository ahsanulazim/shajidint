import ShowCase from "./ShowCase";

export default function Supply() {
  const contentOne = {
    title: "Truck",
    heading: "Mercedes-Benz - 3 Ton Truck",
    desc: "Shajid International supplies spare parts for the Mercedes-Benz 3 Ton Army Truck, a dependable vehicle used for military transport and logistics. Their inventory includes key mechanical, structural, and electrical components, helping ensure the truck's durability and operational efficiency. This support is vital for defense mobility, especially in regions like Bangladesh.",
    img: "/army truck.jpg",
  };
  const contentTwo = {
    title: "Tank",
    heading: "APC BTR 80  8 wheel",
    desc: "Shajid International supplies spare parts for the BTR-80, a Soviet-designed 8X8 armored personnel carrier used in military and peacekeeping missions. Their offerings include mechanical, structural, electrical, and armament components essential for maintaining and upgrading the vehicle. By providing reliable parts, Shajid International supports the operational readiness and longevity of BTR-80 fleets, especially in regions like Bangladesh.",
    img: "/carousel/Tank.jpg",
  };
  const contentThree = {
    title: "Military Tank",
    heading: "Tank MBT - 2000",
    desc: "Shajid International supplies key spare parts for the MBT-2000 main battle tank, supporting its firepower, mobility, and durability. Their inventory covers mechanical, structural, and electronic components, helping ensure the tank stays mission-ready, especially for defense forces in Bangladesh.",
    img: "/carousel/MBT.jpg",
  };

  return (
    <section
      className="max-w-[1440px] bg-base-300 mx-auto px-5 lg:px-10 py-20"
      data-theme="light"
    >
      <div className="text-center space-y-4 mb-10">
        <h2 className="badge badge-outline badge-success py-5 mb-3 uppercase">
          <div className="inline-grid *:[grid-area:1/1]">
            <div className="status status-success animate-ping"></div>
            <div className="status status-success"></div>
          </div>{" "}
          Bangladesh's No. 1
        </h2>
        <h2 className="font-bold text-4xl">Leader in Military Hardware</h2>
        <p className="opacity-70">
          Comprehensive Defense Solutions From Tactical Gear to Strategic Supply
          Chains
        </p>
      </div>
      <ShowCase content={contentTwo} reverse={false} />
      <ShowCase content={contentOne} reverse={true} />
      <ShowCase content={contentThree} reverse={false} />
    </section>
  );
}
