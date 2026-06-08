import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Doctors } from "@/components/Doctors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
