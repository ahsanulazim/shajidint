import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import HeroCarousel from "@/Components/HeroCarousel";
import LogoMarquee from "@/Components/LogoMarquee";
import Services from "@/Components/Services";
import Supply from "@/Components/Supply";

export default function Home() {
  return (
    <>
      <main className="bg-bgCustom">
        <Hero />

        {/* Logo Marquee Section */}

        <section className="bg-neutral-900 py-10">
          <div className="max-w-[1440px] mx-auto  flex flex-col items-center">
            <h2 className="badge badge-outline badge-success md:badge-xl py-5 mb-6 uppercase"><div className="inline-grid *:[grid-area:1/1]">
              <div className="status status-success animate-ping"></div>
              <div className="status status-success"></div>
            </div>Enlistments</h2>
            <LogoMarquee />
          </div>
        </section>

        {/* Logo Marquee Ends */}

        <section className="hidden lg:block py-15 px-5 lg:px-10">
          <HeroCarousel />
        </section>
        <Supply />
        <Services />
        <Contact />
      </main>
    </>
  );
}
