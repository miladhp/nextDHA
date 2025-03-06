import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import CounterUp from "@/components/elements/CounterUp";
import Projects from "../home-1/Projects";
import SuccessSection from "../home-1/Success";
import ServicesSection from "./Services";
import InMediaSection from "../home-1/Mdeia";
import TeamGrid from "../home-1/TeamGrid";
import AsYouSeen from "../home-1/AsYouSeen";
import Certificates from "../home-1/Certificates";
const About = () => {
  const services = [
    {
      title: "Student Visa",
      description:
        "We offer end-to-end logistics tailored for specific markets, providing a solution.",
      iconClass: "flaticon-passport-3",
      imgSrc: "/images/resource/service1-1.jpg",
      count: "01",
    },
    {
      title: "Family Visa",
      description:
        "We offer end-to-end logistics tailored for specific markets, providing a solution.",
      iconClass: "flaticon-family",
      imgSrc: "/images/resource/service1-2.jpg",
      count: "02",
    },
    {
      title: "Business Visa",
      description:
        "We offer end-to-end logistics tailored for specific markets, providing a solution.",
      iconClass: "flaticon-visa-4",
      imgSrc: "/images/resource/service1-3.jpg",
      count: "03",
    },
    {
      title: "Working Visa",
      description:
        "We offer end-to-end logistics tailored for specific markets, providing a solution.",
      iconClass: "flaticon-flight-1",
      imgSrc: "/images/resource/service1-4.jpg",
      count: "04",
    },
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="offer-section py-5">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-8 order-2 order-md-1">
              <div className="inner-column">
                <div className="sec-title light">
                  <span className="sub-title text-gray">
                    Dhanani EB-5 International
                  </span>
                  <h2 className="text-black">
                    Our Founder And CEO,
                    <br /> Nick Dhanani
                  </h2>
                  <div className="text text-body">
                  Nick Dhanani, the Founder and CEO of DPEG, often describes the company’s creation as an accidental journey. His story is one of humble beginnings, tracing back to the early 1980s when he and his family immigrated to the United States. Upon settling in Houston, Texas, Nick began his career working the night shift as a cashier at a local gas station. Fueled by ambition and a determination to succeed, he diligently saved money and eventually purchased his first business—the very convenience store where he was employed. Using the profits from his early ventures, Nick began investing in prime real estate throughout the greater Houston area. He quickly recognized the advantages of owning real assets rather than operating retail businesses as a lessee. Over the past 14 years, DPEG has grown from a $20 million company to managing a portfolio exceeding $1.9 billion in assets. This portfolio includes over 45 convenience stores, 50 retail centers, and nearly 3,000 proposed Class A multifamily units. The company’s success is driven by its adherence to three core principles, enabling it to organically build a robust database of more than 3,400 unique investors across 23 U.S. states and two Canadian provinces. To date, DPEG has successfully completed over 250 projects, with every endeavor yielding profitability. DPEG’s mission is clear: to transform hard-earned money into lasting wealth. As Nick often states, “Making money is the easy part; it’s a necessity for survival. The real skill lies in carefully investing that money to create something that can be enjoyed by both you and future generations. In my opinion, this is the only skill I truly possess.
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-4 col-md-4 col-sm-12 order-1 order-md-2">
              <figure className="image mt-lg-5 pt-lg-5">
                <img src="images/team/Nick-Dhanani-2.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us-two pt-0">
        <div className="icon-shape bounce-y"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-xl-5 col-lg-6 order-lg-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">Who Are We ?</span>

                    <div className="text">
                    Our parent company, Dhanani Private Equity Group (DPEG), currently manages over $1.9B+ in transaction volume, consisting of 45+ convenience stores, 50+ retail centers, and over 3,000 units of Class A multifamily. Our database of investors has organically grown to surpass 3,400 unique partners across and over 23 different US states and 2 Canadian provinces. DPEG has successfully completed over 250 projects. Through hard work and blessings, we have seen profitability in every single one. 
                    </div>
                  </div>
                  <div className="row">
                    <div className="exp-box col-lg-5 col-sm-4">
                      <div className="inner">
                        <div className="count-box ">
                          <span className="count">
                            <CounterUp end={15} />
                          </span>
                        </div>
                        <div className="title">
                          Years Of <br /> Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="image-column col-xl-7 col-lg-6 col-md-10">
                <div className="inner-column">
                  <div className="image-box">
                    {/* Image 1 */}
                    <figure className="image overlay-anim reveal visible">
                      <Image
                        src="/images/people/people-9.jpg"
                        alt="Why Choose Us"
                        width={500}
                        height={300}
                      />
                    </figure>
                    {/* Image 2 */}
                    <figure className="image-2 overlay-anim reveal visible">
                      <Image
                        src="/images/people/people-8.jpg"
                        alt="Why Choose Us"
                        width={300}
                        height={300}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessSection />
      <TeamGrid />
      <ServicesSection />
      <Projects />
      <AsYouSeen />
      <InMediaSection />
      <Certificates />
    </>
  );
};
export default About;
