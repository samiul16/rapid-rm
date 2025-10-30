// import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutCompany from "@/components/AboutCompany";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WeServeLanding from "../components/WeServeLanding";
import Questions from "@/components/Questions";
import GetInTouch from "@/components/GetInTouch";
import DownloadOurApp from "@/components/DownloadOurApp";
import OurClients from "@/components/OurClients";
import ClientTestimonials from "../components/ClientTestimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutCompany />
        <Stats />
        <Services />
        <WeServeLanding />
        {/* <Questions /> */}
        {/* <PeopleSays /> */}
        <DownloadOurApp />
        <OurClients />
        <ClientTestimonials />
      </main>
    </div>
  );
}
