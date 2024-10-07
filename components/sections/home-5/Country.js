import Link from "next/link";
import { useState } from 'react';

const Country = () => {

    return (
        <>
  <section className="country-section">
    <div className="icon-dots-5"></div>
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">Choose Country</span>
        <h2 className="scrub-each-word text-split">Countries we're support <br/>for the immigration</h2>
      </div>
      <div className="row">
        <div className="country-block col-lg-4 col-md-6 col-sm-6">
          <div className="inner-box">
            <div className="image-box">
              <img src="images/resource/country1-1.jpeg" alt="Image" />
              <h4 className="title"><Link href="page-country-details">Australia </Link></h4>
            </div>
            <div className="text">We denou righteous indigna beguiled demoralized</div>
            <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
        <div className="country-block col-lg-4 col-md-6 col-sm-6">
          <div className="inner-box">
            <div className="image-box">
              <img src="images/resource/country1-2.jpeg" alt="Image" />
              <h4 className="title"><Link href="page-country-details">Germany</Link></h4>
            </div>
            <div className="text">We denou righteous indigna beguiled demoralized</div>
            <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
        <div className="country-block col-lg-4 col-md-6 col-sm-6">
          <div className="inner-box">
            <div className="image-box">
              <img src="images/resource/country1-3.png" alt="Image" />
              <h4 className="title"><Link href="page-country-details">Dubai</Link></h4>
            </div>
            <div className="text">We denou righteous indigna beguiled demoralized</div>
            <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
        <div className="country-block col-lg-4 col-md-6 col-sm-6">
          <div className="inner-box">
            <div className="image-box">
              <img src="images/resource/country1-4.jpeg" alt="Image" />
              <h4 className="title"><Link href="page-country-details">England</Link></h4>
            </div>
            <div className="text">We denou righteous indigna beguiled demoralized</div>
            <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
        <div className="country-block col-lg-4 col-md-6 col-sm-6">
          <div className="inner-box">
            <div className="image-box">
              <img src="images/resource/country1-5.jpeg" alt="Image" />
              <h4 className="title"><Link href="page-country-details">Portugal</Link></h4>
            </div>
            <div className="text">We denou righteous indigna beguiled demoralized</div>
            <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
        <div className="country-block col-lg-4 col-md-6 col-sm-6">
          <div className="inner-box">
            <div className="image-box">
              <img src="images/resource/country1-6.jpeg" alt="Image" />
              <h4 className="title"><Link href="page-country-details">Spain</Link></h4>
            </div>
            <div className="text">We denou righteous indigna beguiled demoralized</div>
            <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};

export default Country;
