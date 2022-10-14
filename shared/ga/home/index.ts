import ReactGA from "react-ga4";

import { FUNNEL } from "../constant";

export const homeFunnelEvent = () => {
  const funnel = sessionStorage.getItem("funnel");
  if (funnel === FUNNEL.HOME) {
    return;
  }
  sessionStorage.setItem("funnel", FUNNEL.HOME);
  ReactGA.event("enter_home", { prev: funnel });
};

export const changeHomeJdListSortingEvent = (keyword: string) => {
  ReactGA.event("change_home_jd_order", { order: keyword });
};