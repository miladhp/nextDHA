import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    id: 1,
    title: "Dhanani Private Equity",
    img: "/images/services/equity_1.jpg",
    link: "https://dhananipeg.com/",
  },
  {
    id: 2,
    title: "DPEG Energy",
    img: "/images/services/energy.jpg",
    link: "https://dhananipeg.com/dpeg-energy/",
  },
  {
    id: 3,
    title: "DPEG Insurance",
    img: "/images/services/insurance_1.jpg",
    link: "https://mckinneyandco.com/",
  },
  {
    id: 4,
    title: "DPEG Construction",
    img: "/images/services/construction.jpg",
    link: "https://dhananipeg.com/construction/",
  },
];
function ServicesSection() {
  return (
    <section>
      <div className="container text-center" id="services">
        <div className="sec-title">
          <h2 className="scrub-each-word text-split">
            What Other Services Do We Offer?
          </h2>
          <p>
            Business is about creating value. We offer an ecosystem of real
            estate services.
          </p>
        </div>
        <div className="row">
          {services.map((s) => {
            return (
              <div key={s.id} className="col-12 col-md-6 mb-3">
                <div
                  style={{
                    background: `url(${s.img}) rgba(0,0,0,0.5)`,
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="py-5 w-100"
                >
                  <Link href={s.link} target="_blank">
                    <h3 className="my-5 text-white title">{s.title}</h3>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
