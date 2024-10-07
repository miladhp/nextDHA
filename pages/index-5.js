import Layout from "@/components/layout/Layout"
import Banner5 from "@/components/sections/home-5/Banner5"
import About5 from "@/components/sections/home-5/About5"
import Marquee from "@/components/sections/home-5/Marquee"
import Services from "@/components/sections/home-5/Services"
import FunFact from "@/components/sections/home-5/Funfact"
import Process from "@/components/sections/home-5/Process"
import Features from "@/components/sections/home-5/Features"
import Country from "@/components/sections/home-5/Country"
import Team from "@/components/sections/home-5/Team"
import Client from "@/components/sections/home-5/Clients"
import Call from "@/components/sections/home-5/Call"
import Contact from "@/components/sections/home-5/Contact"
import NewsSection from "@/components/sections/home-5/News"
export default function Home() {

  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
      <Banner5 />
      <About5 />
      <Marquee />
      <Services />
      <FunFact />
      <Process />
      <Features />
      <Country />
      <Team />
      <Client />
      <Call />
      <Contact />
      <NewsSection />
    </Layout>
    </>
  )
}