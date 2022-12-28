import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  cardContainer: css`
    padding: 2rem;
    margin: 2.5rem 0;
    background-color: ${COLORS.GRAY90};
    border-top: 1px solid ${COLORS.GRAY70};
    border-bottom: 1px solid ${COLORS.GRAY70};
  `,

  submitButton: css`
    height: 3rem;
    margin: 0 auto;
    width: 30%;
    background-color: ${COLORS.BLUE_FIRST40};
    border-radius: 0.5rem;
    color: ${COLORS.GRAY100};
  `,
};
