import { FunctionComponent } from "react";

import { dateConverter, dDayCalculator } from "shared-util";

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
  dataBox,
  infoBox,
  infoDetailBox,
  infoTitle,
  isEveryDate,
  processBox,
  restPoint,
  wrapper,
} from "./style";

export const ReceptInfoPart: FunctionComponent<ReceptInfoPartProps> = ({ jobDetailData }) => {
  const { dateWithTime: jobStartDate } = dateConverter(jobDetailData.startTime);

  const { dateWithTime: jobEndDate, year: jobEndYear } = dateConverter(jobDetailData.endTime);

  const isDdayEnd = dDayCalculator(jobDetailData.endTime) === "만료";
  const isEveryJob = Boolean(jobEndYear === "9999");

  return (
    <div>
      <section css={wrapper}>
        <div css={infoBox}>
          <h4 css={infoTitle}>접수안내</h4>
          <ul css={beforeAfterDateBox}>
            {isEveryJob ? (
              <p css={isEveryDate}>상시채용입니다.</p>
            ) : (
              <>
                <li>{jobStartDate}</li>
                <li>~</li>
                <li>{jobEndDate}</li>
              </>
            )}
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
            <div css={dataBox}>
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
            <div css={dataBox}>
              <p css={detailTitle}>제출서류</p>
              <p css={desc}>
                {jobDetailData.applyDocumentArr.map((document) => {
                  return (
                    <span css={restPoint} key={`제출서류_${document}`}>
                      {document}
                    </span>
                  );
                })}
              </p>
            </div>
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
    </div>
  );
};
