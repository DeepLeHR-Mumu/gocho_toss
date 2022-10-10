import { FunctionComponent, useState, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

import { dateConverter, dDayCalculator } from "shared-util/date";
import { JOBS_LIST_URL } from "shared-constant/internalURL";

import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { NoDataDesc } from "../common/component/noDataDesc";

import { ReceptInfoPartProps } from "./type";
import {
  applyButton,
  applyEndButton,
  beforeAfterDateBox,
  cutBox,
  desc,
  detailTitle,
  flexBox,
  goBackButton,
  infoBox,
  infoDetailBox,
  infoTitle,
  processBox,
  restPoint,
  wrapper,
} from "./style";

export const ReceptInfoPart: FunctionComponent<ReceptInfoPartProps> = ({ jobDetailData }) => {
  const [pageNumber, setPageNumber] = useState<number | undefined>(undefined);
  const [pageOrder, setPageOrder] = useState<"recent" | "popular" | "view" | "end" | undefined>(undefined);

  const {
    year: startYear,
    month: startMonth,
    date: startDate,
    hour: startHour,
    minute: startMinute,
  } = dateConverter(jobDetailData.startTime);

  const {
    year: endYear,
    month: endMonth,
    date: endDate,
    hour: endHour,
    minute: endMinute,
  } = dateConverter(jobDetailData.endTime);

  useEffect(() => {
    const sessionJdOrder = sessionStorage.getItem("jdPageOrder");
    const sessionJdNumber = sessionStorage.getItem("jdPageNumber");

    if (sessionJdOrder !== "undefined") {
      const beforePageOrder = JSON.parse(sessionJdOrder as string);
      setPageOrder(beforePageOrder);
    }

    if (sessionJdNumber !== "undefined") {
      const beforePageNumber = JSON.parse(sessionJdNumber as string);
      setPageNumber(beforePageNumber);
    }

    return () => {
      sessionStorage.removeItem("jdPageOrder");
      sessionStorage.removeItem("jdPageNumber");
    };
  }, [setPageNumber, setPageOrder]);

  const isDdayEnd = dDayCalculator(jobDetailData.endTime) === "만료";

  return (
    <div>
      <section css={wrapper}>
        <div css={infoBox}>
          <h4 css={infoTitle}>접수안내</h4>
          <ul css={beforeAfterDateBox}>
            <li>{`${startYear}. ${startMonth}. ${startDate}  ${startHour}:${startMinute}`}</li>
            <li>~</li>
            <li>{`${endYear}. ${endMonth}. ${endDate}  ${endHour}:${endMinute}`}</li>
          </ul>
          <DdayBox endTime={jobDetailData.endTime} />
          {jobDetailData.cut && <div css={cutBox}>채용시마감</div>}

          {isDdayEnd ? (
            <p css={applyEndButton}>지원하러가기</p>
          ) : (
            <a css={applyButton} target="_blank" href={jobDetailData.applyUrl} rel="noopener noreferrer">
              지원하러가기
            </a>
          )}
        </div>

        <div css={infoDetailBox}>
          <p css={detailTitle}>채용절차</p>
          <ul css={processBox}>
            {jobDetailData.processArr.map((process) => {
              return <li key={`채용절차_${process}`}>{process}</li>;
            })}
          </ul>

          <div css={flexBox}>
            <p css={detailTitle}>지원방법</p>
            <p css={desc}>
              {jobDetailData.applyRouteArr.map((route) => {
                return (
                  <span css={restPoint} key={`지원방법_${route}`}>
                    {route}
                  </span>
                );
              })}
            </p>
          </div>

          <div css={flexBox}>
            <p css={detailTitle}>기타사항</p>
            {jobDetailData.etcArr ? (
              <p css={desc}>
                {jobDetailData.etcArr.map((etc) => {
                  return (
                    <span css={restPoint} key={`기타사항_${etc}`}>
                      {etc}
                    </span>
                  );
                })}
              </p>
            ) : (
              <NoDataDesc />
            )}
          </div>
        </div>
      </section>
      <Link href={{ pathname: JOBS_LIST_URL, query: { page: pageNumber || 1, order: pageOrder || "recent" } }} passHref>
        <a css={goBackButton}>
          <BsChevronLeft /> 공고 리스트로 돌아가기
        </a>
      </Link>
    </div>
  );
};
