import React, { useState } from 'react';
import './SliderVideo.css';
import video1 from './video/rpm-video.mp4';
import video2 from './video/rpm-video.mp4';
import video3 from './video/rpm-video.mp4';

const SliderVideo = () => {
  const videos = [video1, video2, video3]; // Lista de videos
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextSlide = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="slider-video-section">
      <div className="video-slider-container">
        {videos.map((video, index) => (
          <video
            key={index}
            className={`video-slide ${index === currentVideo ? 'active' : ''}`}
            src={video}
            autoPlay={index === currentVideo}
            loop
            muted
            playsInline
          />
        ))}
        <div className="slider-video-buttons">
          <button className="slider-video-button left" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="slider-video-button right" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};


export default SliderVideo;
