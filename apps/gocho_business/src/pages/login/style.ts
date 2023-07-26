import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  mainContainer: css``,

  backgroundWrapper: css`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 110vw;
    min-height: 110vh;
    > img {
      object-fit: cover;
    }
  `,

  loginWrapper: css`
    position: absolute;
    top: 50%;
    right: 20%;
    transform: translate(50%, -50%);
    width: fit-content;
    background-color: ${NEWCOLORS.WHITE};
    margin: auto;
    padding: 3rem 1.5rem 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
    z-index: 30;
  `,

  logoBox: css`
    position: relative;
    width: 15rem;
    height: 2rem;
    margin: 0 auto 2rem;

    > img {
      object-fit: contain;
    }
  `,

  inputBox: css`
    position: relative;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXTS.TITLE7};
    color: ${NEWCOLORS.BLUEGRAY400};
    margin-bottom: 0.75rem;
  `,

  eyeButtonCSS: css`
    z-index: 10;
    font-size: 1.5rem;
    color: ${NEWCOLORS.GRAY200};
    position: absolute;
    top: 2.875rem;
    right: 1rem;
  `,

  errorMsg: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.RED300};
    height: 1rem;
    margin: 3rem 0;
    text-align: center;
  `,

  bottomBox: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  buttonContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,

  findButton: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  contour: css`
    :after {
      content: "|";
      color: ${NEWCOLORS.GRAY200};
    }
  `,

  buttonDivider: css`
    margin-top: 1.25rem;
  `,
};
