import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const TeamSlider = () => {
  const teamMembers = [
    {
      img: "/images/team/Nick-Dhanani.jpg",
      name: "Nick Dhanani",
      designation: "Principal",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      img: "/images/team/Nikhil-Dhanani.jpg",
      name: "Nikhil Dhanani",
      designation: "President",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      img: "/images/team/Ali-Wadhwani.jpg",
      name: "Chief Financial Officer",
      designation: "Support Engineer",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      img: "/images/team/Anil-Goel.jpg",
      name: "Anil Goel",
      designation: "Chief Strategy Officer",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      img: "/images/team/Faiz-Hirani.jpg",
      name: "Faiz Hirani",
      designation: "Principal, Investor Relations & Marketing",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      img: "/images/team/Lucy-Singh.jpg",
      name: "Lucy Singh",
      designation: "Chief Operating Officer",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      img: "/images/team/Narmeen.png",
      name: "Narmeen Nazneen",
      designation: "Principal, Design",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      img: "/images/team/Aaryan-Dhanan.jpg",
      name: "Aaryan Dhanani",
      designation: "Managing Associate",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      img: "/images/team/Junior-Dhanani.jpg",
      name: "Junior Dhanani",
      designation: "Managing Associate",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    // Add more members as needed
  ];

  return (
    <Swiper
      spaceBetween={30}
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
      className="team-carousel"
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index}>
          <div className="team-block">
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
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
