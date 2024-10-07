import Link from "next/link"
const Services4 = () => {
    return (
        <>
        <section className="services-section-four pb-0">
    <div className="auto-container">
      <div className="sec-title text-center"> <span className="sub-title">SERVICE WE PROVIDE</span>
        <h2 className="words-slide-up text-split">Out standing immigration <br/>visa services</h2>
      </div>
      <div className="row">
        <div className="service-block-four col-lg-4 col-md-6">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service4-1.jpg" alt="Image" /></Link></figure>
              <Link href="page-service-details" className="theme-btn read-more">Learn more <i className="fa fa-arrow-up"></i></Link>
            </div>
            <div className="content-box">
              <div className="info-box"> <i className="icon flaticon-take-off"></i>
                <h4 className="title"><Link href="page-service-details">Student <br/>Visa</Link></h4>
              </div>
              <div className="inner">
                <div className="text">At vero eoset accusam etusto odio dignissimos ducimus qui</div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-block-four col-lg-4 col-md-6">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service4-2.jpg" alt="Image" /></Link></figure>
              <Link href="page-service-details" className="theme-btn read-more">Learn more <i className="fa fa-arrow-up"></i></Link>
            </div>
            <div className="content-box">
              <div className="info-box"> <i className="icon flaticon-family"></i>
                <h4 className="title"><Link href="page-service-details">Family <br/>Visa</Link></h4>
              </div>
              <div className="inner">
                <div className="text">At vero eoset accusam etusto odio dignissimos ducimus qui</div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-block-four col-lg-4 col-md-6">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service4-3.jpg" alt="Image" /></Link></figure>
              <Link href="page-service-details" className="theme-btn read-more">Learn more <i className="fa fa-arrow-up"></i></Link>
            </div>
            <div className="content-box">
              <div className="info-box"> <i className="icon flaticon-passport-13"></i>
                <h4 className="title"><Link href="page-service-details">Business <br/>Visa</Link></h4>
              </div>
              <div className="inner">
                <div className="text">At vero eoset accusam etusto odio dignissimos ducimus qui</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default Services4

