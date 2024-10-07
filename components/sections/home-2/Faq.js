import { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Faq = () => {
  const percentage = 78;
  const percentage2 = 90;
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
    <section className="faq-section-two pb-70">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="faq-column col-xl-6 col-lg-6 order-2 wow fadeInRight" data-wow-delay="300ms">
              <div className="inner-column">
                <ul className="accordion-box style-two">
                  <li className={`accordion block ${activeAccordion.key === 1 ? 'active-tab' : ''}`}>
                    <div className={`acc-btn ${activeAccordion.key === 1 ? 'active' : ''}`} onClick={() => handleClick(1)} >
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
                    <div className={`acc-btn ${activeAccordion.key === 2 ? 'active' : ''}`} onClick={() => handleClick(2)} >
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
                    <div className={`acc-btn ${activeAccordion.key === 3 ? 'active' : ''}`} onClick={() => handleClick(3)} >
                      Which Country Is Good for Residents? <i className="arrow fal fa-angle-down"></i>
                    </div>
                    <div className={`acc-content ${activeAccordion.key === 3 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">
                          Sed perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={`accordion block ${activeAccordion.key === 4 ? '' : ''}`}>
                    <div className={`acc-btn ${activeAccordion.key === 4 ? 'active' : ''}`} onClick={() => handleClick(4)} >
                      How Much Does Visa Immigration Cost? <i className="arrow fal fa-angle-down"></i>
                    </div>
                    <div className={`acc-content ${activeAccordion.key === 4 ? 'current' : ''}`}>
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
            <div className="content-column col-lg-6 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Faq's</span>
                  <h2 className="words-slide-up text-split">Frequently Asked Questions?</h2>
                  <div className="text">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </div>
                <div className="graph-box d-flex align-items-center justify-content-between">
                  {/* Pie Graph */}
                  <div className="pie-graph-two d-sm-flex align-items-center justify-content-between">
                    <div className="graph-outer">
                      <div style={{ width: 110, height: 110 }}>
                        <CircularProgressbar value={78} text={`${percentage}%`} styles={buildStyles({
                          textColor: "#000000",
                          trailColor: '#d6d6d6',
                          pathColor: "#0f9444",
                          strokeWidth: "2",
                        })} />
                      </div>
                    </div>
                    <h5 className="title ms-sm-5">Clients <br />Satisfied</h5>
                  </div>
                  {/* Pie Graph */}
                  <div className="pie-graph-two d-sm-flex align-items-center justify-content-between">
                    <div className="graph-outer">
                      <div style={{ width: 110, height: 110 }}>
                        <CircularProgressbar value={90} text={`${percentage2}%`} styles={buildStyles({
                          textColor: "#000000",
                          trailColor: '#d6d6d6',
                          pathColor: "#0f9444",
                          strokeWidth: "2",
                        })} />
                      </div>
                    </div>
                    <h5 className="title ms-sm-5">Visa <br />Approvals</h5>
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

export default Faq;
