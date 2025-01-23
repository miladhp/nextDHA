"use client";

import CounterUp from "@/components/elements/CounterUp";
import React from "react";

const facts = [
  {
    id: 1,
    title: "2021 Weighted-Average Annual Return",
    before: "",
    after: "%",
    icon: "flaticon-currency-1",
    start: "0",
    target: "33",
  },
  {
    id: 2,
    title: "2022 Weighted-Average Annual Return",
    before: "",
    after: "%",
    icon: "flaticon-currency-1",
    start: "0",
    target: "46",
  },
  {
    id: 3,
    title: "2023 Weighted-Average Annual Return",
    before: "",
    after: "%",
    icon: "flaticon-currency-1",
    start: "0",
    target: "47",
  },
  {
    id: 4,
    title: "Projects in the past 15 years",
    before: "",
    after: "+",
    icon: "flaticon-accomodation",
    start: "0",
    target: "250",
  },
  {
    id: 5,
    title: "Lost",
    before: "$",
    after: "",
    icon: "flaticon-low-cost",
    start: "0",
    target: "0",
  },
  {
    id: 6,
    title: "Target Annual Return",
    before: "",
    after: "%",
    icon: "flaticon-cooperation",
    start: "0",
    target: "35",
  },
];
const FunFactAbout = () => {
  return (
    <section className="fun-fact-section-two style-two">
      <div className="icon-dots"></div>
      <div className="auto-container">
        <div className="fact-counter">
          <div className="row">
            {facts.map((fact) => {
              return (
                <div
                  key={fact.id}
                  className="counter-block-two col-lg-4 col-sm-6 wow fadeInUp"
                >
                  <div className="inner-box">
                    <i className={`icon ${fact.icon}`}> </i>
                    <div className="content-box">
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
  );
};

export default FunFactAbout;
