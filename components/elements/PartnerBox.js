import React from "react";
import Link from "next/link";
import Image from "next/image";

const PartnerBox = ({ data }) => {
  return (
    <div className="service-block-two w-100">
      <div className="inner-box bg-transparent w-100">
        <div className="content-box bg-transparent w-100">
          <div className="inner text-center w-100">
            <Image
              src={data.img}
              width={960}
              height={960}
              alt={data.title}
              className="object-fit-cover w-auto p-2"
              style={{ height: "80px", transform: "scale(2)" }}
            />
            <h4 className="title w-full" style={{ minHeight: "60px" }}>
              {data.title}
            </h4>
            <div className="text mb-0 pb-0" style={{ minHeight: "100px" }}>
              {data.description.substring(0, 150)}
            </div>
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
