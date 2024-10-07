import React from 'react';

const Process = () => {
  const steps = [
    {
      icon: 'flaticon-documents',
      step: 'Step 01',
      title: 'Complete Online Registrations',
      text: 'These cases are perfectly simple and easy to distinguish.',
      delay: '',
    },
    {
      icon: 'flaticon-licensing',
      step: 'Step 02',
      title: 'Documents and Payments',
      text: 'These cases are perfectly simple and easy to distinguish.',
      delay: '300ms',
    },
    {
      icon: 'flaticon-visa',
      step: 'Step 03',
      title: 'Receive your Visa Now',
      text: 'These cases are perfectly simple and easy to distinguish.',
      delay: '600ms',
    },
  ];

  return (
    <section className="process-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Working Process</span>
          <h2 className="scrub-each-word text-split">
            Get your visa approved in <br /> 3 easy simple steps
          </h2>
        </div>

        <div className="outer-box">
          <div className="icon-line"></div>
          <div className="row">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp`}
                style={{ animationDelay: step.delay }}
              >
                <div className="inner-box">
                  <i className={`icon ${step.icon}`}></i>
                  <div className="content">
                    <span className="step">{step.step}</span>
                    <h5 className="title">{step.title}</h5>
                    <div className="text">{step.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
