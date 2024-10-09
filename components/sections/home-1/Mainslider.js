import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="main-slider">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/images/background/bg.jpeg)" }}
      ></div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="content-columnn col-xl-7">
            <div className="content-box">
              <div className="icon-plane-1"></div>
              <span className="sub-title wow fadeInUp" data-wow-delay="200ms">
                Solidifying your foundation , Securing your future.
                <br />
                One investment at a time
              </span>
              <h1 className="title wow fadeInUp" data-wow-delay="300ms">
                DHANANI EB-5 International Program
              </h1>
              <div className="btn-box wow fadeInUp" data-wow-delay="500ms">
                <Link href="about" className="theme-btn btn-style-one">
                  <span className="btn-title">More Info</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="image-column col-xl-5">
            <div className="image-box wow fadeInRight" data-wow-delay="600ms">
              <figure className="image position-relative mb-0">
                <img src="images/people/people-3.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
