

import Link from 'next/link';
import CounterUp from '@/components/elements/CounterUp';
import Image from 'next/image';
import { useEffect } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Features = () => {
  const percentage = 90;
  const percentage2 = 50;
  useEffect(() => {
  }, []);

  return (
    <section className="features-section-four">
      <div className="bg-outer">
        <div
          className="bg"
          style={{ backgroundImage: `url('/images/background/bg8.jpg')` }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">About Company</span>
                <h2>Greetings to Experience Visa Consulting Firm</h2>
                <div className="text"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
              </div>

              <ul className="features-list">
                <li><span className="count">01</span> Full design freedom <br /> for everyone</li>
                <li><span className="count">02</span> Make website <br /> without coding</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-md-6">
            <div className="inner-column">
              <div className="graph-box">
                <div className="row g-0 graph-box">
                  {/* Pie Graph */}
                  <div className="pie-graph text-center col-sm-6">
                    <div className="inner">
                      <div style={{ width: 110, height: 110 }}>
                        <CircularProgressbar value={90} text={`${percentage}%`} styles={buildStyles({
                          textColor: "#ffffff",
                          trailColor: '#d6d6d6',
                          pathColor: "#ffffff",
                          strokeWidth: "2",
                        })} />
                        <h6 className="title mt-20">Quality <br />Services</h6>
                      </div>
                    </div>
                  </div>
                  {/* Pie Graph */}
                  <div className="pie-graph text-center col-sm-6">
                    <div className="inner">
                      <div style={{ width: 110, height: 110 }}>
                        <CircularProgressbar value={50} text={`${percentage2}%`} styles={buildStyles({
                          textColor: "#ffffff",
                          trailColor: '#d6d6d6',
                          pathColor: "#ffffff",
                          strokeWidth: "2",
                        })} />
                        <h6 className="title mt-20">Expert <br />Employees</h6>
                      </div>
                    </div>
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

export default Features;
