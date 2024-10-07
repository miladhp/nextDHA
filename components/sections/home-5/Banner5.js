import Link from "next/link"
const Banner5 = () => {
    return (
        <>
        <section className="banner-section-three">
    <div className="bg bg-image" style={{backgroundImage: 'url(./images/background/bg7.jpg)'}}></div>
    <div className="bg-shape">
      <figure className="image1 bounce-y"><img src="images/icons/icon-parachute.webp" alt="" /></figure>
      <figure className="image2 bounce-y"><img src="images/icons/icon-polish.webp" alt="" /></figure>
      <div className="bg-shape-curve"></div>
    </div>
    <div className="auto-container">
      <div className="row justify-content-center">
        <div className="content-column col-xl-9">
          <div className="inner-column">
            <h1 className="title wow fadeInUp" data-wow-delay="300ms">Easy & Simple Visa <br/>Processing Agency</h1>
            <div className="text wow fadeInUp" data-wow-delay="600ms">Our goal is to propel your business forward using world-class cybersecurity and technology <br/>solutions. We provide the expertise, service, and guidance you need to protect your business while <br/>taking your business to the next level</div>
            <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
              <Link href="page-services" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default Banner5

