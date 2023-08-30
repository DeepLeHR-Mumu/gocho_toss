import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: (border: boolean) => {
    return css`
      display: flex;
      flex-direction: row;
      padding: 1.25rem 1.5rem;
      align-items: center;
      border-radius: 1rem;
      border: ${border ? `1px solid ${NEWCOLORS.GRAY200}` : "none"};

      ${MOBILE} {
        padding: 0.75rem 0;
      }
    `;
  },

  infoWrapper: css`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: 1rem;
    gap: 0.5rem;
  `,

  companyName: css`
    color: ${NEWCOLORS.BLACK};
    ${NEWTEXTS.TITLE12}

    ${MOBILE} {
      ${NEWTEXTS.TITLE9}
    }
  `,

  companyCategory: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE4}

    ${MOBILE} {
      ${NEWTEXTS.TITLE1}
    }
  `,
};
