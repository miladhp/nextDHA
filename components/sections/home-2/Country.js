import Link from "next/link";
import { useState } from 'react';

const Country = () => {

    return (
        <>
             <section className="country-section-two">
    <div className="outer-box">
      <div className="row">
        <div className="content-column col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">Choose Country</span>
              <h2 className="scrub-each-word text-split">Immigration Choose <br/>Your Country</h2>
            </div>
            <div className="row">
              <div className="country-block col-lg-6 col-md-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <img src="images/resource/country1-1.jpeg" alt="Image" />
                    <h4 className="title"><Link href="page-country-details">Australia </Link></h4>
                  </div>
                  <div className="text">We denou righteous indigna beguiled demoralized</div>
                  <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
              <div className="country-block col-lg-6 col-md-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <img src="images/resource/country1-2.jpeg" alt="Image" />
                    <h4 className="title"><Link href="page-country-details">Germany</Link></h4>
                  </div>
                  <div className="text">We denou righteous indigna beguiled demoralized</div>
                  <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
              <div className="country-block col-lg-6 col-md-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <img src="images/resource/country1-3.png" alt="Image" />
                    <h4 className="title"><Link href="page-country-details">Dubai</Link></h4>
                  </div>
                  <div className="text">We denou righteous indigna beguiled demoralized</div>
                  <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
              <div className="country-block col-lg-6 col-md-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <img src="images/resource/country1-4.jpeg" alt="Image" />
                    <h4 className="title"><Link href="page-country-details">England</Link></h4>
                  </div>
                  <div className="text">We denou righteous indigna beguiled demoralized</div>
                  <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-column col-lg-5 col-md-12 col-sm-12">
          <div className="inner-column">
            <figure className="image wow zoomIn"><img src="images/resource/country2-1.png" alt="Image" /></figure>
            <div className="bg-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};

export default Country;
