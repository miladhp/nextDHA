import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Testimonial() {
  return (
    <section className="testimonial-section stytle-three">
      <div className="bg bg-shape" style={{ backgroundImage: "url('/images/icons/bg-shape2.jpg')" }} ></div>
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-5">
            <div className="sec-title light"> <span className="sub-title">testimonials</span>
              <h2 className="words-slide-up text-split">What say peoples<br />about us</h2>
              <div className="text">We strongly support best practice sharing across our operations around the world and across various transporation sectors</div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="carousel-outer">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                loop={true}
                pagination={{ clickable: true }}
                className="testimonial-carousel-four owl-carousel owl-theme default-navs">
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-block">
                      <div className="inner-box">
                        <figure className="thumb">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                          />
                        </figure>
                        <h6 className="reason">{testimonial.reason}</h6>
                        <div className="rating">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <i className="fa fa-star" key={i}></i>
                            ))}
                        </div>
                        <div className="text">{testimonial.text}</div>
                        <div className="info-box">
                          <h6 className="name">{testimonial.name}</h6>
                          <span className="designation">
                            {testimonial.designation}
                          </span>
                        </div>
                        <div className="icon-quote-2"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    image: '/images/resource/testi1-1.jpg',
    name: 'Mark Wood',
    reason: 'Great Service',
    text: 'Build and implement innovative, profitable and sustainable products and services that help.',
    designation: 'CEO, Buzicon',
  },
  {
    image: '/images/resource/testi1-2.jpg',
    name: 'Mark Wood',
    reason: 'Great Service',
    text: 'Build and implement innovative, profitable and sustainable products and services that help.',
    designation: 'CEO, Buzicon',
  },
  {
    image: '/images/resource/testi1-3.jpg',
    name: 'Mark Wood',
    reason: 'Great Service',
    text: 'Build and implement innovative, profitable and sustainable products and services that help.',
    designation: 'CEO, Buzicon',
  },
  // Add more testimonials as needed
];
