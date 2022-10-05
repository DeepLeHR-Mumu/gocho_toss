import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const mainContainer = css`
  flex-grow: 1;
  padding: 1.5rem;
  height: 100vh;
`;

export const title = css`
  font-weight: 700;
  font-size: 1.75rem;
  color: ${COLORS.GRAY10};
  margin-bottom: 2rem;
`;
