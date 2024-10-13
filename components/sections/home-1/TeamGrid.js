import React from "react";
import MemberCard from "@/components/elements/MemberCard";
import { TEAM_MEMBERS } from "@/constants/global";
function TeamGrid() {
  return (
    <section className="team-section pb-0" id="team">
      <div className="auto-container">
        <div className="sec-title text-center mb-0 mt-xl-30">
          <span className="sub-title">Our Team</span>
          <h2 className="words-slide-up text-split">Experience Team Members</h2>
        </div>
        <div className="row">
          {TEAM_MEMBERS.map((member) => (
            <div className="col-12 col-md-6 col-lg-4">
              <MemberCard key={member.id} member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamGrid;
