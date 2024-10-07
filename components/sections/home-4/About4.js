import Link from "next/link"
const About4 = () => {
    return (
        <>
       <section className="about-section-four">
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-xl-6 col-lg-7 col-md-10 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">About Company</span>
              <h2>Greetings to Experience Visa Consulting Firm.</h2>
              <div className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
            <div className="row">
              <div className="about-block-four col-md-6">
                <div className="icon"><i className="flaticon-insurance"></i></div>                
                <h5 className="title">Direct Online <br/>Interviews</h5>
              </div>

              <div className="about-block-four col-md-6">
                <div className="icon"><i className="flaticon-customs-agent"></i></div> 
                <h5 className="title">Quick & Easy <br/>Process</h5>
              </div>
            </div>
            <div className="content-box">
              <ul className="list-style-one">
                <li><i className="icon fas fa-check-circle"></i> Visa Consulting</li>
                <li><i className="icon fas fa-check-circle"></i> Immigration Consultancy</li>
              </ul>
              <div className="info-box"> At vero eoset accusam etusto odio dignissimos ducimus qui </div>
            </div>

            <div className="btm-box">
              <Link href="page-about" className="theme-btn btn-style-one hover-dark"><span className="btn-title">Read more</span></Link>
            </div>
          </div>
        </div>
        <div className="image-column col-xl-6 col-lg-5 col-md-10 col-sm-12">
          <div className="inner-column wow fadeInLeft">
            <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about4-1.jpg" alt="" /></figure>
            <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about4-2.jpg" alt="" /></figure>
            <div className="info-icon bounce-y">
              <i className="icon flaticon-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default About4

