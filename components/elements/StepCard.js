import React from "react";

function StepCard({ children, step }) {
  return (
    <div className="step-card bg-white d-flex flex-column align-items-center rounded-3">
      <h4 className="text-secondary p-3 mb-0" style={{ minHeight: "90px"}}>{step.title}</h4>
      <div className="position-relative w-100 px-3">
        <div className="steps-container position-absolute top-0 start-0 w-100 text-start">
          <div className="steps text-white w-50 ps-3">
            <span className="text-white z-index-3 position-absolute">
              {step.step}
            </span>
          </div>
        </div>
        <br />
        <div className="mt-3 text-body-secondary">{children}</div>
      </div>
    </div>
  );
}

export default StepCard;
