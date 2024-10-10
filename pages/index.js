import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/home-1/About1";
import Client from "@/components/sections/home-1/Clients1";
import ContactSection from "@/components/sections/home-1/Contact1";
import Country from "@/components/sections/home-1/Country";
import Featue from "@/components/sections/home-1/Feature";
import FunFact from "@/components/sections/home-1/Funfact";
import Mainslider from "@/components/sections/home-1/Mainslider";
import MarqueeSection from "@/components/sections/home-1/Marquee";
import InMediaSection from "@/components/sections/home-1/Mdeia";
import News from "@/components/sections/home-1/News";
import PerformanceSection from "@/components/sections/home-1/Performance";
import Process from "@/components/sections/home-1/Process";
import Services1 from "@/components/sections/home-1/Services1";
import Testimonial from "@/components/sections/home-1/Testimonial";
import WhyChooseUs1 from "@/components/sections/home-1/WhyChooseUs1";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Mainslider />
        <Featue />
        <About1 />
        <PerformanceSection />
        <Process />
        <MarqueeSection />
        <Services1 />
        {/* <WhyChooseUs1 /> */}
        <Country />
        <ContactSection />
        {/* <FunFact /> */}
        {/* <Testimonial /> */}
        <InMediaSection />
      </Layout>
    </>
  );
}
