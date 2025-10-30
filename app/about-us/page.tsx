import AboutUsSection from "@/components/Common/CommonHeader";
import AboutSection from "./AboutSection";
import ArcoDeliver from "./ArcoDeliver";
import WhyArcoSection from "@/components/Common/WhyArcoSection";
import WhoWeAre from "@/components/WhoWeAre";
import StatsSection from "./stats";
import OurClients from "@/components/OurClients";
import DownloadOurApp from "@/components/DownloadOurApp";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsSection />
      <WhoWeAre />
      <StatsSection />
      {/* <AboutSection />
      <ArcoDeliver /> */}
      <OurClients />
      <WhyArcoSection />
      <DownloadOurApp />
    </div>
  );
};

export default AboutUsPage;
