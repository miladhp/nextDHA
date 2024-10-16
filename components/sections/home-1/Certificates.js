import React from "react";
import Image from "next/image";

const links = [
  "/images/media/c1.png",
  "/images/media/c2.png",
  "/images/media/c3.png",
  "/images/media/c4.png",
];

export default function Certificates() {
  return (
    <section className="py-5">
      <div className="auto-container text-center">
        <div className="sec-title">
          <h2 className="words-slide-up text-split">DPEG Certificates</h2>
        </div>
        <div className="row">
          {links.map((link) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3 d-flex align-items-center justify-content-center">
              <Image key={link} src={link} width={240} height={240} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
