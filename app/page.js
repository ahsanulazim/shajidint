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

        <section className="bg-neutral-900 py-10">
          <LogoMarquee />
        </section>
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
