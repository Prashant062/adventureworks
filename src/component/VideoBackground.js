import React, { useRef } from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="video-container" onClick={handleVideoClick}>
      <video className="video-background" autoPlay muted loop ref={videoRef}>
        <source
          src="//streaming-us-prod.cms.commerce.dynamics.com/f47f3a9c-fb34-4be0-8bd8-d18449ead1d9/92457605-1604-4f86-842a-2f56e469_650.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <h1>Sunrise Session</h1>
        <h2>Kiana Anderson</h2>
        <p>Pro Surfer | <span>Read her story</span></p>
        <a href="/" className="button-link">
          SHOP SURFBOARDS
        </a>
      </div>
    </div>
  );
};

export default VideoBackground;
