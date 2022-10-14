import { NextPage } from "next";
import Image from "next/image";

import { LinkButton } from "shared-ui/common/atom/button";
import smallMonoGochoLogo from "shared-image/global/deepLeLogo/smallMono.svg";

import jobiError from "@public/image/page/errorpage/500_jobi.png";

import { catchPhrase, errorMsgContainer, errorMsgWrapper, gochoLogoBox, jobiContainer, wrapper } from "./style";

const ErrorPage: NextPage = () => {
  return (
    <main css={wrapper}>
      <div css={errorMsgWrapper}>
        <div css={errorMsgContainer}>
          <h1>열심히 고치고 있습니다</h1>
        </div>
        <div css={catchPhrase}>
          <p>고장, 불편신고는 아래 메일로 부탁드려요 😢</p>
          <a href="mailto:help@deeplehr.com">help@deeplehr.com</a>
        </div>
        <LinkButton text="메인 페이지로 이동" variant="filled" linkTo="/" />
        <div css={gochoLogoBox}>
          <Image src={smallMonoGochoLogo} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div css={jobiContainer}>
        <div>
          <Image src={jobiError} layout="fill" objectFit="contain" />
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;