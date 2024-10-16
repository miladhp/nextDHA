import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer footer-style-one">
        <div className="bg-shape"></div>
        <div className="footer-top">
          <div className="auto-container">
            <div className="outer-box">
              <div
                className="bg bg-image"
                style={{ backgroundImage: "url(./images/background/bg2.jpg)" }}
              ></div>
              <ul className="contact-list-two light">
                <li>
                  <i className="icon fal fa-phone"></i>
                  <div className="text">
                    Call Us <br />
                    <a href="tel:+18663426264">1-866-DHANANI (342-6264)</a>
                  </div>
                </li>
                <li>
                  <i className="icon fal fa-envelope"></i>
                  <div className="text">
                    Send Mail <br />
                    <a href="mailto:invest@dhananipeg.com">
                      invest@dhananipeg.com
                    </a>
                  </div>
                </li>
                <li>
                  <i className="icon fal fa-map-marker-alt"></i>
                  <div className="text">
                    Our Address <br />
                    <span>
                      11333 Fountain Lake, <br />
                      Dr Stafford, TX 77477
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-4 col-sm-6">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <a href="/">
                      <img src="images/logo-white.svg" alt="Logo" />
                    </a>
                  </div>
                  <div className="text">
                    Solidifying your foundation. Securing your future. One
                    investment at a time
                  </div>
                  <a
                    href="/about"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">Read More</span>
                  </a>
                </div>
              </div>

              <div className="footer-column col-xl-2 col-sm-6">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title">Services</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="/projects">Projecs</a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="/eb5#process">Process & Timeline</a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="/eb5#benefits">Benefits</a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="/eb5#comparison">Comparison</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-2 col-sm-6">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title">Useful Links</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="/eb5">EB-5 Program</a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-4 col-sm-6">
                <div className="footer-widget links-widget">
                  <div className="logo">
                    <a href="/">
                      <img src="./images/logo-DEPG.svg" alt="Logo" />
                    </a>
                  </div>
                  <div className="widget-content mt-4 d-flex align-items-center justify-content-between">
                    <ul className="user-links">
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="https://dhananipeg.com/dpeg-energy/">
                          DPEG Energy
                        </a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="https://dhananipeg.com/construction/">
                          DPEG Construction
                        </a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="https://dhananipeg.com/dpeg-foods/">
                          DPEG Foods
                        </a>
                      </li>
                    </ul>
                    <ul className="user-links">
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="https://mckinneyandco.com/">DPEG Insurance</a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="https://dhananipeg.com/lending/">
                          DPEG Lending
                        </a>
                      </li>
                      <li>
                        <i className="icon fas fa-angle-double-right"></i>
                        <a href="https://dhananipeg.com/dpeg-foundation/">
                          DPEG Foundation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <small className="text-gray">
                  The information in this website is solely educational and is
                  not an offer for the sale of securities. Nothing in this
                  website shall be construed as an offer for investment in
                  Dhanani EB-5 International, LLC (the “Company”). Solicitations
                  for investments will only be made through a Private Placement
                  Memorandum provided to potential investors for such purpose.
                  <Link
                    className="text-white"
                    target="_blank"
                    href="/disclaimer"
                  >
                    Disclaimer
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">
                © Copyrights reserved by DHANANI.
              </div>
              <ul className="social-icon-two">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
