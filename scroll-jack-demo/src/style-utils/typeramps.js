import { css } from "@emotion/react";
import { tablet, desktop } from "./breakpoints";

const fontSizeRoot = "14px";
function pxToNum(str) {
  return +str.trim().replace("px", "");
}

/**
 *  Returns a CSS-in-js (emotion) object with:
 *  - font-size: size / root size <rem>
 *  - line-height: leading / size OR default leading (1.5)
 * @param {Number} size (px)
 * @param {Number} leading (px)
 * @return {Object} emotion CSS
 */
function getFontSizeAndLineHeight(size, leading) {
  const ratio = leading ? leading / size : 1.5;
  const fontSize = size / pxToNum(fontSizeRoot);
  return css`
    font-size: ${fontSize.toFixed(2)}rem;
    line-height: ${ratio};
  `;
}

export const AVENIR_BOOK = `Arial, sans-serif`;
export const AVENIR_BLACK = `Arial, sans-serif`;
export const HICKORY_DICKORY = "VVDS Hickory Dickory Normal";

export const fonts = {
  // Regular
  book: css`
    font-family: ${AVENIR_BOOK};
    font-weight: normal;
  `,

  // Phat
  black: css`
    font-family: ${AVENIR_BLACK};
    font-weight: 600;
  `,

  fancy: css`
    font-family: ${HICKORY_DICKORY};
    font-weight: normal;
  `,
};

export const transforms = {
  capitalize: css`
    text-transform: capitalize;
  `,
  inherit: css`
    text-transform: inherit;
  `,
  initial: css`
    text-transform: initial;
  `,
  lowercase: css`
    text-transform: lowercase;
  `,
  none: css`
    text-transform: none;
  `,
  revert: css`
    text-transform: revert;
  `,
  unset: css`
    text-transform: unset;
  `,
  upper: css`
    text-transform: uppercase;
  `,
};

export const mods = {
  upper: transforms.upper,

  nowrap: css`
    white-space: nowrap;
  `,

  underline: css`
    text-decoration: underline;
  `,

  strikethrough: css`
    text-decoration: line-through;
  `,
};

/**
 * Typography Specs
 */
export const typeramps = {
  /** DISPLAY TYPE - lg, sm */
  display: {
    /**
     * DISPLAY LARGE
     * | Breakpoint | Font-Size | Line-Height |
     * | ---------- | --------- | ----------- |
     * | Desktop    | 60px      | 1.5         |
     * | Tablet     | 48px      | 1.5         |
     * | Mobile     | 40px      | 1.5         |
     */
    lg: css`
      ${getFontSizeAndLineHeight(40)};
      ${fonts.fancy};

      sup {
        font-size: 24px;
      }

      ${tablet} {
        ${getFontSizeAndLineHeight(48)};

        sup {
          font-size: 28px;
        }
      }
      ${desktop} {
        ${getFontSizeAndLineHeight(60)};

        sup {
          font-size: 36px;
        }
      }
    `,

    /**
     * DISPLAY SMALL
     * | Breakpoint | Font-Size | Line-Height |
     * | ---------- | --------- | ----------- |
     * | Desktop    | 48px      | 1.5         |
     * | Tablet     | 40px      | 1.5         |
     * | Mobile     | 36px      | 1.5         |
     */
    sm: css`
      ${getFontSizeAndLineHeight(36)};
      ${fonts.fancy};

      sup {
        font-size: 22px;
      }

      ${tablet} {
        ${getFontSizeAndLineHeight(40)};

        sup {
          font-size: 24px;
        }
      }
      ${desktop} {
        ${getFontSizeAndLineHeight(48)};

        sup {
          font-size: 28px;
        }
      }
    `,
  },

  /** HEADLINE TYPE - xl, lg, md, sm */
  headline: {
    /**
     * HEADLINE X-LARGE
     * | Breakpoint | Font-Size | Line-Height |
     * | ---------- | --------- | ----------- |
     * | Desktop    | 40px      | 1.5         |
     * | Tablet     | 36px      | 1.5         |
     * | Mobile     | 28px      | 1.5         |
     */
    xl: css`
      ${getFontSizeAndLineHeight(28)};
      ${fonts.black};
      ${mods.upper};

      sup {
        font-size: 18px;
      }

      ${tablet} {
        ${getFontSizeAndLineHeight(36)};

        sup {
          font-size: 22px;
        }
      }
      ${desktop} {
        ${getFontSizeAndLineHeight(40)};

        sup {
          font-size: 24px;
        }
      }
    `,

    /**
     * HEADLINE LARGE
     * | Breakpoint | Font-Size | Line-Height |
     * | ---------- | --------- | ----------- |
     * | Desktop    | 36px      | 1.5         |
     * | Tablet     | 28px      | 1.5         |
     * | Mobile     | 24px      | 1.5         |
     */
    lg: css`
      ${getFontSizeAndLineHeight(24)};
      ${fonts.black};
      ${mods.upper};

      sup {
        font-size: 14px;
      }

      ${tablet} {
        ${getFontSizeAndLineHeight(28)};

        sup {
          font-size: 18px;
        }
      }
      ${desktop} {
        ${getFontSizeAndLineHeight(36)};

        sup {
          font-size: 22px;
        }
      }
    `,

    /**
     * HEADLINE MEDIUM
     * | Breakpoint | Font-Size | Line-Height |
     * | ---------- | --------- | ----------- |
     * | Desktop    | 28px      | 1.5         |
     * | Tablet     | 24px      | 1.5         |
     * | Mobile     | 20px      | 1.5         |
     */
    md: css`
      ${getFontSizeAndLineHeight(20)};
      ${fonts.black};
      ${mods.upper};

      sup {
        font-size: 12px;
      }

      ${tablet} {
        ${getFontSizeAndLineHeight(24)};

        sup {
          font-size: 14px;
        }
      }
      ${desktop} {
        ${getFontSizeAndLineHeight(28)};

        sup {
          font-size: 18px;
        }
      }
    `,

    /**
     * HEADLINE SMALL
     * | Breakpoint | Font-Size | Line-Height |
     * | ---------- | --------- | ----------- |
     * | Desktop    | 24px      | 1.5         |
     * | Tablet     | 20px      | 1.5         |
     * | Mobile     | 20px      | 1.5         |
     */
    sm: css`
      ${getFontSizeAndLineHeight(20)};
      ${fonts.black};
      ${mods.upper};

      sup {
        font-size: 12px;
      }

      ${tablet} {
        sup {
          font-size: 12px;
        }
      }

      ${desktop} {
        ${getFontSizeAndLineHeight(24)};

        sup {
          font-size: 14px;
        }
      }
    `,
  },

  /** BODY TYPE - lg, md, sm, legal */
  body: {
    /**
     * BODY LARGE
     * | Font-Size | Line-Height |
     * | --------- | ----------- |
     * | 20px      | 1.5         |
     */
    lg: css`
      ${getFontSizeAndLineHeight(20)};
      ${fonts.book};

      sup {
        font-size: 12px;
      }
    `,

    /**
     * BODY MEDIUM
     * | Font-Size | Line-Height |
     * | --------- | ----------- |
     * | 16px      | 1.75        |
     */
    md: css`
      ${getFontSizeAndLineHeight(16, 28)};
      ${fonts.book};

      sup {
        font-size: 10px;
      }
    `,

    /**
     * BODY SMALL
     * | Font-Size | Line-Height |
     * | --------- | ----------- |
     * | 14px      | 1.714285714 |
     */
    sm: css`
      ${getFontSizeAndLineHeight(14, 24)};
      ${fonts.book};

      sup {
        font-size: 8px;
      }
    `,

    /**
     * BODY LEGAL
     * | Font-Size | Line-Height |
     * | --------- | ----------- |
     * | 12px      | 1.666666667 |
     */
    legal: css`
      ${getFontSizeAndLineHeight(12, 20)};
      ${fonts.book};

      sup {
        font-size: 6px;
      }
    `,
  },
};

typeramps.body_bold = {};
Object.entries(typeramps.body).forEach(([size, style]) => {
  typeramps.body_bold[size] = css`
    ${style};
    ${fonts.black};
  `;
});
