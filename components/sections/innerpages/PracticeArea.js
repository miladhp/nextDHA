import Link from 'next/link';

const ServiceGrid = () => {
  return (
    <>
    	<section className="">
		<div className="container">
			<div className="row">
				<div className="service-block col-lg-4 col-sm-6">
          <div className="inner-box">
            <figure className="image">
              <img src="images/resource/service1-1.jpg" alt="Image" />
              <img src="images/resource/service1-1.jpg" alt="Image" />
            </figure>
            <div className="icon-box">
              <div className="title-box">
                <span className="count">01</span>
                <h4 className="title"><Link href="page-service-details">Student Visa</Link></h4>
              </div>
              <i className="icon flaticon-document"></i>
            </div>
            <div className="content">
              <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
              <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
            </div>
          </div>
				</div>
				<div className="service-block col-lg-4 col-sm-6">
          <div className="inner-box">
            <figure className="image">
              <img src="images/resource/service1-2.jpg" alt="Image" />
              <img src="images/resource/service1-2.jpg" alt="Image" />
            </figure>
            <div className="icon-box">
              <div className="title-box">
                <span className="count">02</span>
                <h4 className="title"><Link href="page-service-details">Tourist Visa</Link></h4>
              </div>
              <i className="icon flaticon-family"></i>
            </div>
            <div className="content">
              <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
              <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
            </div>
          </div>
				</div>

				<div className="service-block col-lg-4 col-sm-6">
          <div className="inner-box">
            <figure className="image">
              <img src="images/resource/service1-3.jpg" alt="Image" />
              <img src="images/resource/service1-3.jpg" alt="Image" />
            </figure>
            <div className="icon-box">
              <div className="title-box">
                <span className="count">03</span>
                <h4 className="title"><Link href="page-service-details">Worker Visa</Link></h4>
              </div>
              <i className="icon flaticon-visa-4"></i>
            </div>
            <div className="content">
              <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
              <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
            </div>
          </div>
				</div>
        <div className="service-block col-lg-4 col-sm-6">
          <div className="inner-box">
            <figure className="image">
              <img src="images/resource/service1-4.jpg" alt="Image" />
              <img src="images/resource/service1-4.jpg" alt="Image" />
            </figure>
            <div className="icon-box">
              <div className="title-box">
                <span className="count">01</span>
                <h4 className="title"><Link href="page-service-details">Student Visa</Link></h4>
              </div>
              <i className="icon flaticon-flight-1"></i>
            </div>
            <div className="content">
              <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
              <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="service-block col-lg-4 col-sm-6">
          <div className="inner-box">
            <figure className="image">
              <img src="images/resource/service1-1.jpg" alt="Image" />
              <img src="images/resource/service1-1.jpg" alt="Image" />
            </figure>
            <div className="icon-box">
              <div className="title-box">
                <span className="count">02</span>
                <h4 className="title"><Link href="page-service-details">Tourist Visa</Link></h4>
              </div>
              <i className="icon flaticon-document"></i>
            </div>
            <div className="content">
              <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
              <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="service-block col-lg-4 col-sm-6">
          <div className="inner-box">
            <figure className="image">
              <img src="images/resource/service1-2.jpg" alt="Image" />
              <img src="images/resource/service1-2.jpg" alt="Image" />
            </figure>
            <div className="icon-box">
              <div className="title-box">
                <span className="count">03</span>
                <h4 className="title"><Link href="page-service-details">Worker Visa</Link></h4>
              </div>
              <i className="icon flaticon-family"></i>
            </div>
            <div className="content">
              <div className="text">We denounce righteous indigna dislike beguiled demoralized charms</div>
              <Link href="page-service-details" className="read-more">Read More <i className="fa fa-angle-right"></i></Link>
            </div>
          </div>
        </div>
			</div>
		</div>
	</section>
    </>
  );
};
export default ServiceGrid
