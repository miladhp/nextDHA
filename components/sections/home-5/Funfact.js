'use client';

import CounterUp from '@/components/elements/CounterUp';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FunFact = () => {
  return (
    <section className="fun-fact-section pt-0 pb-0">
      <div className="auto-container">
        <div className="fact-counter">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/icons/icon-city.png)' }}></div>
          <div className="outer-box row">
            {/* Content Column */}
            <div className="content-column col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <h3 className="title">Ready to fly with us to your dream country</h3>
                <Link href="/page-services">
                  <div className="read-more">Our services <i className="fa fa-circle-right"></i></div>
                </Link>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image">
                  <Image src="/images/resource/funfact1-1.png" alt="Image" width={400} height={400} />
                </figure>
              </div>
            </div>
            {/* Fun Fact Column */}
            <div className="funfact-column col-xl-5 col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Counter Block */}
                <div className="counter-block">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-take-off"></i>
                    </div>
                    <div className="content-box">
                      <div className="count-box">
                        <span className="count-text"><CounterUp end={30} />+</span>
                      </div>
                      <div className="counter-title">Visa Categories</div>
                    </div>
                  </div>
                </div>
                {/* Counter Block */}
                <div className="counter-block" data-wow-delay="300ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-family"></i>
                    </div>
                    <div className="content-box">
                      <div className="count-box">
                        <span className="count-text"><CounterUp end={68} />k</span>
                      </div>
                      <div className="counter-title">Visa Process</div>
                    </div>
                  </div>
                </div>
                {/* Counter Block */}
                <div className="counter-block" data-wow-delay="600ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-flight-1"></i>
                    </div>
                    <div className="content-box">
                      <div className="count-box">
                        <span className="count-text"><CounterUp end={99} />+</span>
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
