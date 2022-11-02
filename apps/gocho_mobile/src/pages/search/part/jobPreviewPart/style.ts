import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const listContainer = css`
  margin: 2rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

export const noDataText = css`
  width: 100%;
  color: ${COLORS.GRAY30};
  font-size: 0.875rem;
  text-align: center;
`;

export const buttonBox = css`
  display: flex;
  width: 100%;
  justify-content: center;
`;
