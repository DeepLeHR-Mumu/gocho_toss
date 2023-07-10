import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { NextPage } from "next";
import Link from "next/link";

import { AuthNav } from "@/components/global/authNav";
import { INTERNAL_URL } from "@/constants";

import { FindCompanyPart, IdPasswordPart } from "./part";
import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

const Signup: NextPage = () => {
  const [currentIndex, setCurrenIndex] = useState(1);
  const [maximumIndex, setMaximumIndex] = useState(1);

  const sliderRef = useRef<Slider>(null);

  const moveNextCard = (hash: string) => {
    window.location.hash = hash;
    sliderRef.current?.slickNext();
    setCurrenIndex((prev) => prev + 1);
  };

  // const movePrevCard = (hash: string) => {
  //   window.location.hash = hash;
  //   sliderRef.current?.slickPrev();
  //   setCurrenIndex((prev) => prev - 1);
  // };

  useEffect(() => {
    if (currentIndex > maximumIndex) {
      setMaximumIndex(currentIndex);
    }
  }, [currentIndex, maximumIndex]);

  return (
    <main>
      <AuthNav />
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.backIcon}>
            <FiArrowLeft />
          </Link>
          <p css={cssObj.title}>회원가입</p>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.closeIcon}>
            <FiX />
          </Link>
        </div>
        <div css={cssObj.asdf}>
          <Slider {...setCarouselSetting} ref={sliderRef}>
            <FindCompanyPart moveNextCard={moveNextCard} />
            <IdPasswordPart moveNextCard={moveNextCard} />
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Signup;
