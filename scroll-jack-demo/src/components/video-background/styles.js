import { css } from "@emotion/react";

const styles = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  video {
    height: 100%;
    width: auto;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default styles;
