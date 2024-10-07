'use client';

import React, { useState } from 'react';

const Contact4 = () => {
    return (
        <>
             <section className="contact-section-two">
    <div className="bg bg-image" style={{backgroundImage: 'url(/images/background/bg6.jpg)'}}></div>
    <div className="auto-container">
      <div className="outer-box">
        <div className="row">
          <div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <div className="sec-title light"> <span className="sub-title">Full Frights</span>
                <h2 className="words-slide-up text-split">We provide full assistance in freight</h2>
                <div className="text">We strongly support best practice sharing across our operations around the world and across various transporation sectors. Lorem ipsum dolor sit am adipi we help you ensure everyone</div>
              </div>
              <div className="contact-info">
                <div className="contact-block">
                  <div className="inner-box">
                    <h5 className="title">Skilled Visa’s In Global Immigration</h5>
                    <div className="content-box">
                      <div className="icon-box"><i className="icon flaticon-health-check"></i></div>
                      <div className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
                    </div>
                  </div>
                </div>
                <div className="contact-block">
                  <div className="inner-box">
                    <h5 className="title">Skilled Visa’s In Global Immigration</h5>
                    <div className="content-box">
                      <div className="icon-box"><i className="icon flaticon-health-check"></i></div>
                      <div className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-column col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="inner-column">
              <div className="bg-image-icon bounce-y"></div>
              <div className="contact-form-three wow fadeInLeft">
                <div className="bg bg-pattern-5 bounce-x"></div>
                <h3 className="title">Request A Quote</h3>
                <form method="post" action="get" id="contact-form">
                  <div className="row gx-3">
                    <div className="form-group col-lg-6 col-md-6">
                      <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6">
                      <input type="email" name="email" placeholder="Enter Email" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6">
                      <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6">
                      <input type="tel" name="phone" placeholder="Phone" required />
                    </div>
                    <div className="form-group col-lg-12 col-md-12">
                      <textarea name="form_message" className="form-control required" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group col-lg-12">
                      <button type="submit" className="theme-btn btn-style-one dark-bg hover-light" name="submit-form"><span className="btn-title">Send Message</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};

export default Contact4;


