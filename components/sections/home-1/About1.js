import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="icon-plane-2 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div
              className="content-column col-lg-6 order-lg-2 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  {" "}
                  <span className="sub-title">Who we are</span>
                  <h2 className="words-slide-up text-split">
                    Your trusted EB-5 Partner
                  </h2>
                  <div className="text">
                    DHANANI EB-5 International is a Texas-based Regional Center
                    with over 14 years of profitable and zero losses experience
                    in real estate developing and investing. We are registered
                    in Texas, Tennessee, Georgia, Arkansas, and Florida. Join us
                    as we continue to create a foundation and future for our
                    global investors.
                  </div>
                </div>
                <div className="row">
                  <div className="about-block col-md-6">
                    <div className="inner">
                      <i className="icon flaticon-plane"></i>
                      <h5 className="title">
                        <Link href="#">
                          Expertise visa <br />
                          Processing
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="about-block col-md-6">
                    <div className="inner">
                      {" "}
                      <i className="icon flaticon-passport"></i>
                      <h5 className="title">
                        <Link href="#">
                          Fastest Working <br />
                          Process
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <ul className="list-style-one">
                  <li>
                    <i className="icon fas fa-arrow-alt-circle-right"></i> We
                    strongly support best practice
                  </li>
                  <li>
                    <i className="icon fas fa-arrow-alt-circle-right"></i> Our
                    operations around the world and across
                  </li>
                </ul>
                <Link
                  href="/about"
                  className="theme-btn btn-style-one hover-dark"
                >
                  <span className="btn-title">Read More</span>
                </Link>
              </div>
            </div>
            <div className="image-column col-lg-6 wow fadeInLeft">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src="images/people/people-19.jpg" alt="Image" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
