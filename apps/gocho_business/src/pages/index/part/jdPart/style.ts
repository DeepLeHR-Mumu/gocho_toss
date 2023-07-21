import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  partTitle: (isAuth: boolean) => css`
    display: block;
    cursor: pointer;
    ${TEXTS.TITLE11};
    color: ${isAuth ? NEWCOLORS.BLACK : NEWCOLORS.BLUEGRAY400};
    margin-bottom: 1.25rem;
  `,

  contour: css`
    width: 100%;
    margin: 0 -0.5rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  cardContainer: css`
    min-height: 30rem;
  `,

  noAuthJdCard: css`
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.BLUEGRAY400};
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};