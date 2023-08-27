import { ReactNode, HTMLAttributes } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
