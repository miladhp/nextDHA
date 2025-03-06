import React from "react";

function MatterBox({ matter }) {
  return (
    <div
      className="matter-block p-4 h-100 d-grid col-12 col-md-4 mx-auto"
      style={{ zIndex: 9 }}
    >
      <div className=" d-flex align-items-center justify-content-start">
        <svg
          class="border border-white rounded-circle"
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Completely round image: 75x75"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          fill="transparent"
        >
          <title>Completely round image</title>
          <rect width="100%" height="100%" stroke="#868e96"></rect>
          <text x="45%" y="50%" fill="#dee2e6" dy=".3em">
            {matter.id}
          </text>
        </svg>
        <h4 className="title mb-0 ms-3 text-white text-wrap">{matter.title}</h4>
      </div>
      <div className="text text-light mt-4">{matter.description} </div>
    </div>
  );
}

export default MatterBox;
