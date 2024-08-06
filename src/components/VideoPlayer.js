import React from "react";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video width="100%" controls>
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
