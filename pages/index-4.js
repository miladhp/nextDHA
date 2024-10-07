import Layout from "@/components/layout/Layout"
import Banner4 from "@/components/sections/home-4/Banner4"
import About4 from "@/components/sections/home-4/About4"
import Services4 from "@/components/sections/home-4/Services4"
import Features4 from "@/components/sections/home-4/Features4"
import Contact4 from "@/components/sections/home-4/Contact4"
import Video from "@/components/sections/home-4/Video"
import Call from "@/components/sections/home-4/Call"
import Team from "@/components/sections/home-4/Team"
import Client from "@/components/sections/home-4/Clients"
import Country from "@/components/sections/home-4/Country"
import Project from "@/components/sections/home-4/Project"
import Process from "@/components/sections/home-4/Process"
import NewsSection from "@/components/sections/home-4/News"
export default function Home() {

  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
      <Banner4 />
      <Services4 />
      <About4 />
      <Video />
      <Call />
      <Team />
      <Client />
      <Features4 />
      <Country />
      <Project />
      <Process />
      <Contact4 />
      <NewsSection />
    </Layout>
    </>
  )
}