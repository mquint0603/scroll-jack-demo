// import React, { useRef, useEffect, useState } from "react";
// import cx from "classnames";
/** @jsxImportSource @emotion/react */
import ImageBackground from "../ImageBackground/ImageBackground";
import VideoBackground from "../video-background/VideoBackground";
import styles from "./styles";

function ScrollBackgrounds({ playRefs }) {
  //   const [loadBottomAssets, setLoadBottomAssets] = useState(false);

  return (
    <div className="stage" css={styles}>
      <div className="scene-bg bg-6-2">
        <VideoBackground vidId="scroll-jack-demo/stars-zoom-slow" />
      </div>
      <div className="scene-bg bg-6-1"></div>
      <div className="scene-bg bg-5"></div>
      <div className="scene-bg bg-4">
        <VideoBackground vidId="scroll-jack-demo/earth-turning" />
        <div className="overlay" />
      </div>
      <div className="scene-bg bg-3-3"></div>
      <div className="scene-bg bg-3-2"></div>
      <div className="scene-bg bg-3-1"></div>
      <div className="scene-bg bg-2">
        <ImageBackground imgId="scroll-jack-demo/eclipse" />
      </div>
      <div className="scene-bg bg-1-3">
        <VideoBackground vidId="scroll-jack-demo/mars-turning" />
      </div>
      <div className="scene-bg bg-1-2">
        <VideoBackground vidId="scroll-jack-demo/earth-turning" />
        <div className="overlay" />
      </div>
      <div className="scene-bg bg-1-1">
        <VideoBackground vidId="scroll-jack-demo/stars-zoom-slow" />
      </div>
    </div>
  );
}

export default ScrollBackgrounds;
