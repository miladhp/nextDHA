import React from "react";
import { FACTS } from "@/constants/global";
import CounterUp from "@/components/elements/CounterUp";

const SuccessSection = () => {
  return (
    <section className="offer-section" id="story">
      <div
        className="bg bg-image"
        style={{
          backgroundColor: "rgba(var(--theme-color2-rgb), 1)",
          backgroundImage: "url('/images/background/bg-pattern.png')",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      ></div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12">
            <div className="inner-column">
              <div className="sec-title light">
                <h2>Our Story AND Success</h2>
                <div className="text">
                  DHANANI EB-5 International is a Texas-based Regional Center
                  with over 14 years of profitable and zero losses experience in
                  real estate developing and investing. We are registered in
                  Texas, Tennessee, Georgia, Arkansas, and Florida. Join us as
                  we continue to create a foundation and future for our global
                  investors.
                </div>
              </div>

              <ul className="list-style-two ">
                <li className="d-flex flex-column text-start justify-content-start">
                  <h3 className="text-light">Mission Statement</h3>
                  <p className="text-white">
                    At DHANANI EB-5 International, we empower global investors
                    to secure US Permanent Residency through carefully curated,
                    strategic, and profitable EB-5 projects. We are committed to
                    building a secure and prosperous future for our partners -
                    one investment at a time.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="image-box">
                <figure className="image">
                  <img src="images/projects/building.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container mt-80">
        <div className="fact-counter">
          <div className="row">
            {FACTS.map((fact) => {
              return (
                <div
                  key={fact.id}
                  className="counter-block-two col-lg-4 col-sm-6 wow fadeInUp"
                >
                  <div className="inner-box bg-white">
                    <div className="content-box">
                      <i className={`icon ${fact.icon}`}> </i>

                      <div className="count-box">
                        <span className="count-text d-flex justify-content-center">
                          <span>{fact.before}</span>
                          <CounterUp end={+fact.target} round={fact.id !== 5} />
                          <span>{fact.after}</span>
                        </span>
                      </div>
                      <div className="counter-title">{fact.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
