import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    1199: {
      slidesPerView: 2,
    },
    1350: {
      slidesPerView: 2,
    },
  },
};

const TestimonialSection = () => {
  return (
    <section className="testimonial-section-two">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(./images/icons/bg-shape2.jpg)" }}
      ></div>
      <div className="auto-container">
        <div className="sec-title light text-center">
          {" "}
          <span className="sub-title">testimonials</span>
          <h2 className="words-slide-up text-split">
            What say peoples
            <br />
            about us
          </h2>
        </div>
        <div className="carousel-outer">
          <Swiper
            {...swiperOptions}
            className="testimonial-carousel-three owl-carousel owl-theme default-dots"
          >
            {/* Testimonial Block */}
            <SwiperSlide className="testimonial-block-two" key={1}>
              <div className="inner-box">
                <div className="image-box">
                  <figure className="thumb">
                    <img src="images/resource/testi2-1.jpg" alt="Image" />
                  </figure>
                  <div className="icon-quote"></div>
                </div>
                <div className="content-box">
                  <h6 className="reason">Great Service</h6>
                  <div className="rating">
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                  </div>
                  <div className="text">
                    Build and implement innovative, profitable and sustainable
                    products and services that help
                  </div>
                  <h6 className="name">Mark Wood</h6>
                  <span className="designation">CEO, Buzicon</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial-block-two" key={2}>
              <div className="inner-box">
                <div className="image-box">
                  <figure className="thumb">
                    <img src="images/resource/testi2-2.jpg" alt="Image" />
                  </figure>
                  <div className="icon-quote"></div>
                </div>
                <div className="content-box">
                  <h6 className="reason">Great Service</h6>
                  <div className="rating">
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                  </div>
                  <div className="text">
                    Build and implement innovative, profitable and sustainable
                    products and services that help
                  </div>
                  <h6 className="name">Mark Wood</h6>
                  <span className="designation">CEO, Buzicon</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial-block-two" key={3}>
              <div className="inner-box">
                <div className="image-box">
                  <figure className="thumb">
                    <img src="images/resource/testi2-1.jpg" alt="Image" />
                  </figure>
                  <div className="icon-quote"></div>
                </div>
                <div className="content-box">
                  <h6 className="reason">Great Service</h6>
                  <div className="rating">
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                  </div>
                  <div className="text">
                    Build and implement innovative, profitable and sustainable
                    products and services that help
                  </div>
                  <h6 className="name">Mark Wood</h6>
                  <span className="designation">CEO, Buzicon</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
