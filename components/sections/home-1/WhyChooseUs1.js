import Link from "next/link";
import { useState } from 'react';
const Progress_Line = ({ label, percent }) => (
  <div className="progress-box">
    <p>{label}</p>
    <div className="bar-inner">
      <div className="bar progress-line" style={{ width: `${percent}%` }}></div>
      <div className="count-text">{`${percent}%`}</div>
    </div>
  </div>
);


const WhyChooseUs = () => {
 
    return (
        <>
    <section className="why-choose-us p-0">
    <div className="bg-shape bounce-x"></div>
    <div className="icon-dots-4"></div>
    <div className="auto-container">
      <div className="outer-box">
        <div className="row g-0">
          <div className="content-column col-lg-6 order-lg-2">
            <div className="inner-column wow fadeInLeft">
              <div className="sec-title"> <span className="sub-title">why choose us</span>
                <h2 className="words-slide-up text-split">We are professional Expertin Immigration</h2>
                <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't simply free text now slightly.</div>
              </div>
              <div className="skills">
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-title">visa consultation</div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" style={{ width: `${85}%` }}>
                        <div className="skill-percentage">
                          <div className="count-box"><span className="count-text" data-speed="3000" data-stop="85">85</span>%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-title">immigration consultancy</div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" style={{ width: `${90}%` }}>
                        <div className="skill-percentage">
                          <div className="count-box"><span className="count-text" data-speed="3000" data-stop="90">90</span>%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="tel:+9298006869" className="info-btn"> <i className="icon fa fa-phone"></i> <small>Call for free</small> <strong>+92 (9800) 6869</strong> </Link>
            </div>
          </div>
          <div className="features-column col-lg-6">
            <div className="inner-column"> 
              <div className="bg bg-image" style={{ backgroundImage: 'url(/images/icons/globe.png)' }}></div>
              <div className="title-box">
                <h2 className="title words-slide-up text-split">We ensure prompt services for visa & Immigration</h2>
              </div>
              <div className="why-choose-block">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-insurance"></i></div>
                  <div className="content-box">
                    <h5 className="title">Fastest Working Process</h5>
                    <div className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
                  </div>
                </div>
              </div>
              <div className="why-choose-block">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-flight-1"></i></div>
                  <div className="content-box">
                    <h5 className="title">Expertise visa Processing</h5>
                    <div className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
                  </div>
                </div>
              </div>
              <div className="why-choose-block">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon flaticon-interview-1"></i></div>
                  <div className="content-box">
                    <h5 className="title">Expert Support Panel</h5>
                    <div className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
                  </div>
                </div>
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

export default WhyChooseUs;
