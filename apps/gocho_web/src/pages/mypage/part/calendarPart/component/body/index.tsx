import { FunctionComponent } from "react";

import { useUserInfo } from "@api/auth";
import { useUserJobBookmarkArr } from "@api/bookmark/useUserJobBookmark";
import { dummyArrCreator } from "@util/dummyArrCreator";

import { SkeletonBox } from "@component/common/atom/skeletonBox";
import { Bookmark } from "../bookmark";

import { weekDayCreator, getDateHours } from "./util";
import { BodyProps } from "./type";
import {
  skeletonContainer,
  weekdayContainer,
  weekdayCSS,
  table,
  todayCSS,
  dayCSS,
} from "./style";

export const Body: FunctionComponent<BodyProps> = ({ twoWeek }) => {
  const { data: userInfoData } = useUserInfo();
  const todayHours = getDateHours(new Date());

  const {
    data: userJobBookmarkArrData,
    isError,
    isLoading,
  } = useUserJobBookmarkArr({
    userId: userInfoData?.id,
  });

  // LATER: 해당 날짜에 관련된 북마크만 처음부터 불러와라
  if (!userInfoData || !userJobBookmarkArrData || isError || isLoading) {
    return (
      <div css={skeletonContainer}>
        <SkeletonBox />
      </div>
    );
  }

  const bookmarkData = userJobBookmarkArrData.filter((jobBookmarkData) => {
    return twoWeek.some((day) => {
      return getDateHours(day.date) === getDateHours(jobBookmarkData.endTime);
    });
  });

  return (
    <>
      <ul css={weekdayContainer}>
        {dummyArrCreator(7).map((weekday) => {
          return (
            <li key={weekday}>
              <p css={weekdayCSS(weekday)}>{weekDayCreator(weekday)}</p>
            </li>
          );
        })}
      </ul>

      <ul css={table}>
        {twoWeek.map((day) => {
          const dayHours = getDateHours(day.date);
          const date = new Date(day.date).getDate();

          return (
            <li key={dayHours}>
              {todayHours === dayHours && (
                <p css={todayCSS}>
                  today
                  <span>{date}</span>
                </p>
              )}

              {todayHours !== dayHours && <p css={dayCSS}>{date}</p>}

              <Bookmark bookmarkData={bookmarkData} dayHours={dayHours} />
            </li>
          );
        })}
      </ul>
    </>
  );
};