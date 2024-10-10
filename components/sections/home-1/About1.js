import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="icon-plane-2 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="image-column col-lg-8 order-1 order-lg-2 wow fadeInLeft">
              <div className="inner-column ps-0">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src="images/posters/HB5-cover.png" alt="Image" />
                  </figure>
                </div>
              </div>
            </div>
            <div
              className="content-column col-lg-4 order-2 order-lg-1 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  {" "}
                  <span className="sub-title">Who we are</span>
                  <h2 className="words-slide-up text-split">
                    Your trusted <br /> EB-5 Partner
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

                <Link
                  href="/about"
                  className="theme-btn btn-style-one hover-dark"
                >
                  <span className="btn-title">Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
