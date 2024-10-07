import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const Client = () => {
  const clients = [
    { src1: '/images/clients/1-1.png', src2: '/images/clients/1-1.png' },
    { src1: '/images/clients/1-2.png', src2: '/images/clients/1-2.png' },
    { src1: '/images/clients/1-3.png', src2: '/images/clients/1-3.png' },
    { src1: '/images/clients/1-4.png', src2: '/images/clients/1-4.png' },
    { src1: '/images/clients/1-2.png', src2: '/images/clients/1-2.png' },
  ];

  return (
    <section className="clients-section">
      <div className="auto-container">
        <div className="sponsors-outer">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="clients-carousel"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="client-block">
                  <Link href="#">
                    <div className="image">
                      <img src={client.src1} alt={`Client ${index + 1}`} />
                      <img src={client.src2} alt={`Client ${index + 1}`} />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="client-block">
                  <Link href="#">
                    <div className="image">
                      <img src={client.src1} alt={`Client ${index + 1}`} />
                      <img src={client.src2} alt={`Client ${index + 1}`} />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Client;
