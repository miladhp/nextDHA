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
                  <h2 className="text-black">CEO Nick Dhanani’s Vision</h2>
                  <div className="text text-gray">
                    Nick Dhanani, Founder and CEO of Dhanani Private Equity
                    Group (DPEG), always says that this company was formed
                    accidentally. Nick’s story came from humble beginnings when
                    he and his family immigrated to the United States in the
                    early 1980s. After landing in Houston, TX, Nick started his
                    career working the night shift as a cashier at a local gas
                    station. Nick always had an ambitious vision and was
                    determined to grow, so he spent his initial years
                    aggressively saving money in order to buy his first
                    business, which just so happened to be the c-store that he
                    was employed at. With the proceeds from his initial business
                    ventures, Nick began investing in prime real estate across
                    the greater Houston area, quickly realizing how beneficial
                    it was to own real assets instead of solely operating retail
                    as a lessee. Coming from a close-knit family, Nick’s sister
                    was naturally his first investor and from there, friends,
                    family, and co-workers all joined along for the ride. The
                    rest is history.
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-4 col-md-4 col-sm-12 order-1 order-md-2">
              <figure className="image">
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
                    <span className="sub-title">Who we are ?</span>

                    <div className="text">
                      Dhanani Private Equity Group currently manages over
                      $1,765,000,000 in transaction volume, consisting of
                      45+ convenience stores, 50+ retail centers, and over 3,000
                      units of Class A multifamily. Our database of investors
                      has organically grown to surpass 3,000 unique partners
                      across and over 23 different US states and 2 Canadian
                      provinces. DPEG has successfully completed over and 250
                      projects, and we have been blessed to have seen
                      profitability in every single one.
                    </div>
                  </div>
                  <div className="row">
                    <div className="exp-box col-lg-5 col-sm-4">
                      <div className="inner">
                        <div className="count-box ">
                          <span className="count">
                            <CounterUp end={14} />
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
                    <div className="info-box">
                      <div className="icon-box">
                        <i className="icon flaticon-take-off"></i>
                      </div>
                      <h5 className="title">We’re doing the right thing.</h5>
                    </div>
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
