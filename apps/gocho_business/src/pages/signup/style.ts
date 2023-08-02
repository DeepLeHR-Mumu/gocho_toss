import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  sectionContainer: css`
    max-width: 28.5rem;
    height: 41rem;
    background-color: ${NEWCOLORS.WHITE};
    margin: 6rem auto;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  titleContainer: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.75rem;
  `,

  closeIcon: css`
    position: absolute;
    right: 0;
    > svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  title: css`
    ${TEXTS.TITLE9};
  `,
};
