import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function TestimonialSection() {
  return (
    <>
    <section className="services-section">
      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg1.jpg)' }}></div>
      <div className="auto-container">
        <div className="sec-title light text-center">
          <span className="sub-title">Service We Provide</span>
          <h2 className="scrub-each-word text-split">Outstanding Immigration<br />Visa Services</h2>
        </div>
        <div className="carousel-outer">
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
            className="service-carousel-one owl-carousel owl-theme default-dots">
              <SwiperSlide>
                <div className="service-block">
                  <div className="inner-box">
                    <figure className="image">
                      <img src="images/resource/service1-1.jpg" alt="Image"/>
                      <img src="images/resource/service1-1.jpg" alt="Image"/>
                    </figure>
                    <div className="icon-box">
                      <div className="title-box">
                        <span className="count">01</span>
                        <h4 className="title"><Link href="page-service-details">Student Visa</Link></h4>
                      </div>
                      <i className="icon flaticon-document"></i>
                    </div>
                    <div className="content">
                      <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
                      <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-block">
                  <div className="inner-box">
                    <figure className="image">
                      <img src="images/resource/service1-2.jpg" alt="Image"/>
                      <img src="images/resource/service1-2.jpg" alt="Image"/>
                    </figure>
                    <div className="icon-box">
                      <div className="title-box">
                        <span className="count">02</span>
                        <h4 className="title"><Link href="page-service-details">Tourist Visa</Link></h4>
                      </div>
                      <i className="icon flaticon-family"></i>
                    </div>
                    <div className="content">
                      <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
                      <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-block">
                  <div className="inner-box">
                    <figure className="image">
                      <img src="images/resource/service1-3.jpg" alt="Image"/>
                      <img src="images/resource/service1-3.jpg" alt="Image"/>
                    </figure>
                    <div className="icon-box">
                      <div className="title-box">
                        <span className="count">03</span>
                        <h4 className="title"><Link href="page-service-details">Worker Visa</Link></h4>
                      </div>
                      <i className="icon flaticon-visa-4"></i>
                    </div>
                    <div className="content">
                      <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
                      <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-block">
                  <div className="inner-box">
                    <figure className="image">
                      <img src="images/resource/service1-4.jpg" alt="Image"/>
                      <img src="images/resource/service1-4.jpg" alt="Image"/>
                    </figure>
                    <div className="icon-box">
                      <div className="title-box">
                        <span className="count">01</span>
                        <h4 className="title"><Link href="page-service-details">Student Visa</Link></h4>
                      </div>
                      <i className="icon flaticon-flight-1"></i>
                    </div>
                    <div className="content">
                      <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
                      <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    </>
  );
}