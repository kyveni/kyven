import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Stats from "@/components/ui/stats";
import Features from "@/components/ui/features";
import About from "@/components/ui/about";
import Waitlist from "@/components/ui/waitlist";
import FAQ from "@/components/ui/faq";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <About />
      <Waitlist />
      <FAQ />
      <Footer />
    </>
  );
}