import { css } from '@emotion/react';
import { desktop, tabletOnly, tabletMax, mobile } from '../../style-utils/breakpoints';

const styles = css`
  width: 100vw;
  height: 100vh;
  position: sticky;
  inset: 0;
  z-index: -1;

  .minutes {
    position: absolute;
    ${mobile} {
      width: 30%;
      bottom: 30%;
    }
    ${tabletOnly} {
      width: 260px;
      bottom: 20%;
    }
    ${tabletMax} {
      left: 50%;
      transform: translateX(-50%);
    }
    ${desktop} {
      right: 235px;
      bottom: 15%;
    }
    opacity: 0;
  }

  .overlay {
    background-color: black;
    opacity: 0.35;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .scene-bg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    &.bg-transparent {
      background-color: transparent;
    }

    .sequence-canvas {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .video-bg-wrapper {
      width: 100%;
      height: 100%;
    }
    .bg-loop,
    .bg-image img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .pin-right,
    .pin-right img {
      ${desktop} {
        height: 100%;
        width: auto;
        min-width: 100%;
        position: absolute;
        right: 0;
      }
    }

    .floating {
      height: auto;
      max-height: 80%;
      object-fit: contain;
      ${mobile} {
        margin-top: 20%;
      }
      ${tabletOnly} {
        margin-top: 10%;
      }
      ${desktop} {
        position: absolute;
        width: auto;
        max-height: 70%;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
      &.adjustability {
        ${mobile} {
          margin-top: 30%;
        }
      }
    }
  }
`;

export default styles;
