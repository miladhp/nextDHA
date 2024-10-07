import React from "react";
import Link from "next/link";
import Image from "next/image";

const PartnerBox = ({ data }) => {
  return (
    <div className="service-block-two">
      <div className="inner-box bg-transparent">
        <div className="content-box bg-transparent">
          <div className="inner text-center">
            <Image
              src={data.img}
              width={100}
              height={100}
              alt={data.title}
              style={{ minHeight: "100px" }}
              className="object-cover p-2 w-auto"
            />
            <h4 className="title">
              <Link href="page-service-details">{data.title}</Link>
            </h4>
            <div className="text">{data.description.substring(0, 150)}</div>
          </div>
          <Link
            href="page-service-details"
            className="theme-btn btn-style-one dark-bg"
          >
            <span className="btn-title">
              Learn more <i className="fa fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerBox;
