import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const partContainer = css`
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${COLORS.GRAY90};
  margin-top: -1.5rem;
  padding: 1.5rem 0 3rem;
  z-index: 10;
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const title = css`
  font-size: 1rem;
  display: block;
  font-weight: 700;
  color: ${COLORS.GRAY10};
`;

export const filterButton = css`
  font-size: 0.875rem;
  font-weight: 400;
  width: fit-content;
  border: 1px solid ${COLORS.GRAY70};
  border-radius: 1.5rem;
  padding: 0 1.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.GRAY10};

  > svg {
    color: ${COLORS.GRAY70};
    font-size: 1.25rem;
  }
`;

export const searchWrapper = css`
  position: relative;
  margin-bottom: 1rem;
`;

export const searchBox = css`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 3rem 0.25rem 1.5rem;
  border-radius: 2rem;
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY80};
  color: ${COLORS.GRAY10};

  ::placeholder {
    color: #b2b2b2;
  }
`;

export const searchButton = css`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
  width: 1.25rem;
  font-size: 2rem;
`;

export const buttonArrContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const setJobOrderButton = (active = false) => {
  return css`
    font-size: 0.75rem;
    width: fit-content;
    text-align: center;
    white-space: nowrap;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY100}`};
    margin-right: 0.5rem;
    padding: 0 0.75rem;
    transition: all 0.2s ease;

    :last-of-type {
      margin-right: 0;
    }
  `;
};

export const noArrDesc = css`
  color: ${COLORS.GRAY60};
  font-size: 1rem;
  font-weight: 500;
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
