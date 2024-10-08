import CounterUp from "./CounterUp";

const CounterBox = ({
  start,
  target,
  before,
  after,
  title,
  icon,
  direction,
}) => {
  return (
    <div className="counter-block wow fadeInUp my-3 my-lg-5">
      <div
        className={`flex-${direction} inner-box ${
          direction === "row" ? "me-auto ms-0" : "ms-auto me-0"
        }`}
      >
        <div className="icon-box">
          <i
            className={`icon ${icon} ${
              direction === "row" ? "me-3 ms-0" : "ms-3 me-0"
            }`}
          ></i>
        </div>
        <div
          className={`d-flex flex-column align-items-${
            direction === "row" ? "start" : "end"
          } content-box`}
        >
          <div className="count-box">
            <span className="count-text d-flex">
              {before} <CounterUp end={target} />
              {after}
            </span>
          </div>
          <div className="counter-title text-nowrap">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default CounterBox;
