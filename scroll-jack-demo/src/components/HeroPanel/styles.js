import { css } from "@emotion/react";
import { typeramps } from "../../style-utils/typeramps";

const styles = css`
  height: 100vh;
  width: 100vw;
  h1 {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${typeramps.display.lg};
    margin: 0;
  }
`;

export default styles;
