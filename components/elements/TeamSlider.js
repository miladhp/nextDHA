import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MemberCard from "./MemberCard";
import { TEAM_MEMBERS } from "@/constants/global";
const TeamSlider = () => {
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={3}
      loop={false}
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
      className="team-carousel mt-3"
    >
      {TEAM_MEMBERS.map((member, index) => (
        <SwiperSlide key={index}>
          <MemberCard member={member} />
          {/* <div className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-team-details">
                    <Image
                      width={480}
                      height={960}
                      src={member.img}
                      alt={member.name}
                    />
                  </Link>
                </figure>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="/page-team-details">{member.name}</Link>
                  </h4>
                  <span className="designation">{member.designation}</span>
                  <span className="share-icon fa fa-share-alt"></span>
                  <div className="social-links">
                    <Link href={member.socialLinks.twitter}>
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href={member.socialLinks.instagram}>
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href={member.socialLinks.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
