import { FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiYoutube, FiEye } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";

import { dateConverter } from "@util/date";
import { DdayBox } from "@component/common/atom/dDayBox";

import { HeaderProps } from "./type";
import {
  applyButton,
  bookmarkButton,
  ButtonCSS,
  youtubeButton,
  companyNameCSS,
  dateBox,
  dateCSS,
  headerCSS,
  imageBox,
  linksCSS,
  titleCSS,
  viewCSS,
} from "./style";

export const Header: FunctionComponent<HeaderProps> = ({ jobDetailData }) => {
  const [imageSrc, setImageSrc] = useState(
    jobDetailData.company.logoUrl as string
  );
  const {
    year: startYear,
    month: startMonth,
    date: startDate,
  } = dateConverter(jobDetailData.startTime);

  const {
    year: endYear,
    month: endMonth,
    date: endDate,
  } = dateConverter(jobDetailData.endTime);

  return (
    <header css={headerCSS}>
      <div css={imageBox}>
        <Image
          onError={() => {
            return setImageSrc(defaultCompanyLogo);
          }}
          src={imageSrc || jobDetailData.company.logoUrl}
          alt={jobDetailData.company.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <ul css={dateBox}>
          <li>
            <DdayBox endTime={jobDetailData.endTime} />
          </li>
          <li>
            <p css={dateCSS}>
              {`${startYear}. ${startMonth}. ${startDate} ~ ${endYear}. ${endMonth}. ${endDate}`}
            </p>
          </li>
        </ul>
        <p css={companyNameCSS}>
          {jobDetailData.company.name}
          <button type="button" css={bookmarkButton}>
            <BsFillBookmarkFill />
          </button>
        </p>
        <h2 css={titleCSS}>{jobDetailData.title}</h2>
        <ul css={linksCSS}>
          <li>
            <a
              href={jobDetailData.applyUrl}
              target="_blank"
              css={applyButton}
              rel="noopener noreferrer"
            >
              채용사이트
            </a>
          </li>
          <li>
            <button type="button" css={ButtonCSS}>
              <BsFillBookmarkFill />
              공고 북마크 {jobDetailData.bookmarkCount}
            </button>
          </li>
          <li>
            <Link
              href={`/companies/detail/${jobDetailData.company.companyId}`}
              passHref
            >
              <a css={ButtonCSS}>기업정보</a>
            </Link>
          </li>
          {jobDetailData.company.youtubeUrl && (
            <li>
              <a
                href={jobDetailData.company.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                css={youtubeButton}
              >
                <FiYoutube />
              </a>
            </li>
          )}
        </ul>
        <p css={viewCSS}>
          <FiEye /> {jobDetailData.viewCount.toLocaleString("ko-KR")}
        </p>
      </div>
    </header>
  );
};