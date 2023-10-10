// import React, { useRef, useEffect, useState } from "react";
// import cx from "classnames";
/** @jsxImportSource @emotion/react */

import styles from "./styles";

function ScrollBackgrounds({ playRefs }) {
  //   const [loadBottomAssets, setLoadBottomAssets] = useState(false);

  return (
    <div className="stage" css={styles}>
      <div className="scene-bg bg-6-2">
        <div className="overlay" />
      </div>
      <div className="scene-bg bg-6-1 bg-green"></div>
      <div className="scene-bg bg-5"></div>
      <div className="scene-bg bg-4 bg-green"></div>
      <div className="scene-bg bg-3-3 bg-orange"></div>
      <div className="scene-bg bg-3-2 bg-orange"></div>
      <div className="scene-bg bg-3-1 bg-orange"></div>
      <div className="scene-bg bg-2 bg-green"></div>
      <div className="scene-bg bg-1-3"></div>
      <div className="scene-bg bg-1-2"></div>
      <div className="scene-bg bg-1-1"></div>
    </div>
  );
}

export default ScrollBackgrounds;
