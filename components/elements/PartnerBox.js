import React from "react";
import Link from "next/link";
import Image from "next/image";

const PartnerBox = ({ data, hasDescription = true }) => {
  return (
    <div className="service-block-two w-100 mb-0">
      <div className="inner-box bg-transparent w-100">
        <div className="content-box bg-transparent w-100">
          <div className="inner text-center w-100 py-0 mt-2">
            <Image
              src={data.img}
              width={960}
              height={960}
              alt={data.title}
              className="object-fit-cover w-auto p-2 mt-0"
              style={{ height: "80px", transform: "scale(2)" }}
            />
            <Link href={`/partnership#${data.id}`}>
              <h4 className="title w-full mt-3" style={{ minHeight: "60px" }}>
                {data.title}
              </h4>
            </Link>
            {hasDescription && (
              <div className="text mb-0 pb-0" style={{ minHeight: "210px" }}>
                {data.description}
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
