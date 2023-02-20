import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  cardContainer: (isExpired: boolean) => css`
    margin-top: 2rem;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border: 1px solid ${COLORS.GRAY80};
    background-color: ${isExpired ? COLORS.GRAY90 : COLORS.GRAY100};
  `,

  topContainer: css`
    height: 6.5rem;
    display: flex;
    align-items: center;
    gap: 0 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${COLORS.GRAY80};
  `,

  titleBox: css`
    max-width: 50%;
    display: flex;
    align-items: flex-start;
    gap: 0 1.5rem;
  `,

  title: css`
    line-height: 1.2;
    width: 15rem;
    word-break: break-all;
    ${shorten(3)};
  `,

  date: css`
    display: block;
    width: fit-content;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${COLORS.GRAY35};
  `,

  bottomContainer: css`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    margin-top: 0.5rem;
  `,

  bottomInfoContainer: css`
    display: flex;
    gap: 0 1rem;
  `,

  infoBox: css`
    display: flex;
    align-items: center;
    gap: 0 0.375rem;
  `,

  infoIcon: css`
    font-size: 1.25rem;
    color: ${COLORS.GRAY65};
  `,

  infoTitle: css`
    font-weight: 400;
    color: ${COLORS.GRAY60};
  `,

  info: css`
    color: ${COLORS.GRAY40};
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 1rem;
  `,

  inactiveLabel: css`
    font-size: 0.875rem;
    height: 2.25rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY100};
    background-color: ${COLORS.GRAY65};
    border-radius: 50rem;
  `,
};