'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Contact = () => {
    return (
        <>
 <section className="contact-section-three">
    <div className="bg-image"><img src="images/resource/funfact1-1.png" alt="" /></div>
    <div className="auto-container">
      <div className="row">
        <div className="title-column col-xxl-5 col-lg-6">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">contact with us</span>
              <h2>let’s work together?</h2>
              <div className="text">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem.</div>
            </div>
            <div className="contact-info-block">
              <div className="inner">
                <i className="icon fa fa-phone"></i>
                <div className="text">Have any question?</div>
                <h5 className="title">Free <Link href="tel:230009850">+23 (000)-9850</Link></h5>
              </div>
            </div>
            <div className="contact-info-block">
              <div className="inner">
                <i className="icon fa fa-envelope"></i>
                <div className="text">Send email</div>
                <h5 className="title"><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></h5>
              </div>
            </div>
            <div className="contact-info-block">
              <div className="inner">
                <i className="icon fa fa-map-marker-alt"></i>
                <div className="text">Visit anytime</div>
                <h5 className="title">30 broklyn golden street. New York</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="form-column col-xxl-6 col-lg-6">
          <div className="inner-column">
            <div className="contact-form-four wow fadeInLeft">
              <h3 className="title">Contact us</h3>
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
                      <button type="submit" className="theme-btn btn-style-one dark-bg" name="submit-form"><span className="btn-title">Send Message</span></button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};

export default Contact;


