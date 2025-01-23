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
      text: "With over 15 years of dedicated experience, we have crafted a robust platform in the realm of real estate that sets us apart.",
      delay: "300ms",
    },
    {
      icon: "flaticon-group",
      step: "",
      title: "Our Commitment to Excellence",
      text: "Excellence is a principle that drives every decision, every deal, and every partnership. We strongly focus on meticulous due diligence, a strategic vision, high quality partnerships, and an investor-centric approach. Real estate markets are dynamic, and so are we. We embrace innovation, adapt to market shifts, and constantly refine our strategies to ensure we stay ahead of the curve.",
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
    <section className="principal-section pt-5 pb-0">
      <div className="container py-0">
        <div className="sec-title text-center">
          <span className="sub-title">Our Approach</span>
          <h2 className="scrub-each-word text-split">
            Dhanani EB-5 International <br />
            Regional Center <br />
          </h2>
        </div>

        <div className="outer-box">
          <div className="icon-line"></div>
          <div className="row">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-block not-after col-lg-4 col-md-6 col-sm-12 wow fadeInUp`}
                // Apply the animation delay only on the client after hydration
                style={clientRendered ? { animationDelay: step.delay } : {}}
              >
                <div className="inner-box mx-0">
                  <i className={`icon ${step.icon}`}></i>
                  <div className="content h-75">
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
