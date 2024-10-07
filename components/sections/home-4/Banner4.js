import Link from "next/link"
const Banner4 = () => {
    return (
        <>
        <section className="banner-section">
    <div className="bg bg-image" style={{backgroundImage: 'url(/images/background/bg2.jpg)'}}></div>
    <div className="bg banner1-shape1"></div>
    <div className="bg banner1-shape2"></div>
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-xl-7">
          <div className="inner-column">
            <span className="sub-title wow fadeInUp" data-wow-delay="300ms"> Solutions for all type of visas </span>
            <h1 className="title wow fadeInUp" data-wow-delay="600ms">Immigration & <br/>visa Consulting</h1>
          
          </div>
          <Link href="tel:+3655540069" className="info-btn-two wow fadeInUp" data-wow-delay="1200ms"> <i className="icon fa fa-phone"></i> <small>Make a Call</small> <strong>+36 55 540 069</strong> </Link>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default Banner4

