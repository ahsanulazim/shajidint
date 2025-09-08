import Hero from "@/Components/Hero";
import HeroCarousel from "@/Components/HeroCarousel";
import Services from "@/Components/Services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="bg-black pb-15 px-5 lg:px-10">
          <HeroCarousel />
        </section>
        <Services />
      </main>
    </>
  );
}
