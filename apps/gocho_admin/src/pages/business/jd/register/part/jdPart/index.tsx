import { FunctionComponent } from "react";

import { dateConverter } from "shared-util";

import { JdPartProps } from "./type";
import { cssObj } from "./style";

export const JdPart: FunctionComponent<JdPartProps> = ({ jd }) => {
  const { date: startDate } = dateConverter(jd.startTime);
  const { date: endDate } = dateConverter(jd.endTime);

  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>제목</strong>
        <p css={cssObj.dataBox}>{jd.title}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>게시 기간</strong>
        <div>
          <p css={cssObj.dataBox}>
            {startDate} ~ {endDate}
          </p>
          {!jd.cut && <p css={cssObj.dataBox}>상시공고</p>}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>채용 절차</strong>
        <div>
          {jd.processArr.map((process) => (
            <p key={`ProcessArr${process}`} css={cssObj.dataBox}>
              {process}
            </p>
          ))}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>지원 방법</strong>
        <div>
          {jd.applyRouteArr.map((applyRoute) => (
            <p key={`ApplyRouteArr${applyRoute}`} css={cssObj.dataBox}>
              {applyRoute}
            </p>
          ))}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>지원 링크</strong>
        <p css={cssObj.dataBox}>{jd.applyUrl}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>기타 사항</strong>
        <div>
          {jd.etcArr?.map((etc) => (
            <p key={`EtcArr${etc}`} css={cssObj.dataBox}>
              {etc}
            </p>
          ))}
        </div>
      </div>
      {jd.positionArr.map((position) => (
        <div key={`Position${position.id}`} css={cssObj.positionContainer}>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>직무 ID</strong>
            <p css={cssObj.dataBox}>{position.id}</p>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>학력 조건</strong>
            <div>
              <p css={cssObj.dataBox}>{position.eduSummary.middle && "중졸"}</p>
              <p css={cssObj.dataBox}>{position.eduSummary.high && "고졸"}</p>
              <p css={cssObj.dataBox}>{position.eduSummary.college && "초대졸"}</p>
              <p css={cssObj.dataBox}>{position.eduSummary.four && "대졸"}</p>
            </div>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>경력 조건</strong>
            <p css={cssObj.dataBox}>{position.requiredExp.type}</p>
            {position.requiredExp.type === "경력" ||
              (position.requiredExp.type === "신입/경력" && (
                <p css={cssObj.dataBox}>
                  {position.requiredExp.minYear}이상 {position.requiredExp.maxYear} 이하
                </p>
              ))}
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>기타 조건</strong>
            <div>
              {position.requiredEtcArr?.map((etc) => (
                <p key={`RequiredEtcArr${etc}`} css={cssObj.dataBox}>
                  {etc}
                </p>
              ))}
            </div>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>계약 형태</strong>
            <div>
              <p css={cssObj.dataBox}>{position.contractType.type}</p>
              {position.contractType.conversionRate && (
                <p css={cssObj.dataBox}>전환율 {position.contractType.conversionRate}</p>
              )}
            </div>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>채용 직무</strong>
            <div>
              <p css={cssObj.dataBox}>1차 직무:&nbsp;{position.task.mainTask}</p>
              <p css={cssObj.dataBox}>
                2차 직무:&nbsp;
                {position.task.subTaskArr?.map((subTask) => subTask)}
              </p>
            </div>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>세부 직무 내용</strong>
            <div>
              {position.taskDetailArr?.map((taskDetail) => (
                <p key={`TaskDetailArr${taskDetail}`} css={cssObj.dataBox}>
                  {taskDetail}
                </p>
              ))}
            </div>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>교대 형태</strong>
            <div>
              {position.rotationArr?.map((rotation) => (
                <p key={`RotationArr${rotation}`} css={cssObj.dataBox}>
                  {rotation}
                </p>
              ))}
            </div>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>근무지 형태</strong>
            <p css={cssObj.dataBox}>{position.place.type}</p>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>근무지</strong>
            {position.place.type !== "일반" && <p css={cssObj.dataBox}>{position.place.etc}</p>}
            {position.place.type === "일반" && (
              <>
                <div css={cssObj.placeContainer}>
                  <p>일반 근무지:</p>
                  {position.place.addressArr?.map((address) => (
                    <p key={`AddressArr${address}`} css={cssObj.placeBox}>
                      {address}
                    </p>
                  ))}
                </div>
                <div css={cssObj.placeContainer}>
                  <p>공장 근무지:</p>
                  {position.place.factoryArr?.map((factory) => (
                    <p key={`FactoryArr${factory}`} css={cssObj.placeBox}>
                      {factory.factoryName}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>명수</strong>
            <p css={cssObj.dataBox}>{position.hireCount}</p>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>급여</strong>
            <div>
              {position.payArr?.map((pay) => (
                <p key={`PayArr${pay}`} css={cssObj.dataBox}>
                  {pay}
                </p>
              ))}
            </div>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>우대 자격증</strong>
            <div>
              {position.preferredCertiArr?.map((certi) => (
                <p key={`PreferredCertiArr${certi}`} css={cssObj.dataBox}>
                  {certi}
                </p>
              ))}
            </div>
          </div>
          <div css={cssObj.dataContainer}>
            <strong css={cssObj.dataTitle}>기타 우대사항</strong>
            <div>
              {position.preferredEtcArr?.map((etc) => (
                <p key={`PreferredEtcArr${etc}`} css={cssObj.dataBox}>
                  {etc}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
