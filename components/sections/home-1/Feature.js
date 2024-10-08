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
                  <i className="icon flaticon-insurance"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="about">Immigration & Visa Process</Link>
                  </h4>
                  <div className="text">
                    We strongly support best practice sharing across
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
                  <i className="icon flaticon-visa"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="about">Quick & Easy Visa Application</Link>
                  </h4>
                  <div className="text">
                    We strongly support best practice sharing across
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
                  <i className="icon flaticon-visa-4"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="about">Expert & Experince Consultants</Link>
                  </h4>
                  <div className="text">
                    We strongly support best practice sharing across
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
              <Link href="page-contact">Request A Meeting</Link>
            </p>
            <div className="btn-box">
              <i className="icon fa fa-phone"></i>
              <Link
                href="tel:+18663426264"
                className="theme-btn btn-style-one hover-dark"
              >
                <span className="btn-title">+1-866-DHANANI (342-6264)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featue;
