import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  companyNameContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  companyTitle: css`
    font-size: 1.25rem;
    margin-right: 0.5rem;
  `,

  companyName: css`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${COLORS.BLUE_FIRST40};
  `,

  factoryCompareContainer: css`
    display: flex;
  `,

  factoryContainer: css`
    width: 50%;
    padding: 0.5rem;
  `,

  label: css`
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  `,

  buttonContainer: css`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin-top: 2rem;
  `,

  acceptButton: css`
    font-weight: 500;
    border: 2px solid ${COLORS.GRAY10};
    padding: 0.25rem 1rem;
    background-color: ${COLORS.BLUE_NEON40};
    color: ${COLORS.GRAY100};
  `,

  rejectForm: css`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  rejectReasonBox: css`
    font-family: Noto Sans KR, sans-serif;
    font-size: 16px;
    height: 5rem;
    width: 80%;
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    padding: 0.25rem 0.5rem;
    margin-bottom: 1rem;
  `,

  rejectButton: css`
    font-weight: 500;
    border: 2px solid ${COLORS.GRAY10};
    padding: 0.25rem 1rem;
    background-color: #b32100;
    color: ${COLORS.GRAY100};
  `,

  checkMessage: css`
    width: fit-content;
    margin: 1rem auto 0;
    color: ${COLORS.BLUE_NEON40};
    font-weight: 700;
  `,
};