import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import CounterUp from "@/components/elements/CounterUp";

const facts = [
  {
    id: 1,
    title: "Years of experience",
    before: "",
    after: "+",
    icon: "flaticon-cooperation",
    start: "0",
    target: "14",
  },
  {
    id: 2,
    title: "Successful projects",
    before: "",
    after: "+",
    icon: "flaticon-accomodation",
    start: "0",
    target: "250",
  },
  {
    id: 3,
    title: "Satisfied investors",
    before: "",
    after: "+",
    icon: "flaticon-increase",
    start: "0",
    target: "2000",
  },
  {
    id: 4,
    title: "Zero Losses",
    before: "",
    after: "",
    icon: "flaticon-low-cost",
    start: "0",
    target: "0",
  },
  {
    id: 5,
    title: "Lifetime transactions",
    before: "$",
    after: "B+",
    icon: "flaticon-currency-1",
    start: "0",
    target: "1.76",
  },
  {
    id: 6,
    title: "Repaid Profit",
    before: "$",
    after: "M+",
    icon: "flaticon-escalator-1",
    start: "0",
    target: "500",
  },
];

const visaKeys = {
  length: "Length",
  investmentAmount: "Investment Amount",
  levelOfInvolvement: "Level Of Involvement",
  jobBusinessFlexibility: "Job Business Flexibility",
  family: "Family",
  sponsorships: "Sponsorships",
  education: "Education",
};
const visas = [
  {
    id: 1,
    name: "H1B",
    length: "3 yrs (can be extended)",
    investmentAmount: "---",
    levelOfInvolvement: "Employment with a sponsoring company required",
    jobBusinessFlexibility: "Can only work for the sponsoring company",
    family:
      "Spouse and children (under 21) may reside and study in the US but not work.",
    sponsorships: "Required",
    education: "International or Out-of-State Tuition",
  },
  {
    id: 2,
    name: "EB-5",
    length: "Condition Green Card - Green Card - Citizenship",
    investmentAmount: "$800,000 or $1,050,000",
    levelOfInvolvement: "Passive investment",
    jobBusinessFlexibility: "Can work anywhere",
    family:
      "Spouse and children (under 21) may reside, study, and work in the US and will also receive conditional green cards.",
    sponsorships: "Not Required",
    education: "In-State Tuition (Eligible for scholarships and grants)",
  },
  {
    id: 3,
    name: "EB2",
    length: "5 yrs (can be renewed)",
    investmentAmount: "$100,000+",
    levelOfInvolvement: "Active investment",
    jobBusinessFlexibility:
      "Can only work for the created or purchased company",
    family:
      "Spouse and children (under 21) may reside and study in the US.<br>Only the spouse can apply for work authorization.",
    sponsorships: "Not Required",
    education: "Out-of-State Tuition (Can be converted into In-State)",
  },
];

const sections = [
  {
    id: 1,
    title: "1. Flexible Employment",
    img: "/images/people/people-13.jpg",
    advantages: [],
    description:
      "  Work or initiate a business anywhere in the U.S., allowing you the freedom to change locations as desired.",
  },
  {
    id: 2,
    title: "2. Flexible Residence and Travel",
    img: "/images/people/people-14.jpg",
    advantages: [],
    description:
      "  Live anywhere in the U.S. Leave and enter the U.S. anytime. No visa required.",
  },
  {
    id: 3,
    title: "3. Better Education",
    img: "/images/people/people-15.jpg",
    advantages: [
      "Increase the odds of children’s admission to top colleges.",
      "Lower Tuition Costs.",
      " Pay significantly less for your children’s education.",
    ],
    description: "",
  },
  {
    id: 4,
    title: "4. Become a US Citizen",
    img: "/images/people/people-16.jpg",
    advantages: [
      "Optional path to become a US citizen after 5 years.",
      "Social Security Benefits.",
      "Receive retirement benefits in the form of supplemental income.",
    ],
    description: "",
  },
  {
    id: 5,
    title: "5. Stable Lifestyle",
    img: "/images/people/people-17.jpg",
    advantages: [
      "Optional path to become a US citizen after 5 years.",
      "Social Security Benefits.",
      "Receive retirement benefits in the form of supplemental income.",
    ],
    description: "",
  },
];

const stages = [
  {
    id: 1,
    title: "Application Stage",
    description:
      "Proper documentation showing the source of funds for the entire $800,000 investment and Administrative Fee is critical.",
    steps: [
      {
        id: 11,
        icon: "flaticon-documents",
        step: "Step 01",
        title: "EB-5 & PROJECT EVALUATION PROCESS",
        text: "Qualified investors are invited to activate their complimentary LCR EB-5 Service Plan. In return, LCR will provide qualified investors with unlimited “one- stopshop” concierge services ona complimentary basis.",
        delay: "", // No delay for the first step
      },
      {
        id: 12,
        icon: "flaticon-licensing",
        step: "Step 02",
        title: "DOCUMENT LAWFUL SOURCE OF FUNDS",
        text: "LCR conducts a preliminary SOF assessment to determine an ideal SOF strategy (i.e. one where the investment capital is easiest to (i) document and (ii) liquidate into cash. The prospective investor must engage an experienced U.S. immigration attorney to document the lawful source of funds and prepare their I-526 petition.",
        delay: "300ms",
      },
      {
        id: 13,
        icon: "flaticon-visa",
        step: "Step 03",
        title: "WIRE CAPITAL TO US ESCROW ACCOUNT",
        text: "Deposit $800k + Administrative Fee into the EB-5 fund escrow account.",
        delay: "600ms",
      },
      {
        id: 14,
        icon: "flaticon-visa",
        step: "Step 04",
        title: "FILE I-526 PETITION WITH USCIS",
        text: "Your U.S. immigration attorney files the I-526 petition with the USCIS.",
        delay: "600ms",
      },
    ],
  },

  {
    id: 2,
    title: "Conditional US Residency Stage ",
    description: "",
    steps: [
      {
        id: 21,
        icon: "flaticon-documents",
        step: "Step 05",
        title: "I-526 PETITION REVIEW & APPROVAL",
        text: "The filing date of the I-526 Petition is known as the Priority Date. Track investment via personal online account with 3rd party fund administrator. Monitor construction progress via quarterly project updates, 24/7 webcam, and site visits.",
        delay: "", // No delay for the first step
      },
      {
        id: 22,
        icon: "flaticon-licensing",
        step: "Step 06",
        title: "PRIORITY DATE REVIEW",
        text: "If your Priority Date is “Current”, immediately proceed to Step 7. If EB-5 visas are not available for the principal applicant’s country of birth, then you must wait until your Priority Date becomes Current.",
        delay: "300ms",
      },
      {
        id: 23,
        icon: "flaticon-visa",
        step: "Step 07",
        title: "ADJUST IMMIGRATION STATUS",
        text: "If you live in the United States File an Adjustment of Status (AOS) Application (File I-485). If you Live Overseas Attend EB-5 visa interview at the local U.S. consulate (File DS-260)",
        delay: "600ms",
      },
      {
        id: 24,
        icon: "flaticon-visa",
        step: "Step 08",
        title: "FILE I-526 PETITION WITH USCIS",
        text: "Principal applicant and immediate family members (if any) will receive 2 year green cards upon entering the U.S",
        delay: "600ms",
      },
    ],
  },

  {
    id: 3,
    title: "Permanent US Residency Stage ",
    description: "",
    steps: [
      {
        id: 31,
        icon: "flaticon-documents",
        step: "Step 09",
        title: "CONDITIONAL US RESIDENCY PERIOD",
        text: "21-24 MONTHS The investor must visit the United States within 180 days of approval and must visit the U.S. at least once every six months. Many investors apply for a Reentry Permit, thus eliminating the need to travel to the U.S. as frequently.",
        delay: "", // No delay for the first step
      },
      {
        id: 32,
        icon: "flaticon-licensing",
        step: "Step 10",
        title: "I-829 PETITION REVIEW & APPROVVAL",
        text: "File I-829 petition to remove conditions on your U.S. green card.",
        delay: "300ms",
      },
      {
        id: 33,
        icon: "flaticon-visa",
        step: "Step 11",
        title: "RECEIVE PERMANENT GREEN CARD(S)",
        text: "Receive your permanent green card.",
        delay: "600ms",
      },
      {
        id: 34,
        icon: "flaticon-visa",
        step: "Step 12",
        title: "APPLY FOR US CITIZENSHIP (OPT)",
        text: "If desired, the investor can apply for U.S. citizenship 5 years after conditional green card.",
        delay: "600ms",
      },
    ],
  },
];

export default function EB5() {
  // State to hold client-side only styles (after component mounts)
  const [clientRendered, setClientRendered] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (activeAccordion.key === key) {
      setActiveAccordion({
        status: false,
        key: 1,
      });
    } else {
      setActiveAccordion({
        status: true,
        key,
      });
    }
  };
  // Run only on the client (after first render)
  useEffect(() => {
    setClientRendered(true);
  }, []);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="EB-5 Program" />
        <section className="about-section">
          <div className="icon-plane-2 bounce-y"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div
                  className="content-column col-lg-6 order-lg-2 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="inner-column">
                    <div className="sec-title">
                      {" "}
                      <span className="sub-title">Question</span>
                      <h2 className="words-slide-up text-split">
                        What is Immigrant Investor Program?
                      </h2>
                      <div className="text">
                        The Immigrant Investor Program (EB-5) is administered by
                        USCIS. Under this program, investors (and their spouses
                        and unmarried children under 21) are eligible to apply
                        for lawful permanent residence (become a Green Card
                        holder) if they make the necessary investment in a
                        commercial enterprise in the United States ($800,000 for
                        investments in Targeted Employment Areas (TEAs) or
                        $1,050,000 for investments outside of TEA) and plan to
                        create or preserve 10 direct or indirect permanent
                        full-time jobs for qualified U.S. workers.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-6 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="image-box">
                      <figure className="image overlay-anim">
                        <Image
                          src="/images/people/people-11.jpg"
                          alt="Image"
                          width={992}
                          height={992}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="offer-section" id="story">
          <div
            class="bg bg-image"
            style={{ backgroundImage: "url('/images/icons/gallery-1.jpg')" }}
          ></div>
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12">
                <div className="inner-column">
                  <div className="sec-title light">
                    <span className="sub-title">
                      Real Estate Development and Investment
                    </span>
                    <h2>Our Story AND Success</h2>
                    <div className="text">
                      DHANANI EB-5 International is a Texas-based Regional
                      Center with over 14 years of profitable and zero losses
                      experience in real estate developing and investing. We are
                      registered in Texas, Tennessee, Georgia, Arkansas, and
                      Florida. Join us as we continue to create a foundation and
                      future for our global investors.
                    </div>
                  </div>

                  <ul className="list-style-two ">
                    <li className="d-flex flex-column text-start justify-content-start">
                      <h3 className="text-light">Mission Statement</h3>
                      <p className="text-white">
                        At DHANANI EB-5 International, we empower global
                        investors to secure US Permanent Residency through
                        carefully curated, strategic, and profitable EB-5
                        projects. We are committed to building a secure and
                        prosperous future for our partners - one investment at a
                        time.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image">
                      <img src="images/projects/building.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="auto-container mt-80">
            <div className="fact-counter">
              <div className="row">
                {facts.map((fact) => {
                  return (
                    <div
                      key={fact.id}
                      className="counter-block-two col-lg-4 col-sm-6 wow fadeInUp"
                    >
                      <div className="inner-box bg-white">
                        <div className="content-box">
                          <i className={`icon ${fact.icon}`}> </i>

                          <div className="count-box">
                            <span className="count-text d-flex justify-content-center">
                              <span>{fact.before}</span>
                              <CounterUp end={fact.target} />
                              <span>{fact.after}</span>
                            </span>
                          </div>
                          <div className="counter-title">{fact.title}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-4" id="benefits">
          {sections.map((section) => {
            return (
              <div
                key={section.id}
                className={`container d-flex justify-content-between gap-5 py-md-5 my-5 flex-column ${
                  section.id % 2 === 0 ? "flex-md-row" : "flex-md-row-reverse"
                }`}
              >
                <Image src={section.img} width={512} height={512} />
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>{section.title}</h2>
                    <div className="text">{section.description}</div>
                    {section.advantages && section.advantages.length > 0 && (
                      <ul className="list">
                        {section.advantages.map((advantage) => (
                          <li className="list-item" key={advantage}>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {stages && stages.length > 0 && (
          <section className="process-section pt-5 text-center">
            <h4 className="py-4" id="process">
              Process To Obtain A Green Card (And Citizenship) Through The EB-5
              Program
            </h4>
            {stages.map((stage) => {
              return (
                <div key={stage.id} className="auto-container">
                  <div className="sec-title text-center">
                    <span className="sub-title">{`Stage ${stage.id}`}</span>
                    <h2 className="scrub-each-word text-split">
                      {stage.title}
                    </h2>
                    <p className="text">{stage.description}</p>
                  </div>

                  <div className="outer-box">
                    <div className="icon-line"></div>
                    <div className="row">
                      {stage.steps.map((step) => (
                        <div
                          key={step.id}
                          className={`process-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp`}
                          // Apply the animation delay only on the client after hydration
                          style={
                            clientRendered ? { animationDelay: step.delay } : {}
                          }
                        >
                          <div className="inner-box me-4">
                            <i className={`icon ${step.icon}`}></i>
                            <div className="content p-3">
                              <span className="step">{step.step}</span>
                              <h5 className="title">{step.title}</h5>
                              <div className="text-xs small">{step.text}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        <section className="container py-4 text-center" id="comparison">
          <div className="row">
            <div className="col-12 mt-30">
              <h3>How Does EB-5 Compare To Other Visa Programs?</h3>
              <table className="table table-striped table-bordered tbl-shopping-cart">
                <thead>
                  <tr>
                    <th>diffrence </th>
                    <th>
                      H1B - Visa
                      <p>
                        a non-immigrant visa category that allows employers to
                        temporarily hire foreign workers in specialty
                        occupations.
                      </p>
                    </th>
                    <th>
                      EB-5 - Visa
                      <p>
                        program allows foreign investors and their families to
                        apply for permanent residency in the U.S.
                      </p>{" "}
                    </th>
                    <th>
                      EB2 - Visa
                      <p>
                        a non-immigrant visa that allows people from certain
                        countries to live and work in the U.S.
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(visaKeys).map(([key, val]) => {
                    return (
                      <tr key={key}>
                        <td>{val}</td>
                        {visas.map((visa) => {
                          return <td>{visa[key] || ""}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="faq-section-two py-4" id="q&a">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div
                  className="faq-column col-12 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="inner-column">
                    <ul className="accordion-box style-two">
                      <li
                        className={`accordion block ${
                          activeAccordion.key === 1 ? "active-tab" : ""
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            activeAccordion.key === 1 ? "active" : ""
                          }`}
                          onClick={() => handleClick(1)}
                        >
                          What Is Visa Immigration Services?{" "}
                          <i className="arrow fal fa-angle-down"></i>
                        </div>
                        <div
                          className={`acc-content ${
                            activeAccordion.key === 1 ? "current" : ""
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              Sed perspiciatis unde omnis iste natus voluptatem
                              accusantium doloremque laudantium, totam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis et quasi architecto beatae vitae dicta
                              sunt explicabo.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`accordion block ${
                          activeAccordion.key === 2 ? "" : ""
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            activeAccordion.key === 2 ? "active" : ""
                          }`}
                          onClick={() => handleClick(2)}
                        >
                          Have Any Visa Consultant?{" "}
                          <i className="arrow fal fa-angle-down"></i>
                        </div>
                        <div
                          className={`acc-content ${
                            activeAccordion.key === 2 ? "current" : ""
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              Sed perspiciatis unde omnis iste natus voluptatem
                              accusantium doloremque laudantium, totam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis et quasi architecto beatae vitae dicta
                              sunt explicabo.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`accordion block ${
                          activeAccordion.key === 3 ? "" : ""
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            activeAccordion.key === 3 ? "active" : ""
                          }`}
                          onClick={() => handleClick(3)}
                        >
                          Which Country Is Good for Residents?{" "}
                          <i className="arrow fal fa-angle-down"></i>
                        </div>
                        <div
                          className={`acc-content ${
                            activeAccordion.key === 3 ? "current" : ""
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              Sed perspiciatis unde omnis iste natus voluptatem
                              accusantium doloremque laudantium, totam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis et quasi architecto beatae vitae dicta
                              sunt explicabo.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`accordion block ${
                          activeAccordion.key === 4 ? "" : ""
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            activeAccordion.key === 4 ? "active" : ""
                          }`}
                          onClick={() => handleClick(4)}
                        >
                          How Much Does Visa Immigration Cost?{" "}
                          <i className="arrow fal fa-angle-down"></i>
                        </div>
                        <div
                          className={`acc-content ${
                            activeAccordion.key === 4 ? "current" : ""
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              Sed perspiciatis unde omnis iste natus voluptatem
                              accusantium doloremque laudantium, totam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis et quasi architecto beatae vitae dicta
                              sunt explicabo.
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
