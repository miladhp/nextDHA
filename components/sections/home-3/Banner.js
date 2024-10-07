import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="banner-section-two">
      <div className="bg-image" style={{ backgroundImage: 'url(/images/background/bg4.jpg)' }} ></div>
      <div className="bg-shape">
        <figure className="image"><img src="images/icons/icon-dots-3.webp" alt=""/></figure>
        <figure className="image2"><img src="images/icons/icon-dots-4.png" alt=""/></figure>
        <figure className="image3 bounce-y"><img src="images/icons/icon-polish.webp" alt=""/></figure>
        <figure className="image4 bounce-y"><img src="images/icons/icon-parachute.webp" alt=""/></figure>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-md-7">
            <div className="inner-column">
              <span className="sub-title wow fadeInUp" data-wow-delay="300ms">
                Your Most Trusted Partners
              </span>
              <h1 className="title wow fadeInUp" data-wow-delay="600ms">
                Easy & Simple Visa Processing Agency
              </h1>
              <div className="text wow fadeInUp" data-wow-delay="800ms">
                Lorem Ipsum is simply dummy text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum
              </div>
              <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                <Link href="/page-services" className="theme-btn btn-style-one hover-light">
                  <span className="btn-title">Discover More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
