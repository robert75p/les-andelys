import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PropertyOverview from "@/components/sections/PropertyOverview";
import Gallery from "@/components/sections/Gallery";
import LayoutIdeas from "@/components/sections/LayoutIdeas";
import Features from "@/components/sections/Features";
import Location from "@/components/sections/Location";
import VirtualTour from "@/components/sections/VirtualTour";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PropertyOverview />
        <Gallery />
        <LayoutIdeas />
        <Features />
        <Location />
        <VirtualTour />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
