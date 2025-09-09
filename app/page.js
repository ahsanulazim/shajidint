import Hero from "@/Components/Hero";
import HeroCarousel from "@/Components/HeroCarousel";
import LogoMarquee from "@/Components/LogoMarquee";
import Services from "@/Components/Services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="hidden lg:block bg-black pb-15 px-5 lg:px-10">
          <HeroCarousel />
        </section>
        <section className="bg-neutral-900 py-10">
          {/* <div className="text-center">
            <h2 className="badge badge-outline badge-success md:badge-xl py-5 mb-3 uppercase"><div className="inline-grid *:[grid-area:1/1]">
              <div className="status status-success animate-ping"></div>
              <div className="status status-success"></div>
            </div> Enlistments</h2>
          </div> */}
          <LogoMarquee />
        </section>
        <Services />
      </main>
    </>
  );
}
