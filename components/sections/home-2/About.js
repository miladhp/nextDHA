import Link from 'next/link';

const About = () => {
    return (
        <section className="about-section-two">
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">Who we are</span>
              <h2>Best Immigration & Visa Consultation.</h2>
              <div className="text">There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered majority have in some</div>
            </div>

            <div className="content-box">
              <div className="info-box">
                <h5 className="title">Ready to fly with us your dream country</h5>
                <Link href="#" className="read-more">More <i className="fa fa-long-arrow-alt-right"></i></Link>
              </div>

              <div className="about-block-two">
                <i className="icon flaticon-take-off"></i>
                <h5 className="title"> Visa Consultation </h5>
                <div className="text">There are many variations of passages of but the majority have in some form</div>
              </div>

              <div className="about-block-two">
                <i className="icon flaticon-global-1"></i>
                <h5 className="title">Professional Services</h5>
                <div className="text">There are many variations of passages of but the majority have in some form</div>
              </div>

            </div>

            <div className="btm-box">
              <Link href="page-about" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Discover more</span></Link>
            </div>
          </div>
        </div>
        <div className="image-column col-xl-6 col-lg-5 col-md-8 col-sm-12">
          <div className="inner-column wow fadeInLeft">
            <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about2-1.jpg" alt="" /></figure>
            <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about2-2.jpg" alt="" /></figure>
            <div className="experience bounce-y">
              <img src="images/resource/about2-3.jpg" alt="" className="icon" />
              <strong>32600+</strong> Clients Satisfied
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default About;
