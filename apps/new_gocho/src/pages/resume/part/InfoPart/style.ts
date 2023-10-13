import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  editMsg: css`
    ${NEWTEXTS.TITLE6_M1418};
    color: ${COLOR.GRAY600};

    b {
      ${NEWTEXTS.UNDERLINE2_M1418};
      color: ${COLOR.BLUE300};
    }
  `,
};