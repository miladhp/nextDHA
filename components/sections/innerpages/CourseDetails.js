import Link from "next/link"
import React, { useState } from 'react';
const Courses = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

    return (
        <>
       <section className="course-details">
		<div className="container">
			<div className="row flex-xl-row-reverse">
				<div className="col-xl-8 col-lg-8">
					<div className="courses-details__content">
						<img src="images/resource/course-details.jpg" alt="" />
						<h2 className="mt-4">Course Overview</h2>
						<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.</p>
						<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
						<div className="content mt-40">
							<div className="text">
								<h3>What You Will Learn?</h3>
								<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							</div>
							<div className="row mt-30">
			          <div className="feature-block col-sm-6 wow fadeInUp">
			            <div className="inner-box">
			              <div className="icon-box"><i className="icon flaticon-insurance"></i></div>
			              <div className="content">
			                <h4 className="title"><Link href="page-about">Apply for New Visa Online</Link></h4>
			                <div className="text">We strongly support best practice sharing across</div>
			              </div>
			            </div>
			          </div>
			          <div className="feature-block col-sm-6 wow fadeInUp" data-wow-delay="300ms" >
			            <div className="inner-box">
			              <div className="icon-box"><i className="icon flaticon-visa"></i></div>
			              <div className="content">
			                <h4 className="title"><Link href="page-about">Quick & Easy Visa Application</Link></h4>
			                <div className="text">We strongly support best practice sharing across</div>
			              </div>
			            </div>
			          </div>
							</div>
						</div>
						<div className="innerpage mt-25">
							<h3>Frequently Asked Question</h3>
							<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							<ul className="accordion-box wow fadeInRight">
              <li className={`accordion block ${activeAccordion === 1 ? 'active-block' : ''}`}>
              <div className={`acc-btn pl-25 ${activeAccordion === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                Is my technology allowed on tech?
										<div className="icon fa fa-plus"></div>
									</div>
									<div className={`acc-content ${activeAccordion === 1 ? 'current' : ''}`}>
										<div className="content">
											<div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
										</div>
									</div>
								</li>
								<li className={`accordion block ${activeAccordion === 2 ? 'active-block' : ''}`}>
                <div className={`acc-btn pl-25 ${activeAccordion === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                  How to soft launch your business?
										<div className="icon fa fa-plus"></div>
									</div>
									<div className={`acc-content ${activeAccordion === 2 ? 'current' : ''}`}>
										<div className="content">
											<div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
										</div>
									</div>
								</li>
								<li className={`accordion block ${activeAccordion === 3 ? 'active-block' : ''}`}>
                <div className={`acc-btn pl-25 ${activeAccordion === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                  How to turn visitors into contributors
										<div className="icon fa fa-plus"></div>
									</div>
									<div className={`acc-content ${activeAccordion === 3 ? 'current' : ''}`}>
										<div className="content">
											<div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4">
					<div className="course-sidebar">
						<ul className="course-details-info">
							<li className="course-details-info-link">
								<span className="course-details-info-icon"><i className="far fa-clock"></i></span>
								Durations: <span>10 hours</span>
							</li>
							<li className="course-details-info-link">
								<span className="course-details-info-icon"><i className="far fa-folder-open"></i></span>
								Lectures: <span>15</span>
							</li>
							<li className="course-details-info-link">
								<span className="course-details-info-icon"><i className="far fa-circle-user"></i></span>
								Students: <span>Max 50</span>
							</li>
							<li className="course-details-info-link">
								<span className="course-details-info-icon"><i className="far fa-flag"></i></span>
								Skill Level: <span>Advanced</span>
							</li>
							<li className="course-details-info-link">
								<span className="course-details-info-icon"><i className="far fa-bell"></i></span>
								Language: <span>English</span>
							</li>
						</ul>

						<div className="course-details-price">
							<p className="course-details-price-text">Course price</p>
							<p className="course-details-price-amount">$18.00</p>
							<Link href="page-course" className="theme-btn btn-style-one course-details-price-btn"><span className="btn-title">Buy This Course</span></Link>
						</div>

						<div className="latest-course mb-30">
							<h4 className="latest-course-title mb-30">New Courses</h4>
							<div className="latest-course-item">
								<div className="latest-course-img">
									<img src="images/resource/course-1.jpg" alt="" />
								</div>
								<div className="latest-course-content">
									<a className="latest-course-author" href="#">by <span>Advanced</span></a>
									<h5><Link href="page-course-details">TOEFL Coaching</Link></h5>
									<div className="latest-course-stars">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<span>4.8</span>
									</div>
								</div>
							</div>
							<div className="latest-course-item">
								<div className="latest-course-img">
									<img src="images/resource/course-2.jpg" alt="" />
								</div>
								<div className="latest-course-content">
									<a className="latest-course-author" href="#">by <span>Advanced</span></a>
									<h5><Link href="page-course-details">Citizenship Test</Link></h5>
									<div className="latest-course-stars">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<span>5.0</span>
									</div>
								</div>
							</div>
							<div className="latest-course-item">
								<div className="latest-course-img">
									<img src="images/resource/course-3.jpg" alt="" />
								</div>
								<div className="latest-course-content">
									<a className="latest-course-author" href="#">by <span>Advanced</span></a>
									<h5><Link href="page-course-details">PTE Coaching</Link></h5>
									<div className="latest-course-stars">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<span>4.9</span>
									</div>
								</div>
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
export default Courses