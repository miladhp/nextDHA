import { useState } from 'react';
import CounterUp from "@/components/elements/CounterUp";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (activeAccordion.key === key) {
      setActiveAccordion({
        status: false,
        key: 1,
      });
    } else {
      setActiveAccordion({
        status: true,
        key,
      });
    }
  };

  return (
    <section className="faq-section-three">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            {/* FAQ Column */}
            <div className="faq-column col-xl-7 col-lg-7 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Faq's</span>
                  <h2 className="words-slide-up text-split">Frequently Asked <br /> Questions ?</h2>
                </div>
                <ul className="accordion-box style-two">
                  <li className={`accordion block ${activeAccordion.key === 1 ? 'active-tab' : ''}`}>
                    <div className={`acc-btn ${activeAccordion.key === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                      What Is Visa Immigration Services? <i className="arrow fal fa-angle-down"></i>
                    </div>
                    <div className={`acc-content ${activeAccordion.key === 1 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">
                          Sed perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={`accordion block ${activeAccordion.key === 2 ? '' : ''}`}>
                    <div className={`acc-btn ${activeAccordion.key === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                      Have Any Visa Consultant? <i className="arrow fal fa-angle-down"></i>
                    </div>
                    <div className={`acc-content ${activeAccordion.key === 2 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">
                          Sed perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={`accordion block ${activeAccordion.key === 3 ? '' : ''}`}>
                    <div className={`acc-btn ${activeAccordion.key === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                      Which country is good for residents? <i className="arrow fal fa-angle-down"></i>
                    </div>
                    <div className={`acc-content ${activeAccordion.key === 3 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">
                          Sed perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image">
                  <img src="images/background/bg2.jpg" alt="" />
                </figure>
                <div className="experience bounce-">
                  <div className="icon-box">
                    <i className="icon flaticon-take-off"></i>
                  </div>
                  <strong>250+</strong> Years Of <br /> Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
