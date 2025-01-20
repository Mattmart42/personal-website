import React from "react";

const VideoComponent = () => {
  return (
    // <div className="video">
    //   <video poster="src/assets/nutty-jump1.png">
    //     <source src="src/assets/nutty-jump.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    // </div>

    <div class="video">
      <video controls poster="src/assets/nutty-jump3.png">
          <source src="src/assets/nutty-jump-video.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;