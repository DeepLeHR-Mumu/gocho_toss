import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { dummyArrCreator } from "shared-util";
import { Divider } from "shared-ui/deeple-ds";

import { useJdArr } from "@/apis/jd";

import { cssObj } from "./style";
import { setCarouselSetting } from "./util";

export const JdPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: jdDataArr } = useJdArr({
    order: "rand",
    filter: "valid",
    page: 1,
    size: 12,
  });

  if (!jdDataArr) {
    return (
      <section css={cssObj.sectionContainer}>
        <h2 css={cssObj.title}>
          오늘의 <span css={cssObj.colorPoint}>HOT</span> 공고
        </h2>
        <Slider {...setCarouselSetting} ref={sliderRef}>
          {dummyArrCreator(3).map((dummy) => {
            return <p key={`mainJobCard${dummy}`}>{dummy}</p>;
          })}
        </Slider>
      </section>
    );
  }

  return (
    <>
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <h2 css={cssObj.title}>
            오늘의 <span css={cssObj.colorPoint}>HOT</span> 공고
          </h2>
          <div css={cssObj.buttonContainer}>
            <button
              aria-label="이전 추천공고보기"
              type="button"
              onClick={() => {
                return sliderRef.current?.slickPrev();
              }}
            >
              <FiChevronLeft />
            </button>
            <button
              aria-label="이전 추천공고보기"
              type="button"
              onClick={() => {
                return sliderRef.current?.slickNext();
              }}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <Slider {...setCarouselSetting} ref={sliderRef}>
          {jdDataArr?.jdDataArr.map((jd) => {
            return <p key={jd.id}>{jd.title}</p>;
          })}
        </Slider>
      </section>
      <Divider />
    </>
  );
};
