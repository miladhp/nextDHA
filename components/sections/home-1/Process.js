import React, { useState, useEffect } from "react";

const Process = () => {
  const steps = [
    {
      icon: "flaticon-protect",
      step: "",
      title: "Your Investment. Our Responsibility",
      text: "We believe that our success is directly tied to yours. That’s why we personally oversee each project to guarantee not only compliance with EB-5 requirements but also to maximize the potential returns on your investment. Our integrated approach allows us to control every detail, ensuring that every project meets our high standards of excellence and profitability.",
      delay: "", // No delay for the first step
    },
    {
      icon: "flaticon-accomodation",
      step: "",
      title: "Leading Innovation in Real Estate Investment",
      text: "With over 14 years of dedicated experience, we have crafted a robust platform in the realm of real estate that sets us apart. Our carefully developed ecosystem not only enhances our ability to manage projects with precision but also maximizes profitability and enriches the investment experience for our partners.",
      delay: "300ms",
    },
    {
      icon: "flaticon-group",
      step: "",
      title: "Our Commitment to Excellence",
      text: "At Dhanani Private Equity Group, our expertise spans developing, managing, and investing in premier properties. Our comprehensive approach ensures that we are well-equipped to handle the complexities of the real estate market, driving success for our projects and delivering exceptional value to our investors. Join us as we continue to redefine the landscape of real estate investments, creating lasting impacts and lucrative opportunities for our global community of investors.",
      delay: "600ms",
    },
  ];

  // State to hold client-side only styles (after component mounts)
  const [clientRendered, setClientRendered] = useState(false);

  // Run only on the client (after first render)
  useEffect(() => {
    setClientRendered(true);
  }, []);

  return (
    <section className="process-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Our Approach</span>
          <h2 className="scrub-each-word text-split">
            DHANANI Group
            <br /> Morals
          </h2>
        </div>

        <div className="outer-box">
          <div className="icon-line"></div>
          <div className="row">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp`}
                // Apply the animation delay only on the client after hydration
                style={clientRendered ? { animationDelay: step.delay } : {}}
              >
                <div className="inner-box">
                  <i className={`icon ${step.icon}`}></i>
                  <div className="content">
                    <span className="step">{step.step}</span>
                    <h5 className="title">{step.title}</h5>
                    <div className="text">{step.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
