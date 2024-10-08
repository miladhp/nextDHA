import { COUNTRIES } from "@/constants/global";
import Link from "next/link";
import { useState } from "react";

const Country = () => {
  return (
    <>
      <section className="country-section">
        <div className="auto-container">
          <div className="row">
            <div className="sec-title col-lg-6 col-md-6 col-sm-12">
              <span className="sub-title">Choose Country</span>
              <h2 className="scrub-each-word text-split">
                Countries we're support for the EB-5 Program
              </h2>
            </div>
            {COUNTRIES.length > 0 &&
              COUNTRIES.map((country) => {
                return (
                  <div
                    key={country.id}
                    className="country-block col-lg-3 col-md-6 col-sm-6"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <img src={country.flag} alt={country.name} />
                        <h4 className="title">
                          <Link
                            href={{
                              pathname: "/country/[id]",
                              query: { id: country.id },
                            }}
                          >
                            {country.name}{" "}
                          </Link>
                        </h4>
                      </div>
                      <div className="text">
                        We denou righteous indigna beguiled demoralized
                      </div>
                      <Link
                        href={{
                          pathname: "/country/[id]",
                          query: { id: country.id },
                        }}
                        className="read-more"
                      >
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
