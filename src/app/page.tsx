import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BigUpdate from "@/components/BigUpdate";
import NewTechnology from "@/components/NewTechnology";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Values from "@/components/Values";
import AboutUs from "@/components/AboutUs";
import Awards from "@/components/Awards";
import Partners from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[80px]">
        <Hero />
        <Services />
        <Features />
        <NewTechnology />
        <BigUpdate />
        <Statistics />
        <Values />
        <AboutUs />
        <Awards />
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
