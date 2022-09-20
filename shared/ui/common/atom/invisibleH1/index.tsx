import { FunctionComponent } from "react";

import { HeadingH1Props } from "./type";
import { titleCSS } from "./style";

export const HeadingH1: FunctionComponent<HeadingH1Props> = ({ title }) => {
  return <h1 css={titleCSS}>{title}</h1>;
};
