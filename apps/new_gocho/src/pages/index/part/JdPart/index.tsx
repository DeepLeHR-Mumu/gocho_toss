import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { dummyArrCreator } from "shared-util";
import { Divider } from "shared-ui/deeple-ds";

import { useJdArr } from "@/apis/jd";
import { JdCard } from "@/components/common/JdCard";

import { useGetDeviceType } from "@/globalStates";
import { cssObj } from "./style";
import { setCarouselSetting } from "./util";

export const JdPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { isMobile } = useGetDeviceType();
  const { data: jdDataObj } = useJdArr({
    order: "rand",
    filter: "valid",
    page: 1,
    size: 12,
  });

  return (
    <>
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <h2 css={cssObj.title}>
            오늘의 <span css={cssObj.colorPoint}>HOT</span> 공고
          </h2>
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
        <div css={cssObj.sliderContainer}>
          {isMobile ? (
            <div css={cssObj.cardContainer}>
              {jdDataObj
                ? jdDataObj.jdDataArr.map((jd) => <JdCard key={jd.id} jd={jd} />)
                : dummyArrCreator(4).map((dummy) => <JdCard key={`mainJobCard${dummy}`} />)}
            </div>
          ) : (
            <Slider {...setCarouselSetting} ref={sliderRef}>
              {jdDataObj
                ? jdDataObj.jdDataArr.map((jd) => <JdCard key={jd.id} jd={jd} />)
                : dummyArrCreator(4).map((dummy) => <JdCard key={`mainJobCard${dummy}`} />)}
            </Slider>
          )}
        </div>
      </section>
      <Divider />
    </>
  );
};