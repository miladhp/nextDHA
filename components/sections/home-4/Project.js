import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function TestimonialSection() {
  return (
    <>
    <section className="project-section-two">
      <div className="bg bg-image" style={{backgroundImage: 'url(/images/icons/gallery-1.jpg)'}}></div>
        <div className="auto-container">
          <div className="sec-title light text-center"> <span className="sub-title">Galleries</span>
            <h2 className="words-slide-up text-split">We delivered results for <br/>industry leaders</h2>
          </div>
        </div>
        <div className="outer-box">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
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
              1200: { slidesPerView: 4 },
            }}
            className="projects-carousel owl-carousel owl-theme default-dots">
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="page-project-details"><img src="images/resource/project2-1.jpg" alt="Image" /></Link></figure>
                    </div>
                    <div className="content-box">
                      <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                      <h4 className="title"><Link href="page-project-details">Tourist Places</Link></h4>
                      <span className="cat">Gcom Company</span>
                    </div>
                    <div className="overlay-1"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="page-project-details"><img src="images/resource/project2-2.jpg" alt="Image" /></Link></figure>
                    </div>
                    <div className="content-box">
                      <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                      <h4 className="title"><Link href="page-project-details">Accurate &amp; Expert</Link></h4>
                      <span className="cat">Gcom Company</span>
                    </div>
                    <div className="overlay-1"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="page-project-details"><img src="images/resource/project2-3.jpg" alt="Image" /></Link></figure>
                    </div>
                    <div className="content-box">
                      <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                      <h4 className="title"><Link href="page-project-details">Visa Enquiry</Link></h4>
                      <span className="cat">Gcom Company</span>
                    </div>
                    <div className="overlay-1"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="page-project-details"><img src="images/resource/project2-4.jpg" alt="Image" /></Link></figure>
                    </div>
                    <div className="content-box">
                      <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                      <h4 className="title"><Link href="page-project-details">Spousal Visa</Link></h4>
                      <span className="cat">Gcom Company</span>
                    </div>
                    <div className="overlay-1"></div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
    </>
  );
};