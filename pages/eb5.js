import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import CounterUp from "@/components/elements/CounterUp";
import { FACTS } from "@/constants/global";
import StepCard from "@/components/elements/StepCard";
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
    title: "Flexible Employment",
    img: "/images/people/people-21.jpg",
    theme: "dark",
    advantages: [],
    description:
      "  Work or initiate a business anywhere in the U.S., allowing you the freedom to change locations as desired.",
  },
  {
    id: 2,
    title: "Flexible Residence",
    img: "/images/people/people-19.jpg",
    theme: "light",
    advantages: [],
    description:
      "  Live anywhere in the U.S. Leave and enter the U.S. anytime. No visa required.",
  },
  {
    id: 3,
    title: "Better Education",
    img: "/images/background/bg-13.jpg",
    theme: "light",
    advantages: [
      "Increase the odds of children’s admission to top colleges.",
      "Lower Tuition Costs.",
      " Pay significantly less for your children’s education.",
    ],
    description: "",
  },
  {
    id: 4,
    title: "Become a US Citizen",
    img: "/images/people/people-16.jpg",
    theme: "dark",
    advantages: [
      "Optional path to become a US citizen after 5 years.",
      "Social Security Benefits.",
      "Receive retirement benefits in the form of supplemental income.",
    ],
    description: "",
  },
  {
    id: 5,
    title: "Stable Lifestyle",
    img: "/images/background/bg-11.png",
    theme: "dark",
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
        html: `<p class="small lh-base text-start">Qualified investors are invited to activate their complimentary <strong class="fw-bold text-success">LCR EB-5 Service Plan.</strong> In return, LCR will provide qualified investors with unlimited “one-stop-shop” concierge services on a complimentary basis, for <strong class="fw-bold text-success">up to 60 days, including:</strong><br /><br /><small>&#8226; Unlimited support on your EB-5 program and project-related questions</small><br /><br /><small>&#8226; Preliminary SOF assessment and creation of custom I-526 application plan</small><br /><br /><small>&#8226; Referrals to top immigration law firms and local banking partners (if required)</small></p>`,
        title: "EB-5 & PROJECT EVALUATION PROCESS",
        text: "Qualified investors are invited to activate their complimentary LCR EB-5 Service Plan. In return, LCR will provide qualified investors with unlimited “one- stopshop” concierge services ona complimentary basis.",
        delay: "", // No delay for the first step
      },
      {
        id: 12,
        icon: "flaticon-licensing",
        step: "Step 02",
        html: `<p class="small lh-base text-start">LCR conducts a preliminary SOF assessment to determine an ideal SOF strategy (i.e. one where the investment capital is easiest to (i) document and (ii) liquidate into cash)<br /> The prospective investor <strong class="fw-bold text-success">must engage an experienced U.S. immigration attorney</strong> To document the lawful source of funds and prepare their I-526 petition.<br /><br /><small>&#8226; Legally Obtain Funds</small><br /><br /><small>&#8226; Consult an Immigration Attorney</small><br /><br /><small>&#8226; Document Source of Funds</small></p>`,

        title: "DOCUMENT LAWFUL SOURCE OF FUNDS",
        text: "LCR conducts a preliminary SOF assessment to determine an ideal SOF strategy (i.e. one where the investment capital is easiest to (i) document and (ii) liquidate into cash. The prospective investor must engage an experienced U.S. immigration attorney to document the lawful source of funds and prepare their I-526 petition.",
        delay: "300ms",
      },
      {
        id: 13,
        icon: "flaticon-visa",
        step: "Step 03",
        html: `<p class="small lh-base text-start">Deposit $800k + Administrative Fee into the EB-5 fund escrow account.</p>`,
        title: "WIRE CAPITAL TO US ESCROW ACCOUNT",
        text: "Deposit $800k + Administrative Fee into the EB-5 fund escrow account.",
        delay: "600ms",
      },
      {
        id: 14,
        icon: "flaticon-visa",
        step: "Step 04",
        html: `<p class="small lh-base text-start">Your U.S. immigration attorney files the I-526 petition with the USCIS.<br /><br /><small>&#8226; immigration Attorney</small><br /><br /><small>&#8226; Form I-526</small><br /><br /><small>&#8226; US Citizenship & Immigration Services</small></p>`,
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
        html: `<p class="small lh-base text-start"> <strong class="fw-bold text-success">18 – 24 MONTHS</strong><br />The filing date of the I-526 Petition is known as the Priority Date.<br /><br />Track investment via personal online account with 3rd party fund administrator.<br /><br />Monitor construction progress via quarterly project updates, 24/7 webcam, and site visits.<br /><br /><strong class="text-success fw-bold"> RECEIVE I-526 APPROVAL!</strong><br /><br />Due to Covid-19 and USCIS processing, actual I-526 approval times are currently extended by 3-6 months.</p>`,
        title: "I-526 PETITION REVIEW & APPROVAL",
        text: "The filing date of the I-526 Petition is known as the Priority Date. Track investment via personal online account with 3rd party fund administrator. Monitor construction progress via quarterly project updates, 24/7 webcam, and site visits.",
        delay: "", // No delay for the first step
      },
      {
        id: 22,
        icon: "flaticon-licensing",
        step: "Step 06",
        html: `<p class="small lh-base text-start">If your Priority Date is “Current”, immediately proceed to Step 7.<br /><br />If EB-5 visas are not available for the principal applicant’s country of birth, then you must wait until your Priority Date becomes Current.</p>`,
        title: "PRIORITY DATE REVIEW",
        text: "If your Priority Date is “Current”, immediately proceed to Step 7. If EB-5 visas are not available for the principal applicant’s country of birth, then you must wait until your Priority Date becomes Current.",
        delay: "300ms",
      },
      {
        id: 23,
        icon: "flaticon-visa",
        step: "Step 07",
        html: `<p class="small lh-base text-start"> <strong class="fw-bold text-success">3-9 MONTHS.</strong> <br /><br /> <strong class="fw-bold">If you live in the United States</strong><br /><br />File an Adjustment of Status (AOS) Application (File I-485) <br /><br /> <strong class="fw-bold">If you Live Overseas</strong><br /><br />Attend EB-5 visa interview at the local U.S. consulate (File DS-260)</small></p>`,
        title: "ADJUST IMMIGRATION STATUS",
        text: "If you live in the United States File an Adjustment of Status (AOS) Application (File I-485). If you Live Overseas Attend EB-5 visa interview at the local U.S. consulate (File DS-260)",
        delay: "600ms",
      },
      {
        id: 24,
        icon: "flaticon-visa",
        step: "Step 08",
        html: `<p class="small lh-base text-start">Principal applicant and immediate family members (if any) will receive <strong class="fw-bold text-success">2 year green cards.</strong>upon entering the U.S <br /><br />The filing date of the I-526 Petition is known as the <strong class="fw-bold text-success"> Priority Date.</strong>The U.S. Department of State publishes a monthly <strong class="fw-bold text-success">  VISA BULLETIN</strong> which lists cut-off dates for the EB-5 program, based on the principal applicant’s country of birth</p>`,
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
        html: `<p class="small lh-base text-start"><strong class="fw-bold text-success">21-24 MONTHS</strong><br />The investor must visit the United States within 180 days of approval and <strong class="fw-bold text-success"> must visit the U.S. at least once every six months.</strong><br />Many investors apply for a  <strong class="fw-bold text-success">   Reentry Permit,</strong>thus eliminating the need to travel to the U.S. as frequently</p>`,
        title: "CONDITIONAL US RESIDENCY PERIOD",
        text: "21-24 MONTHS The investor must visit the United States within 180 days of approval and must visit the U.S. at least once every six months. Many investors apply for a Reentry Permit, thus eliminating the need to travel to the U.S. as frequently.",
        delay: "", // No delay for the first step
      },
      {
        id: 32,
        icon: "flaticon-licensing",
        step: "Step 10",
        html: `<p class="small lh-base text-start">File I-829 petition to remove conditions on your U.S. green card<br /><br /><small>&#8226; immigration Attorney</small><br /><br /><small>&#8226; Form I-829</small><br /><br /><small>&#8226; US Citizenship & Immigration Services</small></p>`,
        title: "I-829 PETITION REVIEW & APPROVVAL",
        text: "File I-829 petition to remove conditions on your U.S. green card.",
        delay: "300ms",
      },
      {
        id: 33,
        icon: "flaticon-visa",
        step: "Step 11",
        html: `<p class="small lh-base text-start"> <strong class="fw-bold text-success">20-30 MONTHS</strong><br />Receive your permanent green card <br /><br />Renews every 10 years.<br /><br /><strong class="fw-bold text-success">RECEIVE I-829 APPROVAL!</strong></p>`,

        title: "RECEIVE PERMANENT GREEN CARD(S)",
        text: "Receive your permanent green card.",
        delay: "600ms",
      },
      {
        id: 34,
        icon: "flaticon-visa",
        step: "Step 12",
        html: `<p class="small lh-base text-start">If desired, the investor can apply for U.S. citizenship <strong class="fw-bold text-success">5 years </strong> after conditional green card.</p>`,

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
        <PageTitle bg={"/images/banner/4.png"} pageName="EB-5 Program" />
        <section className="about-section">
          <div className="icon-plane-2 bounce-y"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div
                  className="content-column col-lg-6 order-2 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="inner-column">
                    <div className="sec-title">
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
                      <div className="d-flex align-items-center flex-column flex-md-row">
                        <a
                          className="btn btn-link"
                          target="_blank"
                          href="https://travel.state.gov/content/travel/en/us-visas/immigrate/immigrant-investor-visas.html"
                        >
                          Click for more on Investor Visa Programs
                        </a>

                        <a
                          className="btn btn-link"
                          target="_blank"
                          href="https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program"
                        >
                          Click for more on EB-5 Visa Program
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-6 order-1 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="image-box">
                      <figure className="image overlay-anim">
                        <Image
                          src="/images/background/hov3.jpg"
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
            className="bg bg-image"
            style={{
              backgroundColor: "rgba(var(--theme-color2-rgb), 1)",
              backgroundImage: "url('/images/background/bg-pattern.png')",
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          ></div>
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12">
                <div className="inner-column">
                  <div className="sec-title light">
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
                {FACTS.map((fact) => {
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
                              <CounterUp
                                end={+fact.target}
                                round={fact.id !== 5}
                              />
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
          <div className="container">
            <div className="row d-flex row-cols-auto row-cols-md-2 flex-wrap">
              {sections.map((section) => {
                return (
                  <div
                    key={section.id}
                    className={`${
                      section.theme === "light"
                        ? " bg-light "
                        : " bg-theme-color2 text-white light "
                    } ${
                      section.id === 5 && "w-100"
                    } pt-3 px-3 text-center overflow-hidden col-12 col-md-6`}
                  >
                    <div className="mt-3 pt-3 px-md-3">
                      <h2
                        className={`${
                          section.theme === "light"
                            ? " bg-light "
                            : " bg-theme-color2 text-white light "
                        } display-5 `}
                      >
                        {section.title}
                      </h2>
                      <div className="lead my-4">
                        <small>
                          {section.description}
                          {section.advantages &&
                            section.advantages.length > 0 && (
                              <ul className="text-start px-5">
                                {section.advantages.map((advantage) => (
                                  <li
                                    className=""
                                    key={advantage}
                                    style={{ listStyle: "circle" }}
                                  >
                                    {advantage}
                                  </li>
                                ))}
                              </ul>
                            )}
                        </small>
                      </div>
                    </div>
                    <div
                      className={`shadow-sm mx-auto`}
                      style={{
                        width: "80%",
                        borderRadius: "21px 21px 0 0",
                      }}
                    >
                      <Image
                        className={`${
                          section.id === 5 && " w-100 "
                        } h-100 rounded-top`}
                        src={section.img}
                        width={512}
                        height={512}
                      />
                    </div>
                  </div>

                  // <div
                  //   key={section.id}
                  //   className={`container d-flex justify-content-between gap-5 py-5 my-md-5 flex-column ${
                  //     section.id % 2 === 0 ? "flex-md-row" : "flex-md-row-reverse"
                  //   }`}
                  // >
                  //   <Image src={section.img} width={512} height={128} />
                  //   <div className="inner-column">
                  //     <div className="sec-title">
                  //       <h2>{section.title}</h2>
                  //       <div className="text">{section.description}</div>
                  //       {section.advantages && section.advantages.length > 0 && (
                  //         <ul className="list-group">
                  //           {section.advantages.map((advantage) => (
                  //             <li className="list-group-item" key={advantage}>
                  //               {advantage}
                  //             </li>
                  //           ))}
                  //         </ul>
                  //       )}
                  //     </div>
                  //   </div>
                  // </div>
                );
              })}
            </div>
          </div>
        </section>

        {stages && stages.length > 0 && (
          <section className="process-section pt-5 text-center">
            <h4 className="py-4 text-white" id="process">
              Process To Obtain A Green Card (And Citizenship) Through The EB-5
              Program
            </h4>
            {stages.map((stage) => {
              return (
                <div key={stage.id} className="auto-container ">
                  <div className="sec-title text-center text-white">
                    <span className="sub-title text-white">{`Stage ${stage.id}`}</span>
                    <h2 className="scrub-each-word text-split text-white">
                      {stage.title}
                    </h2>
                    <p className="text text-white">{stage.description}</p>
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
                          <StepCard step={step}>
                            <div
                              style={{ minHeight: "370px" }}
                              dangerouslySetInnerHTML={{ __html: step.html }}
                            ></div>
                          </StepCard>
                          {/* <div className="inner-box me-4">
                            <i className={`icon ${step.icon}`}></i>
                            <div className="content p-3">
                              <span className="step">{step.step}</span>
                              <h5 className="title">{step.title}</h5>
                              <div className="text-xs small">{step.text}</div>
                            </div>
                          </div> */}
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
              <table className="table table-responsive table-striped table-bordered tbl-shopping-cart">
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
                          What’s an EB-5 overview?
                          <i className="arrow fal fa-angle-down"></i>
                        </div>
                        <div
                          className={`acc-content ${
                            activeAccordion.key === 1 ? "current" : ""
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              The EB-5 visa is an immigrant visa available in
                              the United States which enables foreign investors
                              to obtain permanent residency in the United
                              States. In order to obtain an EB-5 visa, the
                              foreign investor must make a qualifying investment
                              in a new commercial enterprise that creates jobs
                              in the country. 1. To qualify for an EB-5 visa (a
                              green card), an investor needs to make a minimum
                              investment of $1,050,000 in a new commercial
                              enterprise. If the investment is made in a
                              targeted employment area (TEA) however, this
                              minimum investment amount is reduced to $800,000.
                              2. Because the EB5 Visa program aims to create
                              jobs for U.S. workers and fuel economic growth in
                              the country, a part of the investment must create
                              or preserve at least 10-full time jobs for U.S.
                              workers. This needs to be achieved within two
                              years of receiving a conditional green card. The
                              majority of EB-5 investments are made through
                              designated regional centers. These are private
                              entities that facilitate the investment process
                              and help investors meet the job creation
                              requirement. 3. Initially, the foreign investor
                              will be granted a conditional green card, which is
                              valid for two years upon approval of the EB-5
                              petition. 4. After the two year period, the
                              investor will need to file a petition to remove
                              the conditions on their green card and prove that
                              the investment and job creation requirements have
                              been met. 5. Once these conditions have been
                              removed, the investor and his or her family will
                              receive permanent resident status and qualify for
                              permanent green cards in the U.S. 6. Five years
                              after first receiving conditional permanent
                              resident status, they can become naturalized
                              citizens.
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
