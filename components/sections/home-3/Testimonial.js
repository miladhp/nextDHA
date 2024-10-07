import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function TestimonialSection() {
  return (
    <>
    <section className="testimonial-section-three">
      <div className="bg-shape" style={{ backgroundImage: 'url(/images/icons/map.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Testimonials</span>
          <h2 className="words-slide-up text-split">What say peoples about us</h2>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          pagination={{clickable: true,}}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-carousel-two owl-carousel owl-theme default-dots">
            <SwiperSlide>
              <div className="testimonial-block">
                <div className="inner-box">
                  <figure className="thumb"><img src="images/resource/testi1-1.jpg" alt="Image"/></figure>
                  <h6 className="reason">Great Service</h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
                  <div className="info-box">
                    <h6 className="name">Mark Wood</h6>
                    <span className="designation">CEO, Buzicon</span>
                  </div>
                  <div className="icon-quote-2"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block">
                <div className="inner-box">
                  <figure className="thumb"><img src="images/resource/testi1-2.jpg" alt="Image"/></figure>
                  <h6 className="reason">Great Service</h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
                  <div className="info-box">
                    <h6 className="name">Mark Wood</h6>
                    <span className="designation">CEO, Buzicon</span>
                  </div>
                  <div className="icon-quote-2"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block">
                <div className="inner-box">
                  <figure className="thumb"><img src="images/resource/testi1-1.jpg" alt="Image"/></figure>
                  <h6 className="reason">Great Service</h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
                  <div className="info-box">
                    <h6 className="name">Mark Wood</h6>
                    <span className="designation">CEO, Buzicon</span>
                  </div>
                  <div className="icon-quote-2"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block">
                <div className="inner-box">
                  <figure className="thumb"><img src="images/resource/testi1-2.jpg" alt="Image"/></figure>
                  <h6 className="reason">Great Service</h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
                  <div className="info-box">
                    <h6 className="name">Mark Wood</h6>
                    <span className="designation">CEO, Buzicon</span>
                  </div>
                  <div className="icon-quote-2"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}