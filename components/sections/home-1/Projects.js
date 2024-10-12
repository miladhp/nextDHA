import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { PROJECTS } from "@/constants/global";
import ProjectBox from "@/components/elements/ProjectBox";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 3,
    },
  },
};

const Project = () => {
  return (
    <section className="project-section pb-0" id="projects">
      <div className="bg bg-shape"></div>
      <div className="auto-container">
        <div className="sec-title light text-center">
          <h2 className="words-slide-up text-split">Our Projects</h2>
        </div>
      </div>
      <div className="carousel-outer">
        <Swiper {...swiperOptions} className="projects-carousel-two">
          {PROJECTS.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <ProjectBox project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
