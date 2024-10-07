import Image from 'next/image';
import CounterUp from "@/components/elements/CounterUp";

const WhyChooseUs = () => {
  
  return (
    <section className="why-choose-us-two pt-0">
      <div className="icon-shape bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-xl-5 col-lg-6 order-lg-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">why us?</span>
                  <h2 className="words-slide-up text-split">We are professional Expert in Immigration</h2>
                  <div className="text">
                    There are many variations of passages of but the majority have in some form, by injected humor or words
                    which don't look even slightly believable of but the majority have suffered majority
                  </div>
                </div>
                <div className="row">
                  <div className="blocks-column col-lg-7 col-sm-8">
                    {/* Choose Block 1 */}
                    <div className="choose-block">
                      <div className="inner-box">
                        <i className="icon flaticon-visa-1"></i>
                        <div className="content">
                          <h5 className="title">Easy Payments</h5>
                          <div className="text">We strongly support best practice sharing across</div>
                        </div>
                      </div>
                    </div>
                    {/* Choose Block 2 */}
                    <div className="choose-block">
                      <div className="inner-box">
                        <i className="icon flaticon-insurance-1"></i>
                        <div className="content">
                          <h5 className="title">End to End Solutions</h5>
                          <div className="text">We strongly support best practice sharing across</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Experience Box */}
                  <div className="exp-box col-lg-5 col-sm-4">
                    <div className="inner">
                     <div className="count-box">
                <span className="count">
                    <CounterUp end={20} />
                </span>
            </div>
                      <div className="title">
                        Years Of <br /> Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-xl-7 col-lg-6 col-md-10">
              <div className="inner-column">
                <div className="image-box">
                  {/* Image 1 */}
                  <figure className="image overlay-anim reveal visible">
                    <Image
                      src="/images/resource/why-choose2-1.jpg"
                      alt="Why Choose Us"
                      width={500}
                      height={300}
                    />
                  </figure>
                  {/* Image 2 */}
                  <figure className="image-2 overlay-anim reveal visible">
                    <Image
                      src="/images/resource/why-choose2-2.jpg"
                      alt="Why Choose Us"
                      width={500}
                      height={300}
                    />
                  </figure>
                  <div className="info-box">
                    <div className="icon-box">
                      <i className="icon flaticon-take-off"></i>
                    </div>
                    <h5 className="title">We’re doing the right thing.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
