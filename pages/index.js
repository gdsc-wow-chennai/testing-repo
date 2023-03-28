import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import GDSCSection from "@/components/sections/GDSCSection";
import HeroSection from "@/components/sections/HeroSection";
import ItinerarySection from "@/components/sections/ItinerarySection";
import Navbar from "@/components/Navbar";
import PrizesSection from "@/components/sections/PrizesSection";
import QuestionsSection from "@/components/sections/QuestionsSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC WoW | Chennai</title>
        <meta name="description" content="GDSC WoW Chennai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <Navbar />
        <AboutSection />
        <PrizesSection />
        <ItinerarySection />
        <SponsorsSection />
        <GDSCSection />
        <QuestionsSection />
        <ContactSection />
      </main>
    </>
  );
}
