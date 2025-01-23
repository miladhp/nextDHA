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
          <div className="h-100 d-flex items-center row justify-content-around gap-3">
            {MATTERS.length > 0 &&
              MATTERS.map((m) => {
                return (
                  <MatterBox
                    style={{ minHeight: "270px" }}
                    key={m.id}
                    matter={m}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
