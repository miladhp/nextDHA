import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/home-1/About1";
import ContactSection from "@/components/sections/home-1/Contact1";
import Mainslider from "@/components/sections/home-1/Mainslider";
import MarqueeSection from "@/components/sections/home-1/Marquee";
import MattersSection from "@/components/sections/home-1/Matters";
import PartnershipsSection from "@/components/sections/home-1/Partnerships";
import PerformanceSection from "@/components/sections/home-1/Performance";
import Process from "@/components/sections/home-1/Process";
import TeamGrid from "@/components/sections/home-1/TeamGrid";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Mainslider />
        {/* <Featue /> */}
        <About1 />
        <PerformanceSection />
        <Process />
        <ContactSection />
        <TeamGrid />
        <MattersSection />
        <MarqueeSection />
        <PartnershipsSection />
        {/* <WhyChooseUs1 /> */}
        {/* <Country /> */}
        {/* <FunFact /> */}
        {/* <Testimonial /> */}
        {/* <InMediaSection /> */}
      </Layout>
    </>
  );
}
