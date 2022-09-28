import { FunctionComponent, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { dateConverter } from "shared-util/date";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { container, titleCSS, button } from "./style";
import { HeaderProps, changeWeekDef } from "./type";

export const Header: FunctionComponent<HeaderProps> = ({ setCurrentDate, currentDate, setTwoWeek }) => {
  const { year, month } = dateConverter(currentDate.getTime());
  const title = `${year}년 ${month}월`;

  const changeWeek: changeWeekDef = (direction) => {
    if (direction === "prev") {
      return setCurrentDate(new Date(currentDate.getTime() - 86400000 * 14));
    }

    return setCurrentDate(new Date(currentDate.getTime() + 86400000 * 14));
  };

  useEffect(() => {
    const todayWeek = currentDate.getDay();

    const currentTwoWeek = dummyArrCreator(14).map((_, index) => {
      return {
        date: new Date(currentDate.getTime() + 86400000 * (index - todayWeek)),
      };
    });

    setTwoWeek(currentTwoWeek);
  }, [currentDate, setTwoWeek]);

  return (
    <div css={container}>
      <button
        type="button"
        css={button}
        onClick={() => {
          return changeWeek("prev");
        }}
        aria-label="2주 전 보기"
      >
        <BsChevronLeft />
      </button>
      <p css={titleCSS}>{title}</p>
      <button
        type="button"
        css={button}
        onClick={() => {
          return changeWeek("next");
        }}
        aria-label="2주 후 보기"
      >
        <BsChevronRight />
      </button>
    </div>
  );
};
