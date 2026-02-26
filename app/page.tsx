import Nav from "@/components/layout/Nav";
import Hero from "@/components/layout/Hero";
import StatsBar from "@/components/layout/StatsBar";
import Features from "@/components/layout/Features";
import Levels from "@/components/layout/Levels";
import Pricing from "@/components/layout/Pricing";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsBar />
      <Features />
      <Levels />
      <Pricing />
      <Footer />
    </main>
  );
}
