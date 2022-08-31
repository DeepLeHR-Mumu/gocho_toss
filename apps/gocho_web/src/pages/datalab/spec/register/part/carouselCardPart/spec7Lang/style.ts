import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const animationSlide = css`
  animation: moveNextAnimation 0.6s forwards ease-in-out;
  @keyframes moveNextAnimation {
    0% {
      transform: translate(100%);
    }
    100% {
      transform: translate(0%);
    }
  }
`;

export const langContainer = css`
  width: 100%;
  max-width: 640px;

  > li {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;
    position: relative;
    flex-wrap: wrap;
  }
`;

export const removeButton = css`
  position: absolute;
  right: 2rem;
  top: 1rem;
  color: ${COLORS.GRAY60};
`;

export const errorBox = css`
  width: 100%;
`;

export const appendButton = css`
  width: 100%;
  max-width: 12.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 0.875rem;
  margin-top: 3rem;
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY60};
  border-radius: 2rem;
  color: ${COLORS.GRAY20};
`;