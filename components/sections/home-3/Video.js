'use client';

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Video() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="video-section-two">
                {/* Background image */}
                <div
                    className="bg bg-image"
                    style={{
                        backgroundImage: `url('/images/background/bg6.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="bg-shape"></div>
                
                <div className="auto-container">
                    <div className="outer-box">
                        {/* Video Play Button */}
                        <a 
                            onClick={() => setOpen(true)} 
                            className="play-now-two" 
                            data-fancybox="gallery" 
                            data-caption=""
                        >
                            <i className="icon fas fa-play" aria-hidden="true"></i>
                            <span className="ripple"></span>
                        </a>
                        
                        {/* Title */}
                        <h2 className="title words-slide-up text-split">
                            Most Trusted <br />Immigration & Visa <br />Solutions Agency
                        </h2>
                    </div>
                </div>
            </section>

            {/* Modal Video Component */}
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
