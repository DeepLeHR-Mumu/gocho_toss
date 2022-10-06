import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

// detail 공용 스타일

export const container = css`
  margin-bottom: 3rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const containerTitle = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

export const flexBox = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  > div {
    width: 49%;
  }
`;

export const flexBetweenBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const subTitle = css`
  background-color: ${COLORS.GRAY90};
  border-radius: 0.5rem;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  font-weight: 400;
  min-width: 5.5rem;
  padding: 0.5rem 0;
  box-sizing: border-box;
  margin-right: 1rem;
`;

export const desc = css`
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  line-height: 1.4;
  font-weight: 400;
  word-break: keep-all;
`;

export const restPoint = css`
  line-height: 1.8;
  word-break: keep-all;
  display: inline-block;
  ::after {
    content: ", ";
  }

  :last-of-type {
    ::after {
      content: "";
    }
  }
`;
