import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 3,
    },
  },
};

const Project = () => {
  return (
    <section className="project-section pb-0">
      <div className="bg bg-shape"></div>
      <div className="auto-container">
        <div className="sec-title light text-center">
          <span className="sub-title">Galleries</span>
          <h2 className="words-slide-up text-split">
            We delivered results for <br /> industry leaders
          </h2>
        </div>
      </div>
      <div className="carousel-outer">
        <Swiper {...swiperOptions} className="projects-carousel-two">
          <SwiperSlide className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-project-details">
                    <img src="/images/resource/project1-1.jpg" alt="Project 1" />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <Link href="/page-project-details" className="theme-btn read-more">
                  <i className="far fa-arrow-up"></i>
                </Link>
                <h4 className="title">
                  <Link href="/page-project-details">Tourist Places</Link>
                </h4>
                <span className="cat">Gcom Company</span>
              </div>
              <div className="overlay-1"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-project-details">
                    <img src="/images/resource/project1-2.jpg" alt="Project 2" />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <Link href="/page-project-details" className="theme-btn read-more">
                  <i className="far fa-arrow-up"></i>
                </Link>
                <h4 className="title">
                  <Link href="/page-project-details">Accurate & Expert</Link>
                </h4>
                <span className="cat">Gcom Company</span>
              </div>
              <div className="overlay-1"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-project-details">
                    <img src="/images/resource/project1-3.jpg" alt="Project 3" />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <Link href="/page-project-details" className="theme-btn read-more">
                  <i className="far fa-arrow-up"></i>
                </Link>
                <h4 className="title">
                  <Link href="/page-project-details">Visa Enquiry</Link>
                </h4>
                <span className="cat">Gcom Company</span>
              </div>
              <div className="overlay-1"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-project-details">
                    <img src="/images/resource/project1-4.jpg" alt="Project 4" />
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <Link href="/page-project-details" className="theme-btn read-more">
                  <i className="far fa-arrow-up"></i>
                </Link>
                <h4 className="title">
                  <Link href="/page-project-details">Spousal Visa</Link>
                </h4>
                <span className="cat">Gcom Company</span>
              </div>
              <div className="overlay-1"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
