import Image from "next/image";
import React from "react";

function MemberCard({ member }) {
  return (
    member && (
      <div className="member-card d-flex flex-column">
        <div className="member-card-photo position-relative">
          <Image src={member?.img} width={512} height={768} />

          <div className="member-card-photo--hover position-absolute h-100 w-100 top-0 d-flex flex-column align-items-center justify-content-end">
            {/* <a className="theme-btn btn-style-one hover-light mb-5">
              <span className="btn-title">More</span>
            </a> */}
          </div>
        </div>
        <div className="d-flex flex-column align-items-center pt-4">
          <h3 className="mb-0">{member?.name}</h3>
          <p>{member?.designation}</p>
        </div>
      </div>
    )
  );
}

export default MemberCard;
