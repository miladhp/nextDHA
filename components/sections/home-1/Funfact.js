'use client';
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
import React from 'react';

const FunFact = () => {
  return (
    <section className="fun-fact-section pt-0 pb-0">
      <div className="auto-container">
        <div className="fact-counter">
          <div
            className="bg bg-image"
            style={{ backgroundImage: 'url(/images/icons/icon-city.png)' }}
          ></div>
          <div className="outer-box row">
            {/* Content Column */}
            <div className="content-column col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <h3 className="title">Ready to fly with us your dream country</h3>
                <Link href="/page-services" className="read-more">
                  Our services <i className="fa fa-circle-right"></i>
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image wow zoomIn">
                  <img src="/images/resource/funfact1-1.png" alt="Fun Fact Image" />
                </figure>
              </div>
            </div>

            {/* Fun Fact Columns */}
            <div className="funfact-column col-xl-5 col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Counter block 1 */}
                <div className="counter-block wow fadeInUp">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-take-off"></i>
                    </div>
                    <div className="content-box">
                      <div className="count-box">
                        <span className="count-text">
                          <CounterUp end={30} />+
                        </span>
                      </div>
                      <div className="counter-title">Visa Categories</div>
                    </div>
                  </div>
                </div>

                {/* Counter block 2 */}
                <div className="counter-block wow fadeInUp">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-family"></i>
                    </div>
                    <div className="content-box">
                      <div className="count-box">
                        <span className="count-text">
                          <CounterUp end={68} />k
                        </span>
                      </div>
                      <div className="counter-title">Visa Process</div>
                    </div>
                  </div>
                </div>

                {/* Counter block 3 */}
                <div className="counter-block wow fadeInUp">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-flight-1"></i>
                    </div>
                    <div className="content-box">
                      <div className="count-box">
                        <span className="count-text">
                          <CounterUp end={99} />+
                        </span>
                      </div>
                      <div className="counter-title">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
