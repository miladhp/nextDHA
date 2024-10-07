import Link from "next/link"
const Features = () => {
    return (
        <>
        <section className="features-section-two">
    <div className="bg-shape"></div>
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">Training & Certification</span>
        <h2 className="scrub-each-word text-split">We Provide Special Care To Make <br/>Easy Your Dream</h2>
      </div>
      <div className="row">
        <div className="feature-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="images/resource/feature1-1.jpg" alt="Image" /></figure>
              <i className="icon flaticon-passport-11"></i>
            </div>
            <div className="content">
              <h5 className="title">IELTS Courses</h5>
              <div className="text">Sed perspice undm nise este natuse volutate</div>
              <Link href="page-course-details" className="read-more"><span>Read More</span> <i className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="feature-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="images/resource/feature1-2.jpg" alt="Image" /></figure>
              <i className="icon flaticon-plane"></i>
            </div>
            <div className="content">
              <h5 className="title">OET Coaching</h5>
              <div className="text">Sed perspice undm nise este natuse volutate</div>
              <Link href="page-course-details" className="read-more"><span>Read More</span> <i className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="feature-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="images/resource/feature1-3.jpg" alt="Image" /></figure>
              <i className="icon flaticon-scale"></i>
            </div>
            <div className="content">
              <h5 className="title">TOFEL Coaching</h5>
              <div className="text">Sed perspice undm nise este natuse volutate</div>
              <Link href="page-course-details" className="read-more"><span>Read More</span> <i className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="feature-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="images/resource/feature1-4.jpg" alt="Image" /></figure>
              <i className="icon flaticon-flight-1"></i>
            </div>
            <div className="content">
              <h5 className="title">Citizenship Test</h5>
              <div className="text">Sed perspice undm nise este natuse volutate</div>
              <Link href="page-course-details" className="read-more"><span>Read More</span> <i className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default Features