import Layout from "@/components/layout/Layout"
import FeaturesSection from "@/components/sections/home-2/Features"
import Banner from "@/components/sections/home-2/Banner"
import About from "@/components/sections/home-2/About"
import Services from "@/components/sections/home-2/Services"
import Video from "@/components/sections/home-2/Video"
import Country from "@/components/sections/home-2/Country"
import Team from "@/components/sections/home-2/Team"
import Marquee from "@/components/sections/home-2/Marquee"
import Offer from "@/components/sections/home-2/Offer"
import FaqSection from "@/components/sections/home-2/Faq"
import TestimonialSection from "@/components/sections/home-2/Testimonial"
import News from "@/components/sections/home-2/News"
export default function Home2() {

  return (
    <>
    <Layout headerStyle={2} footerStyle={1}>
      <Banner />
      <About />
      <Services />
      <Video />
      <Country />
      <Team />
      <Marquee />
      <Offer />
      <FeaturesSection />
      <FaqSection />
      <TestimonialSection />
      <News />
    </Layout>
    </>
  )
}