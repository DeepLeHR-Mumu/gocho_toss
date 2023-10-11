import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const cssObj = {
  label: (isFocus: boolean) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    box-sizing: border-box;
    padding: 0 3px;
    height: 1.875rem;
    width: fit-content;
    border: 0.13rem solid ${isFocus ? COLOR.BLUE300 : "transparent"};
    border-radius: 0.3125rem;
  `,
  input: css`
    width: 0;
    height: 0;
    margin: 0;

    :checked ~ div {
      background-color: ${COLOR.BLUE300};
      border: 0;
      > svg {
        color: ${COLOR.WHITE};
        display: block;
      }
    }
  `,
  checkBox: (isDisabled: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid ${COLOR.GRAY400};
    background-color: ${isDisabled ? COLOR.GRAY50 : COLOR.WHITE};
    border-radius: 5px;
    margin-right: 0.5rem;

    > svg {
      display: none;
    }
  `,
  desc: css`
    font-size: 0.875rem;
    font-weight: 400;
    color: ${COLOR.GRAY900};
  `,
};
