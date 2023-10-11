import { css } from "@emotion/react";
import { typeramps } from "../../style-utils/typeramps";
import {
  desktop,
  tabletOnly,
  tabletMax,
} from "../../style-utils/breakpoints";

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
    top: 55%;
    transform: translateY(-50%);
    opacity: 0;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;

    ${tabletMax} {
      bottom: 5%;
      top: initial;
      transform: translateY(0%);

      &.-center-t-m {
        left: 50%;
        top: 55%;
        transform: translate(-50%, -50%);
        width: 100%;
        bottom: initial;
      }

      &.scene-1-1,
      &.scene-2-1 {
        text-align: center;
      }
      &.scene-3-2,
      &.scene-3-3 {
        bottom: 10%;
      }
    }

    ${tabletOnly} {
      max-width: 80%;
      padding-left: 64px;
      &.-center,
      &.-center-t-m {
        padding-left: 1rem;
      }
    }

    ${desktop} {
      max-width: 600px;
      &.-right {
        right: 10%;
      }
    }

    &.-start-opaque {
      opacity: 1;
      top: 50%;
    }

    &.-center {
      left: 50%;
      top: 55%;
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
      text-transform: none;
    }
    .headline-md {
      ${typeramps.headline.md};
      text-transform: none;
    }
    .display-sm {
      ${typeramps.display.sm};
      text-transform: none;
    }
    .display-lg {
      ${typeramps.display.sm};
      text-transform: none;
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
