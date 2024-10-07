import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import TeamSlider from '@/components/elements/TeamSlider';
const About = () => {
  const services = [
    {
      title: 'Student Visa',
      description: 'We offer end-to-end logistics tailored for specific markets, providing a solution.',
      iconClass: 'flaticon-passport-3',
      imgSrc: '/images/resource/service1-1.jpg',
      count: '01',
    },
    {
      title: 'Family Visa',
      description: 'We offer end-to-end logistics tailored for specific markets, providing a solution.',
      iconClass: 'flaticon-family',
      imgSrc: '/images/resource/service1-2.jpg',
      count: '02',
    },
    {
      title: 'Business Visa',
      description: 'We offer end-to-end logistics tailored for specific markets, providing a solution.',
      iconClass: 'flaticon-visa-4',
      imgSrc: '/images/resource/service1-3.jpg',
      count: '03',
    },
    {
      title: 'Working Visa',
      description: 'We offer end-to-end logistics tailored for specific markets, providing a solution.',
      iconClass: 'flaticon-flight-1',
      imgSrc: '/images/resource/service1-4.jpg',
      count: '04',
    },
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="about-section-two">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Who we are</span>
                <h2>Best Immigration & Visa Consultation.</h2>
                <div className="text">There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered majority have in some</div>
              </div>

              <div className="content-box">
                <div className="info-box">
                  <h5 className="title">Ready to fly with us your dream country</h5>
                  <Link href="#" className="read-more">More <i className="fa fa-long-arrow-alt-right"></i></Link>
                </div>

                <div className="about-block-two">
                  <i className="icon flaticon-take-off"></i>
                  <h5 className="title"> Visa Consultation </h5>
                  <div className="text">There are many variations of passages of but the majority have in some form</div>
                </div>

                <div className="about-block-two">
                  <i className="icon flaticon-global-1"></i>
                  <h5 className="title">Professional Services</h5>
                  <div className="text">There are many variations of passages of but the majority have in some form</div>
                </div>
              </div>

              <div className="btm-box">
                <Link href="page-about" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Discover more</span></Link>
              </div>
            </div>
          </div>
          <div className="image-column col-xl-6 col-lg-5 col-md-8 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about2-1.jpg" alt="" /></figure>
              <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about2-2.jpg" alt="" /></figure>
              <div className="experience bounce-y">
                <img src="images/resource/about2-3.jpg" alt="" className="icon" />
                <strong>32600+</strong> Clients Satisfied
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-section-two">
      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Service We Provide</span>
          <h2 className="scrub-each-word text-split">
            Outstanding Immigration<br />Visa Services
          </h2>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="service-carousel" >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={service.imgSrc} alt={service.title} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="inner">
                      <i className={`icon ${service.iconClass}`}></i>
                      <h4 className="title">
                        <Link href="/page-service-details">{service.title}</Link>
                      </h4>
                      <div className="text">{service.description}</div>
                    </div>
                    <Link href="/page-service-details" className="theme-btn btn-style-one dark-bg">
                      <span className="btn-title">
                        Learn More <i className="fa fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
   
    <section className="video-section">
      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }} ></div>
      <div className="overlay-2"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="title-box">
            <h2 className="title words-slide-up text-split"> Most Trusted <br /> Immigration & Visa <br /> Solutions Agency </h2>
          </div>
          <div className="video-box">
            <div className="icon-box">
              <h4 className="title">Watch Video</h4>
              <img src="/images/icons/icon-arrow3.png" alt="icon" />
            </div>
            <a
              onClick={() => setOpen(true)}
              className="play-now-two"
              data-fancybox="gallery"
              data-caption="" >
              <i className="icon fa fa-play" aria-hidden="true"></i>
              <span className="ripple"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="country-section-two">
      <div className="outer-box">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Choose Country</span>
                <h2 className="scrub-each-word text-split">Immigration Choose <br/>Your Country</h2>
              </div>
              <div className="row">
                <div className="country-block col-lg-6 col-md-6 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <img src="images/resource/country1-1.jpeg" alt="Image" />
                      <h4 className="title"><Link href="page-country-details">Australia </Link></h4>
                    </div>
                    <div className="text">We denou righteous indigna beguiled demoralized</div>
                    <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="country-block col-lg-6 col-md-6 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <img src="images/resource/country1-2.jpeg" alt="Image" />
                      <h4 className="title"><Link href="page-country-details">Germany</Link></h4>
                    </div>
                    <div className="text">We denou righteous indigna beguiled demoralized</div>
                    <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="country-block col-lg-6 col-md-6 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <img src="images/resource/country1-3.png" alt="Image" />
                      <h4 className="title"><Link href="page-country-details">Dubai</Link></h4>
                    </div>
                    <div className="text">We denou righteous indigna beguiled demoralized</div>
                    <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="country-block col-lg-6 col-md-6 col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <img src="images/resource/country1-4.jpeg" alt="Image" />
                      <h4 className="title"><Link href="page-country-details">England</Link></h4>
                    </div>
                    <div className="text">We denou righteous indigna beguiled demoralized</div>
                    <Link href="page-country-details" className="read-more"><i className="fa fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image wow zoomIn"><img src="images/resource/country2-1.png" alt="Image" /></figure>
              <div className="bg-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
	  <section className="team-section pt-0">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Our Team</span>
          <h2 className="words-slide-up text-split">Experience Team Members</h2>
        </div>
        <TeamSlider />
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
export default About
