import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { TABLET } from "shared-style/mediaQuery";

export const wrapper = css``;

export const flexText = css`
  display: flex;
  align-items: center;
`;

export const logoImageBox = css`
  max-width: 11.5rem;
  width: fit-content;
  height: 1.5rem;
  position: relative;
  margin: 0 auto 2.5rem;
`;

export const title = css`
  font-size: 1.375rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  position: relative;
  text-align: center;
  z-index: 0;
  width: fit-content;
  margin: 0 auto 3.8125rem;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
    bottom: -0.3125rem;
    width: 110%;
    height: 1rem;
    background-color: ${COLORS.BLUE_SECOND70};
    border-radius: 2rem;
  }
`;

export const isColorPoint = (isColor: boolean) => {
  return css`
    display: flex;
    align-items: center;
    color: ${isColor ? COLORS.GRAY10 : COLORS.GRAY60};
    margin-left: 0.5rem;
  `;
};

export const isPossibleEduIcon = css`
  width: 2rem;
  height: 2rem;
  display: inline-block;
`;

export const eduContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > li {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const isPossibleEduDesc = (isPossibleEdu: boolean) => {
  return css`
    color: ${isPossibleEdu ? COLORS.GRAY10 : COLORS.GRAY60};
  `;
};

export const eduImageBox = (isPossibleEdu: boolean) => {
  return css`
    width: 3.5rem;
    height: 3.5rem;
    margin-bottom: 0.5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: ${isPossibleEdu
      ? `url("/images/global/jdDetail/graduate_color.svg")`
      : `url("/images/global/jdDetail/graduate_gray.svg")`};

    ${TABLET} {
      width: 2.5rem;
      height: 2.5rem;
    }
  `;
};

export const containerSubTitle = css`
  padding-bottom: 1.5rem;
  color: ${COLORS.GRAY40};
  font-weight: 500;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
`;