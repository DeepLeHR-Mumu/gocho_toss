import { css } from "@emotion/react";

import { PC_HOVER } from "@style/mediaQuery";
import { COLORS } from "@style/constant";

export const subMenuButtonCSS = css`
  white-space: nowrap;
  color: ${COLORS.GRAY10};
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.5;

  > a {
    ${PC_HOVER} {
      :hover {
        color: ${COLORS.BLUE_FIRST40};
      }
    }
  }
`;