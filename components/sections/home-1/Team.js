import React from "react";
import TeamSlider from "@/components/elements/TeamSlider";

function Team() {
  return (
    <section className="team-section pb-0" id="team">
      <div className="auto-container">
        <div className="sec-title text-center mb-0 mt-xl-30">
          <span className="sub-title">Our Team</span>
          <h2 className="words-slide-up text-split">Experienced Team Members</h2>
        </div>
        <TeamSlider />
      </div>
    </section>
  );
}

export default Team;
