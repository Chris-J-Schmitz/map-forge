import { FeaturesSection } from "./HomePage/Components/FeaturesSection";
import { Footer } from "./HomePage/Components/Footer";
import { HeroSection } from "./HomePage/Components/HeroSection";
import { Navbar } from "./HomePage/Components/Navbar";
import { PricingSection } from "./HomePage/Components/PricingSection";



export default function Home() {
  return (
    <div>
      <section className="">
        <Navbar />
      </section>

      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
