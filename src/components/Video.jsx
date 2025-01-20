import React from "react";
import nuttyJumpVideo from "/assets/images/nutty-jump-video.mp4";
import nuttyJumpPoster from "/assets/images/nutty-jump3.png";

const VideoComponent = () => {
  return (
    <div className="video">
      <video controls poster={nuttyJumpPoster}>
        <source src={nuttyJumpVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;