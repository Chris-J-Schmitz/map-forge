import { Navbar } from "./HomePage/Components/Navbar";
// import HeroSection from "./HomePage/Components/HeroSection";
// import FeaturesSection from "./HomePage/Components/FeaturesSection";
// import PricingSection from "./HomePage/Components/PricingSection";


export default function Home() {
  return (
    <div>
      <section className="py-4 flex ">
        <Navbar />
      </section>

      <main>
        {/* <HeroSection />
        <FeaturesSection />
        <PricingSection /> */}
      </main>
    </div>
  );
}
