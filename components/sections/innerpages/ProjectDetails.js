import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Thumbs } from "swiper/modules";

const ProjectDetails = ({ project, projectId }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      {/* Product Details Start */}
      <section className="product-details">
        <div className="container pb-70">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="bxslider">
                <div className="slider-content">
                  <Swiper
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Navigation, Autoplay, Thumbs]}
                    loop={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    className="slider-pager"
                  >
                    <SwiperSlide>
                      <div className="image-box">
                        <img src={project.img} alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="slider-pager"
                  >
                    <SwiperSlide className="product-thumb wide-100">
                      <figure className="image">
                        <img src={project.img} alt="" />
                      </figure>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 product-info">
              <div className="product-details__top">
                <h3 className="product-details__title">{project.title}</h3>
              </div>
              <div className="product-details__content">
                <p className="product-details__content-text1">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details End */}

      {/* Product Description Start  */}
      <section className="product-description">
        <div className="container pt-0 pb-90">
          <div className="product-discription">
            <div className="tabs-box">
              <div className="tab-btn-box text-center">
                <ul className="tab-btns tab-buttons clearfix">
                  <li
                    className={
                      activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"
                    }
                    onClick={() => handleOnClick(1)}
                    data-tab="#tab1"
                  >
                    Description
                  </li>
                  {/* <li
                    className={
                      activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"
                    }
                    onClick={() => handleOnClick(2)}
                    data-tab="#tab2"
                  >
                    Reviews
                  </li> */}
                </ul>
              </div>
              <div className="tabs-content">
                <div
                  className={activeIndex === 1 ? "tab active-tab" : "tab"}
                  id="tab1"
                >
                  <div className="text">
                    <h3 className="product-description__title">Description</h3>
                    <p className="product-description__text1">
                      Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                      phaedrum. There are many variations of passages of Lorem
                      Ipsum available, but the majority have alteration in some
                      injected or words which don't look even slightly
                      believable. If you are going to use a passage of Lorem
                      Ipsum, you need to be sure there isn't anything embarrang
                      hidden in the middle of text.
                    </p>
                    <div className="product-description__list">
                      <ul className="list-unstyled">
                        <li>
                          <p>
                            <span className="fa fa-arrow-right"></span> Nam at
                            elit nec neque suscipit gravida.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="fa fa-arrow-right"></span> Aenean
                            egestas orci eu maximus tincidunt.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="fa fa-arrow-right"></span>{" "}
                            Curabitur vel turpis id tellus cursus laoreet.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <p className="product-description__tex2">
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable.
                    </p>
                  </div>
                </div>
                {/* <div
                  className={activeIndex === 2 ? "tab active-tab" : "tab"}
                  id="tab2"
                >
                
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectDetails;
