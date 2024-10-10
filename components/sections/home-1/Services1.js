import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PartnerBox from "@/components/elements/PartnerBox";
import { PARTNERS } from "@/constants/global";

export default function TestimonialSection() {
  return (
    <>
      <section className="services-section">
        <div
          className="bg bg-image"
          style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title light text-center">
            <span className="sub-title">communities</span>
            <h2 className="scrub-each-word text-split">Our Partnerships</h2>
            <p className="text-white mt-3">
              The DPEG Foundation proudly partners with brilliant organizations
              that push forward good causes to make a positive impact in our
              communities.
            </p>
          </div>
          <div className="carousel-outer">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
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
              {PARTNERS.length > 0 &&
                PARTNERS.map((p) => {
                  return (
                    <SwiperSlide>
                      <PartnerBox hasDescription={false} data={p} />
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
