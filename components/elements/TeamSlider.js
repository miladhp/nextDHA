import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const TeamSlider = () => {
  const teamMembers = [
    {
      name: 'Andrew More',
      designation: 'Support Engineer',
      imgSrc: '/images/resource/team1-1.jpg',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Andrew More',
      designation: 'Support Engineer',
      imgSrc: '/images/resource/team1-2.jpg',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    {
      name: 'Andrew More',
      designation: 'Support Engineer',
      imgSrc: '/images/resource/team1-3.jpg',
      socialLinks: {
        twitter: '#',
        instagram: '#',
        facebook: '#',
      },
    },
    // Add more members as needed
  ];

  return (
   

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
          className="team-carousel"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="/page-team-details">
                        <img src={member.imgSrc} alt={member.name} />
                      </Link>
                    </figure>
                    <div className="info-box">
                      <h4 className="name">
                        <Link href="/page-team-details">{member.name}</Link>
                      </h4>
                      <span className="designation">{member.designation}</span>
                      <span className="share-icon fa fa-share-alt"></span>
                      <div className="social-links">
                        <Link href={member.socialLinks.twitter}><i className="fab fa-twitter"></i></Link>
                        <Link href={member.socialLinks.instagram}><i className="fab fa-instagram"></i></Link>
                        <Link href={member.socialLinks.facebook}><i className="fab fa-facebook-f"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="/page-team-details">
                        <img src={member.imgSrc} alt={member.name} />
                      </Link>
                    </figure>
                    <div className="info-box">
                      <h4 className="name">
                        <Link href="/page-team-details">{member.name}</Link>
                      </h4>
                      <span className="designation">{member.designation}</span>
                      <span className="share-icon fa fa-share-alt"></span>
                      <div className="social-links">
                        <Link href={member.socialLinks.twitter}><i className="fab fa-twitter"></i></Link>
                        <Link href={member.socialLinks.instagram}><i className="fab fa-instagram"></i></Link>
                        <Link href={member.socialLinks.facebook}><i className="fab fa-facebook-f"></i></Link>
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
