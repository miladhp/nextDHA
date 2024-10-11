import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MATTERS } from "@/constants/global";
import MatterBox from "@/components/elements/MatterBox";

export default function MattersSection() {
  return (
    <>
      <section className="services-section">
        <div
          className="bg bg-image"
          style={{ backgroundImage: "url(/images/banner/1.jpg)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title light text-center">
            <h2 className="scrub-each-word text-split">
              What Matters Most To Our Investors
            </h2>
          </div>
          <div className="carousel-outer">
            <Swiper
              spaceBetween={40}
              slidesPerView={3.5}
              loop={false}
              autoplay={{
                delay: 250000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="service-carousel-one owl-carousel owl-theme default-dots"
            >
              {MATTERS.length > 0 &&
                MATTERS.map((m) => {
                  return (
                    <SwiperSlide
                      key={m.id}
                      className="h-100 d-grid"
                      style={{ minHeight: "270px" }}
                    >
                      <MatterBox matter={m} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
