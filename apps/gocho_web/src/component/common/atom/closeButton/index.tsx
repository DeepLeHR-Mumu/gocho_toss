import { FunctionComponent } from "react";
import Link from "next/link";
import { FiX, FiHome } from "react-icons/fi";

import { MAIN_URL } from "@constant/internalURL";

import { closeButtonWrapper } from "./style";
import { ButtonProps } from "./type";

export const CloseButton: FunctionComponent<ButtonProps> = ({
  size,
  buttonClick,
  isHome,
}) => {
  if (isHome) {
    return (
      <a>
        <Link href={MAIN_URL} passHref>
          <a css={closeButtonWrapper(size)}>
            <FiHome />
          </a>
        </Link>
      </a>
    );
  }
  return (
    <button type="button" onClick={buttonClick} css={closeButtonWrapper(size)}>
      <FiX />
    </button>
  );
};