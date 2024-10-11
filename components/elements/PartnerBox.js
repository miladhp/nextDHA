import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PartnerBox = ({ data, hasDescription = true }) => {
  const [showAll, setshowAll] = useState(false);
  return (
    <div className="service-block-two mb-0">
      <div className="inner-box">
        <div className="content-box px-0">
          <div className="d-flex flex-column align-items-center inner text-center w-100 py-0 mt-2">
            <Image
              src={data.img}
              fill
              alt={data.title}
              className="position-relative"
            />
            <h4 className="title w-full mt-3" style={{ minHeight: "60px" }}>
              {data.title}
            </h4>
            {hasDescription && (
              <div className="text mb-0 pb-0" style={{ minHeight: "180px" }}>
                {showAll
                  ? data.description
                  : data.description.substring(0, 200)}
                {data.description.length > 200 && (
                  <strong
                    className="fw-bold ms-2 cursor-pointer"
                    onClick={() => setshowAll(!showAll)}
                  >
                    show {showAll ? "less" : "more"}
                  </strong>
                )}
              </div>
            )}
          </div>
          {/* <Link
            href="page-service-details"
            className="theme-btn btn-style-one dark-bg"
          >
            <span className="btn-title">
              Learn more <i className="fa fa-arrow-right"></i>
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default PartnerBox;
