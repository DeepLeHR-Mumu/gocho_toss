import { FunctionComponent } from "react";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { SPEC_DETAIL_URL } from "shared-constant";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { LinkButton } from "shared-ui/common/atom/button";

import { SpecCardProps, SpecCardSkeleton } from "./type";
import {
  specCardSkeleton,
  cardWrapper,
  userInfoContainer,
  userInfoBox,
  nicknameCSS,
  genderCSS,
  bodyContainer,
  schoolInfo,
  schoolCSS,
  gradeCSSTitle,
  gradeCSS,
  maxGradeCSS,
  attendance,
  infoTitle,
  info,
  certi,
  certiLabel,
  certiNumber,
  buttonContainer,
} from "./style";

export const SpecCard: FunctionComponent<SpecCardProps | SpecCardSkeleton> = ({ specData, isSkeleton }) => {
  if (isSkeleton || typeof specData === "undefined") {
    return (
      <div css={specCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const schoolDept = specData.college === null ? specData.highschool.type : specData.college.department;
  const gradeType = specData.lastEducation === "초대졸" ? "평균 학점" : "내신 등급";
  const grade =
    specData.lastEducation === "초대졸" && specData.college !== null
      ? specData.college.grade
      : specData.highschool.naesin;
  const isCerti = specData.certificate !== null;

  return (
    <article css={cardWrapper}>
      <div css={userInfoContainer}>
        <ProfileImg imageStr={specData.uploader.image} size="S" />
        <div css={userInfoBox}>
          <p css={nicknameCSS}>{specData.uploader.nickname}</p>
          <p css={genderCSS}>
            {specData.gender} {specData.age}살
          </p>
        </div>
      </div>
      <div css={bodyContainer}>
        <div css={schoolInfo}>
          <p css={schoolCSS}>{specData.lastEducation}</p>
          <p css={schoolCSS}>{schoolDept}</p>
          <p css={gradeCSSTitle}>
            {gradeType}
            <span css={gradeCSS}>
              {grade}
              <span css={maxGradeCSS}>
                {specData.lastEducation === "초대졸" &&
                  specData.college !== null &&
                  `/${specData.college?.maxGrade.toFixed(1)}`}
              </span>
            </span>
          </p>
        </div>
        <ul css={attendance}>
          <li css={infoTitle}>
            무단 결석
            <span css={info}>
              {String(specData.highschool.absent).length >= 2
                ? `${String(specData.highschool.absent).slice(0, 1)}..`
                : specData.highschool.absent}
            </span>
          </li>
          <li css={infoTitle}>
            무단 조퇴
            <span css={info}>
              {String(specData.highschool.leaveEarly).length >= 2
                ? `${String(specData.highschool.leaveEarly).slice(0, 1)}..`
                : specData.highschool.leaveEarly}
            </span>
          </li>
          <li css={infoTitle}>
            무단 결과
            <span css={info}>
              {String(specData.highschool.classMiss).length >= 2
                ? `${String(specData.highschool.classMiss).slice(0, 1)}..`
                : specData.highschool.classMiss}
            </span>
          </li>
          <li css={infoTitle}>
            무단 지각
            <span css={info}>
              {String(specData.highschool.tardy).length >= 2
                ? `${String(specData.highschool.tardy).slice(0, 1)}..`
                : specData.highschool.tardy}
            </span>
          </li>
        </ul>
        <div css={certi}>
          {isCerti ? (
            <>
              <div css={certiLabel}>
                기능사
                {specData.certificate?.level1 !== undefined && specData.certificate?.level1 !== 0 && (
                  <span css={certiNumber}>{specData.certificate.level1}</span>
                )}
              </div>
              <div css={certiLabel}>
                산업기사
                {specData.certificate?.level2 !== undefined && specData.certificate?.level2 !== 0 && (
                  <span css={certiNumber}>{specData.certificate.level2}</span>
                )}
              </div>
              <div css={certiLabel}>
                기사+
                {specData.certificate?.level3 !== undefined && specData.certificate?.level3 !== 0 && (
                  <span css={certiNumber}>{specData.certificate.level3}</span>
                )}
              </div>
            </>
          ) : (
            <div css={certiLabel}>자격증 정보가 없습니다.</div>
          )}
        </div>
      </div>
      <div css={buttonContainer}>
        <LinkButton text="평가하기" variant="filled" linkTo={`${SPEC_DETAIL_URL}/${specData.id}`} />
      </div>
    </article>
  );
};
