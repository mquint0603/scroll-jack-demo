import { css } from "@emotion/react";
import { typeramps } from "../../style-utils/typeramps";
import { desktop, tabletOnly, tabletMax } from "../../style-utils/breakpoints";

const styles = css`
  .scene {
    position: relative;
  }
  .copy-wrapper {
    position: relative;
    height: 250vh;
  }
  #scene-1 {
    margin-top: -100vh;
    .copy-wrapper {
      height: 1500vh;
    }
  }
  #scene-3 {
    .copy-wrapper {
      height: 350vh;
    }
  }
  #scene-4 {
    .copy-wrapper {
      height: 300vh;
    }
  }

  .copy-container {
    position: sticky;
    top: 0px;
    ${desktop} {
      top: 40px;
    }
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1200px;
  }

  .copy-block {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 80%;

    ${desktop} {
      max-width: 600px;
    }

    &.-start-opaque {
      opacity: 1;
    }

    &.-center {
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      max-width: 1200px;

      ${tabletMax} {
        bottom: initial;
      }
    }

    p {
      ${typeramps.body.lg};
    }
    .headline-lg {
      ${typeramps.headline.lg};
    }
    .headline-md {
      ${typeramps.headline.md};
    }
    .display-sm {
      ${typeramps.display.sm};
    }
    .display-lg {
      ${typeramps.display.lg};
    }
  }
  .pause-btn {
    position: fixed;
    bottom: 10px;
    left: 10px;
    opacity: 0;
  }
`;

export default styles;
