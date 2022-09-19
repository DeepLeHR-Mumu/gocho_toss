import { NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";

import { CompanyCommentPart } from "@pages/indexComponent/part/companyCommentPart";
import { getJobArr } from "shared-api/job/useJobArr";
import { getCompanyComment } from "shared-api/company/useCompanyCommentArr";
import { getCommunityPostingArr } from "shared-api/community/useCommunityPostingArr";
import { getTipArr } from "shared-api/tip";
import { getSpecArr } from "shared-api/spec";
import { specArrKeyObj } from "shared-constant/queryKeyFactory/spec/arrKeyObj";
import { companyCommentArrKeyObj } from "shared-constant/queryKeyFactory/company/commentArrKeyObj";
import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { tipArrKeyObj } from "shared-constant/queryKeyFactory/tip/arrKeyObj";
import { HeadingH1 } from "shared-ui/common/atom/invisibleH1";
import { JobPart } from "./indexComponent/part/jobPart";
import { CommunityPostingPart } from "./indexComponent/part/communityPostingPart";
import { TopBannerPart } from "./indexComponent/part/topBannerPart";
import { MainCarouselPart } from "./indexComponent/part/mainCarouselPart";
import { DataLabPart } from "./indexComponent/part/dataLabPart";
import { SpecBestPart } from "./indexComponent/part/specBestPart";
import { TipPart } from "./indexComponent/part/tipPart";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    jobArrKeyObj.jobArr({
      filter: "valid",
      order: "recent",
      limit: 9,
    }),
    getJobArr
  );
  await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 623 }), getCompanyComment);
  await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 87 }), getCompanyComment);
  await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 418 }), getCompanyComment);
  await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 585 }), getCompanyComment);
  await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 612 }), getCompanyComment);
  await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 334 }), getCompanyComment);

  await queryClient.prefetchQuery(communityPostingArrKeyObj.postingArr({ limit: 6 }), getCommunityPostingArr);

  await queryClient.prefetchQuery(tipArrKeyObj.tipArr({}), getTipArr);

  await queryClient.prefetchQuery(specArrKeyObj.list({ order: "-score", limit: 9 }), getSpecArr);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>고초대졸닷컴 - 생산/기능직 No.1 취업 플랫폼</title>
      </Head>
      <HeadingH1 title="고초대졸닷컴 - 생산/기능직 No.1 취업 플랫폼" />
      <TopBannerPart />
      <MainCarouselPart />
      <DataLabPart />
      <JobPart />
      <CompanyCommentPart />
      <TipPart />
      <CommunityPostingPart />
      <SpecBestPart />
    </main>
  );
};

export default Home;
