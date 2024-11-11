import { Navbar } from "./HomePage/Components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import {HeroSection} from "./HomePage/Components/HeroSection";
import {FeaturesSection} from "./HomePage/Components/FeaturesSection";
import {PricingSection} from "./HomePage/Components/PricingSection";


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
    </div>
  );
}
