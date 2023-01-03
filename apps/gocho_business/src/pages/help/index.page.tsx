import { ReactElement } from "react";
import Image from "next/image";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { GlobalLayout, Footer } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

import chatIcon from "@/public/image/help/chat.svg";

import { cssObj } from "./style";

const HelpPage: NextPageWithLayout = () => (
  <main css={cssObj.wrapper}>
    <h2 css={cssObj.title}>고객센터</h2>
    <p css={cssObj.desc}>
      페이지 오른쪽 하단의 채널톡에서
      <br />
      담당자가 기다립니다
    </p>
    <strong css={cssObj.strongDesc}>무엇이든 문의해주세요!</strong>
    <div css={cssObj.chatIconBox}>
      <Image src={chatIcon} alt="" layout="fill" objectFit="contain" />
    </div>
  </main>
);

HelpPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
    <Footer />
  </GlobalLayout>
);

export default HelpPage;
