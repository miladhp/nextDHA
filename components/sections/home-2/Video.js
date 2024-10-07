'use client';

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-section">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}
        ></div>
        <div className="overlay-2"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="title-box">
              <h2 className="title words-slide-up text-split">
                Most Trusted <br />
                Immigration & Visa <br />
                Solutions Agency
              </h2>
            </div>
            <div className="video-box">
              <div className="icon-box">
                <h4 className="title">Watch Video</h4>
                <img src="/images/icons/icon-arrow3.png" alt="icon" />
              </div>
              <a
                onClick={() => setOpen(true)}
                className="play-now-two"
                data-fancybox="gallery"
                data-caption=""
              >
                <i className="icon fa fa-play" aria-hidden="true"></i>
                <span className="ripple"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Fvae8nxzVz4"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
