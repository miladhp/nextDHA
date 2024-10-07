import Link from "next/link"
const Offer = () => {
    return (
        <>
        <section className="offer-section">
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-lg-6 col-md-12">
          <div className="inner-column">
            <div className="sec-title light">
              <span className="sub-title">Tech management</span>
              <h2>The Best Source for IT Solutions</h2>
              <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu convenient scheduling, account fugiat nulla pariatur.</div>
            </div>
            <div className="info-box">
              <i className="icon flaticon-flight-1"></i>
              <h4 className="title">We’re doing the right thing.<br/> The right way.</h4>
            </div>
            <ul className="list-style-two">
              <li><i className="fas fa-check-double"></i> Lorem Ipsum is not simply random text</li>
              <li><i className="fas fa-check-double"></i> Making this the first true generator on the Internet</li>
              <li><i className="fas fa-check-double"></i> Various versions have evolved over the years</li>
            </ul>
          </div>
        </div>
        <div className="image-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="image-box">
              <figure className="image"><img src="images/resource/image-1.jpg" alt="" /></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default Offer

