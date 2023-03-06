import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { dDayCalculator } from "shared-util";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { jdAdClickEvent } from "shared-ga/jd";
import { JOBS_DETAIL_URL } from "shared-constant";

import { SlideCardProps, SlideCardSkeleton } from "./type";
import {
  cardSkeleton,
  cardWrapper,
  companyLogoBox,
  companyLogoWrapper,
  slideInfo,
  endTime,
  companyName,
  jdTitle,
  buttonBox,
} from "./style";

export const JobAdCard: FunctionComponent<SlideCardProps | SlideCardSkeleton> = ({ jobData, isSkeleton }) => {
  if (isSkeleton || !jobData) {
    return (
      <div css={cardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  return (
    <Link href={`${JOBS_DETAIL_URL}/${jobData.jdId}`}>
      <button
        type="button"
        css={buttonBox}
        onClick={() => {
          jdAdClickEvent(jobData.id);
        }}
      >
        <div css={cardWrapper}>
          <div css={slideInfo(jobData?.color || "#2284a5")}>
            <div css={companyLogoWrapper}>
              <div css={companyLogoBox}>
                <Image fill src={jobData.companyLogo || defaultCompanyLogo} alt="" sizes="1" />
              </div>
            </div>
            <p css={endTime}>{dDayCalculator(jobData.jdEndTime)}</p>
            <p css={companyName}>{jobData.companyName}</p>
            <strong css={jdTitle}>{jobData.title}</strong>
          </div>
        </div>
      </button>
    </Link>
  );
};
