import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PartnerBox from "@/components/elements/PartnerBox";
import { PARTNERS } from "@/constants/global";

export default function PartnershipsSection() {
  return (
    <>
      <section className="services-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">communities</span>
            <h2 className="scrub-each-word text-split">Our Partnerships</h2>
            <p className="mt-3">
              The DPEG Foundation proudly partners with brilliant organizations
              that push forward good causes to make a positive impact in our
              communities.
            </p>
          </div>
          <div className="row">
            {PARTNERS.length > 0 &&
              PARTNERS.map((p) => {
                return (
                  <div className="col-12 col-md-3 col-lg-3 mt-4" key={p.id}>
                    <PartnerBox hasDescription={true} data={p} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
