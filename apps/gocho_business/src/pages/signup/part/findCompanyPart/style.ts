import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  formWrapper: css`
    height: 30.5rem;
  `,

  inputWrapper: css`
    position: relative;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXTS.TITLE7};
    color: ${NEWCOLORS.BLUEGRAY400};
    margin-bottom: 0.75rem;
  `,

  optionList: (isSearched: boolean) => css`
    position: absolute;
    top: 5.75rem;
    width: 25.5rem;
    display: ${isSearched ? "block" : "none"};
    background-color: ${NEWCOLORS.WHITE};
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
    max-height: 11.5rem;
    overflow-y: scroll;
    z-index: 50;
  `,

  option: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 2.5rem;
    padding: 0.75rem 1.5rem;
    transition: 0.1s;
    ${TEXTS.TITLE5};

    :hover {
      background-color: ${NEWCOLORS.GRAY100};
    }
  `,

  newCompanyButton: css`
    ${TEXTS.TITLE6};

    display: block;
    cursor: pointer;
    width: 100%;
    text-align: left;
    padding: 0.75rem 1.5rem;

    :hover {
      background-color: ${NEWCOLORS.GRAY100};
    }
  `,

  desc: css`
    ${TEXTS.TITLE3};
    margin-bottom: 0.75rem;
  `,

  buttonBox: css`
    display: flex;

    > svg {
      rotate: 45deg;
      font-weight: 700;
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.5rem;
    }
  `,

  point: css`
    color: ${NEWCOLORS.BLUE300};
    margin-left: 0.25rem;
  `,

  businessNumberInput: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    color: ${NEWCOLORS.GRAY300};
  `,
};