import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const About5 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="about-section-five">
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">About Company</span>
                  <h2>Greetings to Experience Visa Consulting Firm.</h2>
                  <div className="text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa quae abillo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                  </div>
                </div>
                <div className="content-box">
                  <ul className="list-style-one">
                    <li>
                      <i className="icon fas fa-arrow-alt-circle-right"></i>{" "}
                      Make website without{" "}
                    </li>
                    <li>
                      <i className="icon fas fa-arrow-alt-circle-right"></i>{" "}
                      Full design freedom for everyone
                    </li>
                    <li>
                      <i className="icon fas fa-arrow-alt-circle-right"></i> Sed
                      ut perspiciatis unde omnis
                    </li>
                    <li>
                      <i className="icon fas fa-arrow-alt-circle-right"></i> We
                      denou righteous indigna
                    </li>
                  </ul>
                  <div className="video-block wow fadeInRight">
                    <div className="inner-box">
                      <div
                        className="bg bg-image"
                        style={{
                          backgroundImage: "url(./images/resource/video-1.jpg)",
                        }}
                      ></div>
                      <div className="video-content-box">
                        <a
                          onClick={() => setOpen(true)}
                          className="play-now"
                          data-fancybox="gallery"
                          data-caption=""
                        >
                          <i className="icon fa fa-play" aria-hidden="true"></i>
                          <span className="ripple"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="btm-box">
                  <Link
                    href="about"
                    className="theme-btn btn-style-one hover-dark"
                  >
                    <span className="btn-title">Read more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-5 col-md-7 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp">
                  <img src="images/resource/about4-1.jpg" alt="" />
                </figure>
                <figure className="image-2 overlay-anim wow fadeInRight">
                  <img src="images/resource/about5-1.jpg" alt="" />
                </figure>
                <div className="info-icon bounce-">
                  <i className="icon flaticon-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Fvae8nxzVz4"
        onClose={() => setOpen(false)}
      />
    </>
  );
};
export default About5;
