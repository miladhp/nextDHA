import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function TestimonialSection() {
  return (
    <>
    <section className="services-section-two">
      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}></div>
      <div className="auto-container">
        <div className="sec-title text-center"> <span className="sub-title">SERVICE WE PROVIDE</span>
          <h2 className="words-slide-up text-split">Out standingi mmigration <br/>visa services</h2>
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
          className="services-carousel owl-carousel owl-theme default-dots">
            <SwiperSlide>
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-service-details"><img src="images/resource/service1-1.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <div className="inner"> <i className="icon flaticon-passport-3"></i>
                      <h4 className="title"><Link href="page-service-details">Student Visa</Link></h4>
                      <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
                    </div>
                    <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Learn more <i className="fa fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-service-details"><img src="images/resource/service1-2.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <div className="inner"> <i className="icon flaticon-family"></i>
                      <h4 className="title"><Link href="page-service-details">Family Visa</Link></h4>
                      <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
                    </div>
                    <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Learn more <i className="fa fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-service-details"><img src="images/resource/service1-3.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <div className="inner"> <i className="icon flaticon-visa-4"></i>
                      <h4 className="title"><Link href="page-service-details">Business Visa</Link></h4>
                      <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
                    </div>
                    <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Learn more <i className="fa fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-service-details"><img src="images/resource/service1-4.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <div className="inner"> <i className="icon flaticon-flight-1"></i>
                      <h4 className="title"><Link href="page-service-details">Working Visa</Link></h4>
                      <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
                    </div>
                    <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Learn more <i className="fa fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}