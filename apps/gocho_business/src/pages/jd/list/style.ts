import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  contentContainer: css`
    background-color: ${NEWCOLORS.WHITE};
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  spinner: css`
    position: relative;
    width: 100%;
    margin-top: 2rem;
    height: 9rem;
    background-color: #f6f7fa;
  `,

  noDataSectionContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
  `,

  noDataDesc: css`
    font-weight: 700;
  `,

  title: css`
    font-size: 1.75rem;
  `,

  filterBox: css`
    display: flex;
    margin-top: 2rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  filterOption: (isSelected: boolean) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 8.75rem;
    height: 3rem;
    font-weight: 700;
    color: ${isSelected ? `${NEWCOLORS.BLUE300}` : `${NEWCOLORS.BLUEGRAY400}`};
    border-bottom: ${isSelected ? `2px solid ${NEWCOLORS.BLUE300}` : "none"};

    > p {
      color: ${isSelected ? `${NEWCOLORS.BLUE300}` : `${NEWCOLORS.BLUEGRAY400}`};
    }
  `,

  filterCount: css`
    font-weight: 400;
    margin-left: 0.25rem;
  `,

  flexBox: css`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  searchWrapper: css`
    position: relative;
  `,

  searchBox: css`
    width: 30rem;
    height: 2.75rem;
    padding: 0.5rem 1rem 0.5rem 3.25rem;
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    color: ${NEWCOLORS.BLUEGRAY700};

    ::placeholder {
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  searchButton: css`
    position: absolute;
    top: 50%;
    left: 1.375rem;
    transform: translate(0, -50%);
    color: ${NEWCOLORS.BLUE300};

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,

  buttonArrContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  orderButtonContainer: css`
    position: relative;
  `,

  orderToggleButton: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 6.625rem;
    height: 2.5rem;
    font-size: 1rem;
    background-color: ${NEWCOLORS.WHITE};
    font-weight: 400;

    ::placeholder {
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  orderList: (isOpen: boolean) => css`
    display: ${isOpen ? "block" : "none"};
    position: absolute;
    top: 2.75rem;
    right: 0.25rem;
    width: 8rem;
    max-height: 20rem;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: ${NEWCOLORS.WHITE};
    z-index: 20;
    padding: 0.5rem 0;
    border: 1px solid ${NEWCOLORS.BLACK};
    border-radius: 1rem;
  `,

  orderOption: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 0.5rem 1rem;
    transition: 0.1s;

    :hover {
      background-color: ${NEWCOLORS.GRAY100};
    }
  `,
};
