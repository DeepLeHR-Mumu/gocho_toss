import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";
import { TEMP } from "shared-style/mediaQuery";
import { shorten } from "shared-style/common";

export const cssObj = {
  cardWrapper: (isButtonExist: boolean) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${isButtonExist ? "15.75rem" : "10.5rem"};
    height: ${isButtonExist ? "20rem" : "13.75rem"};
    padding: ${isButtonExist ? "2rem 1.5rem" : "1.5625rem 1.125rem"};
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};
    flex-shrink: 0;

    ${TEMP} {
      width: ${isButtonExist ? "8.75rem" : "7.5rem"};
      height: ${isButtonExist ? "12.75rem" : "9rem"};
      padding: ${isButtonExist ? "1.25rem 1rem" : "1.25rem 1.5rem 1.25rem 1.4375rem"};
    }
  `,

  linkBox: css``,

  name: (isButtonExist: boolean) => css`
    text-align: center;
    width: ${isButtonExist ? "13rem" : "10.5rem"};
    ${shorten()};

    margin-top: 1rem;
    margin-bottom: 0.5rem;
    ${isButtonExist ? NEWTEXTS.TITLE2_B2428 : NEWTEXTS.TITLE4_B1822}

    ${TEMP} {
      margin-top: 0.875rem;
      margin-bottom: 0;
      ${isButtonExist ? NEWTEXTS.TITLE6_B1418 : NEWTEXTS.TITLE6_M1418}
    }
  `,

  hashTags: (isButtonExist: boolean) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    word-wrap: break-word;
    word-break: break-all;
    color: ${COLOR.GRAY600};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${NEWTEXTS.TITLE5_M1620}

    ${TEMP} {
      ${NEWTEXTS.TITLE7_M1218}
      ${isButtonExist ? "" : "display: none;"}
    }
  `,

  cursorPointer: css`
    cursor: pointer;
  `,
};
