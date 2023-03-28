import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import GDSCSection from "@/components/GDSCSection";
import HeroSection from "@/components/HeroSection";
import ItinerarySection from "@/components/ItinerarySection";
import Navbar from "@/components/Navbar";
import PrizesSection from "@/components/PrizesSection";
import QuestionsSection from "@/components/QuestionsSection";
import SponsorsSection from "@/components/SponsorsSection";
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
