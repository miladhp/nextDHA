import Link from "next/link";

const Featue = () => {
  return (
    <section className="features-section pt-0">
      <div
        className="bg-image"
        style={{ backgroundImage: "url(./images/icons/pattern-1.png)" }}
      ></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="feature-block col-xl-4 col-md-6 wow fadeInUp">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-approved-1"></i>
                </div>
                <div className="content">
                  <h4 className="title text-nowrap">OUR TRACK RECORD</h4>
                  <div className="text">
                    Our history is built on successful EB-5 investments, with a
                    focus on delivering strong financial results and successful
                    immigration outcomes for our investors.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="feature-block col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-cooperation"></i>
                </div>
                <div className="content">
                  <h4 className="title">OUR TRANSPARENCY</h4>
                  <div className="text">
                    We maintain open, honest communication throughout every
                    stage of the investment process, ensuring clarity and trust.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="feature-block col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield"></i>
                </div>
                <div className="content">
                  <h4 className="title">OUR EQUITY AND DEBT</h4>
                  <div className="text">
                    Structured to minimize risk, our equity and debt strategies
                    aim to maximize investor returns while ensuring project
                    viability.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-box">
        <div className="auto-container">
          <div className="inner-box">
            <p className="text">
              Want more information? Reach out to us today
              <Link href="/contact">Request A Meeting</Link>
            </p>
            <div className="btn-box">
              <i className="icon fa fa-phone"></i>
              <Link
                href="tel:+18663426264"
                className="theme-btn btn-style-one hover-dark"
              >
                <span className="btn-title">+1-866-Dhanani (342-6264)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featue;
