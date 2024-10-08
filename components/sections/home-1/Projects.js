import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const projects = [
  {
    img: "/images/projects/audubon-residential-bldg-renderings.jpeg",
    title: "Territory at Audubon",
    description: "Project Address: 16000 Audubon Trace, Magnolia, TX 77354",
    link: "page-project-details.html",
  },
  {
    img: "/images/projects/second-holzwarth-pic.jpeg",
    title: "Territory at Spring",
    description:
      "Location: Spring, TX Units: 318 Class A Units Status: Planning",
    link: "page-project-details.html",
  },
  {
    img: "/images/projects/territory-at-greenhouse.jfif",
    title: "Territory at Greenhouse",
    description:
      "Location: 2500 Greenhouse Rd, Houston, TX Units: 288 Class A Units Status: Developed and Sold Return",
    link: "page-project-details.html",
  },
  {
    img: "/images/projects/territory-at-greenhouse.jfif",
    title: "Territory at Williams Way",
    description:
      "Location: Williams Way & US-59, Richmond, TX Units: 294 Class A Units Status: Under Construction",
    link: "page-project-details.html",
  },
  {
    img: "/images/projects/territory-at-greenhouse.jfif",
    title: "Territory at Falvel",
    description:
      "Location: FM 2920 & Falvel Rd, Spring, TX Units: 276 Class A Units Status: Under Construction",
    link: "page-project-details.html",
  },
  {
    img: "/images/projects/territory-at-greenhouse.jfif",
    title: "Territory at Telfair (Senior Living Condos)",
    description:
      "Location: State Highway 6 & ALT 90, Sugar Land, TX Units: 160 Condos for Sale Status: Development",
    link: "page-project-details.html",
  },
  {
    img: "/images/projects/Territory-at-missory",
    title: "Territory at Missouri City",
    description:
      "Location: State Highway 6 & Vicksburg Blvd, Missouri City, TX Units: 282 Class A Units Status: Development",
    link: "page-project-details.html",
  },
  {
    img: "/images/projects/territory-at-greenhouse.jfif",
    title: "Territory at Anserra",
    description:
      "Territory at Anserra Location: Katy, TX Units: 318 Class A Units Status: Under Construction",
    link: "page-project-details.html",
  },
];
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
    <section className="project-section pb-0">
      <div className="bg bg-shape"></div>
      <div className="auto-container">
        <div className="sec-title light text-center">
          <h2 className="words-slide-up text-split">Our Projects</h2>
        </div>
      </div>
      <div className="carousel-outer">
        <Swiper {...swiperOptions} className="projects-carousel-two">
          {projects.map((project) => {
            return (
              <SwiperSlide className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="/page-project-details">
                        <Image
                          src={project.img}
                          alt={project.title}
                          width={480}
                          height={240}
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <Link
                      href="/page-project-details"
                      className="theme-btn read-more"
                    >
                      <i className="far fa-arrow-up"></i>
                    </Link>
                    <h4 className="title">{project.title}</h4>
                    <span className="cat">{project.description}</span>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
