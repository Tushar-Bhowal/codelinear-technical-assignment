import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { CloudBanking } from "@/components/sections/CloudBanking";
import { ConnectedSystem } from "@/components/sections/ConnectedSystem";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Marquee } from "@/components/sections/Marquee";
import { OutOfTheBox } from "@/components/sections/OutOfTheBox";
import { Insights } from "@/components/sections/Insights";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <CloudBanking />
        <ConnectedSystem />
        <CtaBanner id="cta-1" variant="card" />
        <Marquee />
        <OutOfTheBox />
        <Insights />
        <CaseStudies />
        <CtaBanner id="cta-3" variant="plain" />
      </main>
      <Footer />
    </>
  );
}
