import { useState } from 'react';

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <section className="innerpage">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="accordion-box wow fadeInRight">
              <li className={`accordion block ${activeAccordion === 1 ? 'active-block' : ''}`}>
                <div className={`acc-btn pl-25 ${activeAccordion === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                  How to soft launch your business?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={`acc-content ${activeAccordion === 1 ? 'current' : ''}`}>
                  <div className="content">
                    <div className="text">
                      There are many variations of passages the majority have suffered alteration in some form of injected humour or randomized words, believable lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.
                    </div>
                  </div>
                </div>
              </li>

              <li className={`accordion block ${activeAccordion === 2 ? 'active-block' : ''}`}>
                <div className={`acc-btn pl-25 ${activeAccordion === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                  Is my technology allowed on tech?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={`acc-content ${activeAccordion === 2 ? 'current' : ''}`}>
                  <div className="content">
                    <div className="text">
                      There are many variations of passages the majority have suffered alteration in some form of injected humour or randomized words, believable lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.
                    </div>
                  </div>
                </div>
              </li>

              <li className={`accordion block ${activeAccordion === 3 ? 'active-block' : ''}`}>
                <div className={`acc-btn pl-25 ${activeAccordion === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                  How to turn visitors into contributors?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={`acc-content ${activeAccordion === 3 ? 'current' : ''}`}>
                  <div className="content">
                    <div className="text">
                      There are many variations of passages the majority have suffered alteration in some form of injected humour or randomized words, believable lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.
                    </div>
                  </div>
                </div>
              </li>

              <li className={`accordion block ${activeAccordion === 4 ? 'active-block' : ''}`}>
                <div className={`acc-btn pl-25 ${activeAccordion === 4 ? 'active' : ''}`} onClick={() => handleClick(4)}>
                  How can I find my solutions?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={`acc-content ${activeAccordion === 4 ? 'current' : ''}`}>
                  <div className="content">
                    <div className="text">
                      There are many variations of passages the majority have suffered alteration in some form of injected humour or randomized words, believable lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
