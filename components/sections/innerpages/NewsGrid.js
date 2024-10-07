import Link from 'next/link';

const BlogSection = () => {
  return (
    <section className="news-section">
    <div className="auto-container">
      <div className="row">
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details">
                  <img src="images/resource/news1-1.jpg" alt="Image" />
                  <img src="images/resource/news1-1.jpg" alt="Image" />
                </Link>
              </figure>
              <span className="date"><strong>25</strong> <span>Jun 2024</span></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Citizenship Concept on How to Become a UK Resident</Link></h4>
              <Link href="news-details" className="theme-btn read-more">Full Article <i className="icon fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details">
                  <img src="images/resource/news1-2.jpg" alt="Image" />
                  <img src="images/resource/news1-2.jpg" alt="Image" />
                </Link>
              </figure>
              <span className="date"><strong>25</strong> <span>Jun 2024</span></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">How consultation is affecting ventures in 2024</Link></h4>
              <Link href="news-details" className="theme-btn read-more">Full Article <i className="icon fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details">
                  <img src="images/resource/news1-3.jpg" alt="Image" />
                  <img src="images/resource/news1-3.jpg" alt="Image" />
                </Link>
              </figure>
              <span className="date"><strong>25</strong> <span>Jun 2024</span></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Project Concepts or Related Queries Should be</Link></h4>
              <Link href="news-details" className="theme-btn read-more">Full Article <i className="icon fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details">
                  <img src="images/resource/news1-2.jpg" alt="Image" />
                  <img src="images/resource/news1-2.jpg" alt="Image" />
                </Link>
              </figure>
              <span className="date"><strong>25</strong> <span>Jun 2024</span></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">How consultation is affecting ventures in 2024</Link></h4>
              <Link href="news-details" className="theme-btn read-more">Full Article <i className="icon fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details">
                  <img src="images/resource/news1-3.jpg" alt="Image" />
                  <img src="images/resource/news1-3.jpg" alt="Image" />
                </Link>
              </figure>
              <span className="date"><strong>25</strong> <span>Jun 2024</span></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Project Concepts or Related Queries Should be</Link></h4>
              <Link href="news-details" className="theme-btn read-more">Full Article <i className="icon fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details">
                  <img src="images/resource/news1-1.jpg" alt="Image" />
                  <img src="images/resource/news1-1.jpg" alt="Image" />
                </Link>
              </figure>
              <span className="date"><strong>25</strong> <span>Jun 2024</span></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Citizenship Concept on How to Become a UK Resident</Link></h4>
              <Link href="news-details" className="theme-btn read-more">Full Article <i className="icon fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BlogSection;
