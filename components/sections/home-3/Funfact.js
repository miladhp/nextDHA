'use client';

import CounterUp from "@/components/elements/CounterUp";
import React from 'react';

const Funfact = () => {
    return (
        <section className="fun-fact-section-two style-two">
    <div className="icon-dots"></div>
    <div className="auto-container">
      <div className="fact-counter">
        <div className="row"> 
          <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
            <div className="inner-box"> <i className="icon flaticon-insurance"></i>
              <div className="content-box">
              <div className="count-box">
                <span className="count-text">
                    <CounterUp end={25} />+
                </span>
            </div>
                <div className="counter-title">Years Of Experience</div>
              </div>
            </div>
          </div>
          <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box"> <i className="icon flaticon-take-off"></i>
            <div className="count-box">
                <span className="count-text">
                    <CounterUp end={90} />+
                </span>
            </div>
              <div className="counter-title">Office Worldwide</div>
            </div>
          </div>
          <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box"> <i className="icon flaticon-family"></i>
            <div className="count-box">
                <span className="count-text">
                    <CounterUp end={11} />k+
                </span>
            </div>
              <div className="counter-title">Total Workers</div>
            </div>
          </div>
          <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
            <div className="inner-box"> <i className="icon flaticon-scale"></i>
            <div className="count-box">
                <span className="count-text">
                    <CounterUp end={20} />+
                </span>
            </div>
              <div className="counter-title">Best Awards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default Funfact;
