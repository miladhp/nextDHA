import React from "react";
import Image from "next/image";

const links = [
  "/images/media/1.png",
  "/images/media/2.png",
  "/images/media/3.png",
  "/images/media/4.png",
  "/images/media/5.png",
];

export default function AsYouSeen() {
  return (
    <section className="py-5">
      <div className="auto-container text-center">
        <div className="sec-title">
          <h2 className="words-slide-up text-split">As Seen In </h2>
        </div>
        <div className="marquee ">
          <div className="marquee-group d-flex justify-content-evenly gap-5">
            {links.map((link) => (
              <Image key={link} src={link} width={100} height={150} />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee-group d-flex justify-content-evenly gap-5"
          >
            {links.map((link) => (
              <Image key={link} src={link} width={100} height={150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
