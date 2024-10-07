'use client';

import CounterUp from "@/components/elements/CounterUp";
import React from 'react';

const ClientsSection = () => {
    return (
        <section className="clients-section-two">
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        {/* Counter Block */}
                        <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="count-box">
                                        <span className="count-text">
                                            <CounterUp end={30} />+
                                        </span>
                                    </div>
                                    <div className="counter-title">Of yachts</div>
                                </div>
                            </div>
                        </div>
                        {/* Counter Block */}
                        <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="count-box">
                                        <span className="count-text">
                                            <CounterUp end={5} />+
                                        </span>
                                    </div>
                                    <div className="counter-title">Years of experience</div>
                                </div>
                            </div>
                        </div>
                        {/* Counter Block */}
                        <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="count-box">
                                        <span className="count-text">
                                            <CounterUp end={10} />+
                                        </span>
                                    </div>
                                    <div className="counter-title">Professional Crew</div>
                                </div>
                            </div>
                        </div>
                        {/* Counter Block */}
                        <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="count-box">
                                        <span className="count-text">
                                            <CounterUp end={3} />
                                        </span>
                                    </div>
                                    <div className="counter-title">Best Yacht Awards</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
