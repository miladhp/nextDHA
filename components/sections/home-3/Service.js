import Image from 'next/image';
import Link from 'next/link';

export default function Service() {
  return (
    <section className="services-section-three">
      <div className="auto-container">
        <div className="row">
          {/* Section Title */}
          <div className="sec-title-outer col-lg-6">
            <div className="icon-plane-shape bounce-x"></div>
            <div className="sec-title">
              <span className="sub-title">What We Do</span>
              <h2 className="words-slide-up text-split">
                We ensure prompt services for visa & Immigration
              </h2>
            </div>
          </div>

          {/* Service Block 01 */}
          <div className="service-block-three col-lg-3 col-sm-6">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon flaticon-take-off"></i>
              </div>
              <div className="count">01</div>
              <h4 className="title">
                <Link href="/page-service-details">Student Visa</Link>
              </h4>
              <div className="text">
                We provide a skilled staff to help you get the most out of your immigration.
              </div>
            </div>
          </div>

          {/* Service Block 02 */}
          <div className="service-block-three col-lg-3 col-sm-6">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon flaticon-insurance-2"></i>
              </div>
              <div className="count">02</div>
              <h4 className="title">
                <Link href="/page-service-details">Family Visa</Link>
              </h4>
              <div className="text">
                We provide a skilled staff to help you get the most out of your immigration.
              </div>
            </div>
          </div>

          {/* Service Block 03 */}
          <div className="service-block-three col-lg-3 col-sm-6">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon flaticon-passport"></i>
              </div>
              <div className="count">03</div>
              <h4 className="title">
                <Link href="/page-service-details">Business Visa</Link>
              </h4>
              <div className="text">
                We provide a skilled staff to help you get the most out of your immigration.
              </div>
            </div>
          </div>

          {/* Service Block 04 */}
          <div className="service-block-three col-lg-3 col-sm-6">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon flaticon-travel"></i>
              </div>
              <div className="count">04</div>
              <h4 className="title">
                <Link href="/page-service-details">Working Visa</Link>
              </h4>
              <div className="text">
                We provide a skilled staff to help you get the most out of your immigration.
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6">
            <div className="inner-column">
              <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg5.jpg)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
