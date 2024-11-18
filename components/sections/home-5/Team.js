import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function TestimonialSection() {
  return (
    <>
  <section className="team-section-three pt-0">
    <div className="bg bg-image" style={{backgroundImage: 'url(./images/background/bg6.jpg)'}}></div>
      <div className="auto-container">
        <div className="sec-title text-center"> <span className="sub-title">Our Team</span>
          <h2 className="words-slide-up text-split">Experienced Team Members</h2>
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
          className="team-carousel owl-carousel owl-theme default-dots">
            <SwiperSlide>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-1.jpg" alt="Image"/></Link></figure>
                    <div className="info-box">
                      <h4 className="name"><Link href="page-team-details">Andrew More</Link></h4>
                      <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
                      <div className="social-links">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-2.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Andrew More</Link></h4>
                    <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-3.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Andrew More</Link></h4>
                    <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-1.jpg" alt="Image"/></Link></figure>
                    <div className="info-box">
                      <h4 className="name"><Link href="page-team-details">Andrew More</Link></h4>
                      <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
                      <div className="social-links">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      </div>
                    </div>
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