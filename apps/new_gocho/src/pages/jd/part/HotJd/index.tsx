import { FunctionComponent, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import jobiChatting from "shared-image/global/jobi/chatting.png";
import { dummyArrCreator } from "shared-util";

import { useTopBannerArr } from "@/apis/ads";
import { JdCard } from "@/components/common/JdCard";
import { useGetDeviceType } from "@/globalStates";
import { INTERNAL_URL } from "@/pages/constants";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

export const HotJd: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { isMobile } = useGetDeviceType();
  const { data: jdDataObj } = useTopBannerArr();

  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={cssObj.title}>지금 HOT한 공고 🔥</h2>
        <div css={cssObj.buttonContainer}>
          <button
            css={cssObj.sliderButton}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <FiChevronLeft />
          </button>
          <button
            css={cssObj.sliderButton}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div css={cssObj.contentContainer}>
        <Link href={`${INTERNAL_URL.JD_LIST}/?page=1&order=recent`} css={cssObj.nowJdBanner}>
          <p css={cssObj.bannerTitle}>
            지금
            <br />
            채용중
            <br />
            공고
            <br />
          </p>
          <div css={cssObj.nowLink}>바로가기 {">"}</div>
          <div css={cssObj.imageWrapper}>
            <Image src={jobiChatting} alt="채용중 공고" fill />
          </div>
        </Link>
        {isMobile ? (
          <div css={cssObj.cardContainer}>
            {jdDataObj
              ? jdDataObj.bannerDataArr.map((banner) => (
                  <JdCard key={banner.id} jd={{ ...banner.jd, placeArr: [""] }} ad />
                ))
              : dummyArrCreator(3).map((dummy) => <JdCard key={`hotJd${dummy}`} />)}
          </div>
        ) : (
          <Slider {...setCarouselSetting} ref={sliderRef}>
            {jdDataObj
              ? jdDataObj.bannerDataArr.map((banner) => (
                  <JdCard key={banner.id} jd={{ ...banner.jd, placeArr: [""] }} ad />
                ))
              : dummyArrCreator(3).map((dummy) => <JdCard key={`hotJd${dummy}`} />)}
          </Slider>
        )}
      </div>
    </section>
  );
};
