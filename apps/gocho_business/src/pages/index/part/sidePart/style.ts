import { css } from "@emotion/react";

import { TEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  companyContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  companyLogo: css`
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 1rem;
    border-radius: 50%;

    > img {
      object-fit: contain;
    }
  `,

  companyName: css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${TEXTS.TITLE11};

    > svg {
      color: ${NEWCOLORS.GRAY300};
      font-size: 1.75rem;
    }
  `,

  infoContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    margin-bottom: 0.5rem;

    :last-of-type {
      margin-bottom: 0;
    }

    > svg {
      color: ${NEWCOLORS.BLUEGRAY400};
    }
  `,

  infoTitle: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};
    flex-grow: 1;
  `,

  info: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  companyAuthButton: css`
    display: block;
    cursor: pointer;
    width: fit-content;
    margin: 1.25rem auto 0;
    padding: 0.75rem 1rem;
    border-radius: 1.5rem;
    background-color: ${NEWCOLORS.BLUE100};
    color: ${NEWCOLORS.BLUE300};
  `,

  jdCountContainer: css`
    display: flex;
    justify-content: center;
    gap: 0 1.25rem;
  `,

  jdCountWrapper: css`
    padding: 1rem 0;
    width: 6.5rem;
    text-align: center;
  `,

  countInfo: css`
    ${TEXTS.TITLE6};
    margin-bottom: 1rem;
  `,

  countNumber: (isAuth: boolean) => css`
    ${TEXTS.TITLE10};
    color: ${isAuth ? NEWCOLORS.BLACK : NEWCOLORS.BLUEGRAY200};
  `,

  contour: css`
    margin: 1rem 0;
    border-left: 1px solid ${NEWCOLORS.GRAY200};
  `,
};