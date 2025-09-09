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
        <section className="bg-black">
          <LogoMarquee />
        </section>
        <Services />
      </main>
    </>
  );
}
