"use client";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
import React from "react";
import CounterBox from "@/components/elements/CounterBox";
import { FACTS } from "@/constants/global";

const FunFact = () => {
  return (
    <section className="fun-fact-section pt-0 pb-0">
      <div className="auto-container">
        <div className="fact-counter">
          <div
            className="bg bg-image"
            style={{ backgroundImage: "url(/images/icons/icon-city.png)" }}
          ></div>
          <div className="outer-box row">
            <div className="funfact-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
              {FACTS.slice(0, 3).map((fact) => {
                return (
                  <div key={fact.id} className="inner-column p-0">
                    <CounterBox
                      title={fact.title}
                      target={fact.target}
                      before={fact.before}
                      after={fact.after}
                      start={fact.start}
                      icon={fact.icon}
                      direction="row"
                    />
                  </div>
                );
              })}
            </div>
            <div className="image-column col-xl-6 col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column text-center">
                <figure className="image wow zoomIn">
                  <img
                    src="/images/people/people-20.png"
                    alt="Fun Fact Image"
                  />
                </figure>
              </div>
            </div>
            <div className="funfact-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
              {FACTS.slice(3, 6).map((fact) => {
                return (
                  <div key={fact.id} className="inner-column p-0">
                    <CounterBox
                      title={fact.title}
                      target={fact.target}
                      before={fact.before}
                      after={fact.after}
                      start={fact.start}
                      icon={fact.icon}
                      direction="row-reverse"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
