import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const wrapper = css`
  position: relative;
  padding: 3rem 2rem 3rem 3rem;
  width: 27.25rem;
  height: 32.5rem;
  border-radius: 0 1.5rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.GRAY100};
  min-width: 330px;
  margin-left: -1.5rem;
`;

export const imageContainer = css`
  width: 9rem;
  height: 1rem;
  position: relative;
`;

export const menuName = css`
  color: ${COLORS.BLUE_FIRST40};
  font-weight: bold;
  margin-bottom: 1.7rem;
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const inputCSS = css`
  background-color: ${COLORS.GRAY90};
  border: solid 1px ${COLORS.GRAY70};
  border-radius: 1.5rem;
  width: 12.5rem;
  height: 3rem;
  text-align: center;
`;

export const errorMsgContiner = css`
  height: 2rem;
`;

export const passwordErrorMsg = css`
  font-size: 0.8rem;
  color: ${COLORS.ERROR_RED40};
`;

export const submitButton = css`
  margin-top: 3.25rem;
`;