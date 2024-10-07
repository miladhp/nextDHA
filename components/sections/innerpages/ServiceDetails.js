import Link from 'next/link';
import { useState } from 'react';

const ServiceDetails = () => {
  const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
  });

  const handleClick = (key) => {
      setIsActive((prevState) => ({
          status: prevState.key !== key,
          key: key,
      }));
  };

  return (
    <section className="services-details">
		<div className="container">
			<div className="row">
				<div className="col-xl-4 col-lg-4">
					<div className="service-sidebar">
						<div className="sidebar-widget service-sidebar-single">
							<div className="service-sidebar wow fadeInUp"
								data-wow-delay="0.1s" data-wow-duration="1200m">
								<div className="service-list">
								<ul>
								<li><Link href="page-service-details" className="current"><i className="fas fa-angle-right"></i><span>Student Visa</span></Link></li>
								<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Family Visa</span></Link></li>
								<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Tourist Visa</span></Link></li>
								<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Business Visa</span></Link></li>
								<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Worker Visa</span></Link></li>
								<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Diplomatic Visa</span></Link></li>
								</ul>
								</div>
							</div>
						</div>
						<div className="sidebar-widget banner-widget">

							
						  <div className="widget-content" style={{backgroundImage: 'url(images/resource/contact.jpg)'}}>
							<div className="shape" style={{backgroundImage: 'url(images/resource/overlay-shape.png)'}}></div>
							<div className="content-box">
							  <div className="icon-box">
								<i className="lnr lnr-icon-pie-chart"></i>
							  </div>
							  <h3>Be healthy & eat only fresh</h3>
							  <Link href="page-contact" className="theme-btn btn-style-one light"><span className="btn-title"> Contact us</span></Link>
							</div>
						  </div>
						</div>
						<div className="sidebar-widget service-sidebar-single mt-5">
							<div className="service-sidebar-single-btn wow fadeInUp"
								data-wow-delay="0.5s" data-wow-duration="1200m">
								<Link href="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-8 col-lg-8">
					<div className="services-details__content">
						<img src="images/resource/service-details.jpg" alt="" />
						<h2 className="mt-4">Visa Overview</h2>
						<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
						<div className="content mt-40">
							<div className="text">
								<h3>Visa Center</h3>
								<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							</div>
							<div className="feature-list">
								<div className="row clearfix">
									<div className="col-lg-6 col-md-6 col-sm-12 column">
										<div className="single-item">
											<div className="icon-box"><i className="fas fa-check-circle"></i></div>
											<h6 className="title">Entering & Leaving From Country</h6>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 column">
										<div className="single-item">
											<div className="icon-box"><i className="fas fa-check-circle"></i></div>
											<h6 className="title">Country Citizenship</h6>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 column">
										<div className="single-item">
											<div className="icon-box"><i className="fas fa-check-circle"></i></div>
											<h6 className="title">Settling In Country</h6>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 column">
										<div className="single-item">
											<div className="icon-box"><i className="fas fa-check-circle"></i></div>
											<h6 className="title">Quick & Easy Process</h6>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 column">
										<div className="single-item">
											<div className="icon-box"><i className="fas fa-check-circle"></i></div>
											<h6 className="title">Documents & Payments</h6>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 column">
										<div className="single-item">
											<div className="icon-box"><i className="fas fa-check-circle"></i></div>
											<h6 className="title">Receive Your Visa</h6>
										</div>
									</div>
								</div>
							</div>
						</div>

              <div className="innerpage mt-25">
                <h3>Frequently Asked Question</h3>
                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <ul className="accordion-box wow fadeInRight">
                  {/* Block */}
                  <li className="accordion block">
                    <div className={isActive.key === 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                      Is my technology allowed on tech?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key === 1 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                      </div>
                    </div>
                  </li>
                  {/* Additional Blocks */}
                  <li className="accordion block">
                    <div className={isActive.key === 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                      How to soft launch your business?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key === 2 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className={isActive.key === 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                      How to turn visitors into contributors?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key === 3 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className={isActive.key === 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                      How can I find my solutions?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key === 4 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Services Details Content */}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
