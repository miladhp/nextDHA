import Image from "next/image";
import React from "react";

const benefits = [
  {
    id: "1",
    img: "/images/icons/family-icon.png",
    icon: "flaticon-family",
    text: "Include spouse and children under 21 in one single EB-5 application",
  },
  {
    id: "2",
    icon: "flaticon-licensing",
    img: "/images/icons/us-work-permit-icon-2.png",
    text: "Receive US work permits within 4–6 months & US green cards typically within 12–24 months",
  },
  {
    id: "3",
    icon: "flaticon-accomodation",
    img: "/images/icons/live-work-study-icon.png",
    text: "Live, work, and study anywhere in the US",
  },
  {
    id: "4",
    icon: "flaticon-visa-1",
    img: "/images/icons/passport-icon.png",
    text: "Secure a permanent visa with a path to US citizenship in 5 years",
  },
  {
    id: "5",
    icon: "flaticon-life-insurance",
    img: "/images/icons/political-unrest-icon.png",
    text: "Ensure a safety backup plan in situations of political instability and social unrest",
  },
  {
    id: "6",
    icon: "flaticon-family-1",
    img: "/images/icons/fund-icon.png",
    text: "Parents can fund a child’s individual application",
  },
  {
    id: "7",
    icon: "flaticon-suitcase",
    img: "/images/icons/fund-icon.png",
    text: "Pursue professional opportunities across the world’s largest economy",
  },
  {
    id: "8",
    icon: "flaticon-embassy",
    img: "/images/icons/fund-icon.png",
    text: "Enjoy higher acceptance rates at top US universities (Up to 9X more)",
  },
  {
    id: "9",
    icon: "flaticon-visa",
    img: "/images/icons/fund-icon.png",
    text: "Achieve professional mobility by eliminating visa dependency on family or employer sponsorship",
  },
  {
    id: "11",
    icon: "flaticon-discount",
    img: "/images/icons/fund-icon.png",
    text: "Access scholarships and reduced college tuition",
  },
  {
    id: "13",
    icon: "flaticon-increase",
    img: "/images/icons/fund-icon.png",
    text: "Professional in depth project Due Diligence and ongoing project monitoring",
  },
  {
    id: "14",
    icon: "flaticon-cooperation",
    img: "/images/icons/fund-icon.png",
    text: "Highest-quality developer partners with decades-long track records",
  },
  {
    id: "15",
    icon: "flaticon-shield",
    img: "/images/icons/fund-icon.png",
    text: "The applicant’s investment moves only through US government-approved escrow accounts",
  },
];
function Benefits() {
  return (
    <section className="" id="benefits">
      <div className="container text-center py-0">
        <div className="sec-title">
          <h2 className="scrub-each-word text-split">
            What Are Some Key Benefits Of Obtaining An EB-5 Visa?
          </h2>
        </div>
        <div className="row">
          <p className="text-success mb-5">
            Flexibility for Families, Quick Process, and Path to Citizenship
          </p>
          {benefits.slice(0, 6).map((ben) => {
            return (
              <div key={ben.id} className="col-12 col-md-4 col-lg-2">
                <div className="icon-box display-2 text-success">
                  <i className={`icon ${ben.icon}`}></i>
                </div>
                <p className="mt-3 text-center">{ben.text}</p>
              </div>
            );
          })}

          <p className="text-success mb-5">
            Educational and Professional Benefits
          </p>
          {benefits.slice(6, 10).map((ben) => {
            return (
              <div key={ben.id} className="col-12 col-md-4 col-lg-3">
                <div className="icon-box display-2 text-success">
                  <i className={`icon ${ben.icon}`}></i>
                </div>
                <p className="mt-3 text-center">{ben.text}</p>
              </div>
            );
          })}

          <p className="text-success mb-5">Safety of Investment</p>
          {benefits.slice(10, 14).map((ben) => {
            return (
              <div key={ben.id} className="col-12 col-md-4 col-lg-4">
                <div className="icon-box display-2 text-success">
                  <i className={`icon ${ben.icon}`}></i>
                </div>
                <p className="mt-3 text-center">{ben.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
