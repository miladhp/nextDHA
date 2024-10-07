import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home-3/Banner"
import Service from "@/components/sections/home-3/Service"
import About from "@/components/sections/home-3/About"
import Project from "@/components/sections/home-3/Project"
import Funfact from "@/components/sections/home-3/Funfact"
import WhyChooseUs from "@/components/sections/home-3/WhyChooseUs"
import Call from "@/components/sections/home-3/Call"
import Features from "@/components/sections/home-3/Features"
import Video from "@/components/sections/home-3/Video"
import Testimonials from "@/components/sections/home-3/Testimonial"
import Faq from "@/components/sections/home-3/Faq"
import NewsSection from "@/components/sections/home-3/News"
import Client from "@/components/sections/home-3/Clients"
export default function Home() {

  return (
    <>
    <Layout headerStyle={2} footerStyle={1}>
      <Banner />
      <Service />
      <About />
      <Project />
      <Funfact />
      <WhyChooseUs />
      <Call />
      <Features />
      <Video />
      <Testimonials />
      <Faq />
      <NewsSection />
      <Client />

    </Layout>
    </>
  )
}