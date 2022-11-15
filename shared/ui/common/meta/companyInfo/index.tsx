import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { defaultKeyword } from "shared-constant/meta";

import { CompanyInfoMetaProps } from "./type";

export const CompanyInfoMeta: FunctionComponent<CompanyInfoMetaProps> = ({ option }) => {
  const title = `${option.companyName} > 기업/공장 정보 - 고초대졸닷컴`;
  const desc = `${option.companyName} 생산직의 연봉/복지 정보, 노조정보, 공장별 통근버스/기숙사에 대한 자세한 정보를 한눈에 확인해보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴.`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta
        name="keywords"
        content={`${option.companyName},공장,채용,연봉,복지,통근버스,노조,기숙사,${defaultKeyword}`}
      />
      <meta property="og:title" content={`[${option.companyName}] 기업/공장 정보 - 고초대졸닷컴`} />
      <meta
        property="og:description"
        content={`${option.companyName} 생산직의 연봉/복지 정보, 노조정보, 공장별 통근버스/기숙사에 대한 자세한 정보를 한눈에 확인해보세요!`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://고초대졸.com/company/${option.id}/info`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 기업정보" />
      <meta property="og:image" content={`${CDN_URL}og_image/company.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/company.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
    </Head>
  );
};
