import { css } from "@emotion/react";
import { shorten } from "shared-style/common";

export const sectionContainer = css`
  margin: 0 2rem;
`;

export const tableContainer = css`
  width: 100%;
`;

export const jobContainer = css`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > th {
    font-size: 1.25rem;
  }
`;

export const jobIdBox = css`
  width: 10%;
  text-align: center;
`;

export const mainInfoBox = css`
  width: 30%;
  text-align: center;
  ${shorten()};
`;

export const taskContainer = css`
  width: 20%;
  display: flex;
  justify-content: center;
  ${shorten()};
`;

export const dateBox = css`
  width: 10%;
  text-align: center;
`;

export const buttonContainer = css`
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;