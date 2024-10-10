"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const ContactSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="contact-section mb-100">
        <div
          className="bg bg-shape"
          style={{ backgroundImage: "url(/images/icons/company.png)" }}
        ></div>
        <div
          className="bg bg-image2"
          style={{ backgroundImage: "url(/images/background/bg3.jpg)" }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row g-0">
              <div className="form-column col-lg-7 col-md-12 col-sm-12 order-lg-2">
                <div className="inner-column">
                  <div className="bg bg-pattern-2"></div>
                  <div className="sec-title">
                    <h2 className="scrub-each-word text-split">
                      A Hands-On Approach to EB-5 Investment
                    </h2>
                  </div>
                  <div className="wow fadeInLeft">
                    <p>
                      At Dhanani Private Equity Group, our expertise spans
                      developing, managing, and investing in premier properties.
                      Our comprehensive approach ensures that we are
                      well-equipped to handle the complexities of the real
                      estate market, driving success for our projects and
                      delivering exceptional value to our investors. Join us as
                      we continue to redefine the landscape of real estate
                      investments, creating lasting impacts and lucrative
                      opportunities for our global community of investors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-video-block wow fadeInRight col-lg-5 col-md-12 col-sm-12">
                <div className="inner-box">
                  <div
                    className="bg bg-image"
                    style={{
                      backgroundImage: "url(./images/people/people-5.jpg)",
                    }}
                  ></div>
                  <div className="content-box">
                    <h2 className="title">
                      {" "}
                      <span>
                        {" "}
                        Invest in
                        <br />
                        Your Future
                      </span>
                    </h2>
                    <a
                      onClick={() => setOpen(true)}
                      className="play-now"
                      data-fancybox="gallery"
                      data-caption=""
                    >
                      <i className="icon fas fa-play" aria-hidden="true"></i>
                      <span className="ripple"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url="/video/video-1.mov"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ContactSection;
