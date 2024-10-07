import Image from 'next/image';
import Link from 'next/link';

const Call = () => {
  return (
    <section className="call-to-action style-three pt-0">
      <div className="auto-container">
        <div className="outer-box">
          {/* Background Image */}
          <div
            className="bg bg-image"
            style={{
              backgroundImage: `url('/images/icons/counter-bg1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          {/* Content Column */}
          <div className="content-column fadeInLeft">
            <div className="inner-column">
              <div className="sec-title text-center">
                <h2 className="scrub-each-word text-split">
                  Skilled Visa’s In Global Immigration <br /> Few reasons to choose our visa
                </h2>
              </div>

              {/* Button Box */}
              <div className="btn-box wow fadeInUp">
                <Link href="/page-services" className="theme-btn btn-style-one hover-dark mb-2 mb-sm-0">
                  <span className="btn-title">Read More</span>
                </Link>
                <Link href="/page-services" className="theme-btn btn-style-one hover-dark ms-0 ms-sm-3">
                  <span className="btn-title">Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
