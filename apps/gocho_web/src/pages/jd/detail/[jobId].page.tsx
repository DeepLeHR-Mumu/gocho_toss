import { NextPage, GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { getJobDetail, useJobDetail } from "shared-api/job";
import { useCompanyCommentArr } from "shared-api/company";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";

import { Layout } from "@component/layout";
import { DetailComment } from "@component/global/detailComment";
import { useUserInfo } from "shared-api/auth";
import { useAddJobViewCount } from "shared-api/viewCount";
import { jdDetailFunnelEvent } from "shared-ga/jd";

import { HeaderPart, DetailSupportPart, DetailWorkPart, DetailPreferencePart, ReceptInfoPart } from "./part";
import { PageHead } from "./pageHead";

import { wrapper, flexBox, container, containerSkeleton } from "./style";

const JobsDetail: NextPage = () => {
  const [currentPositionId, setCurrentPositionId] = useState<number>(0);

  const { data: userData } = useUserInfo();
  const { mutate: addViewCount } = useAddJobViewCount();

  const router = useRouter();
  const { jobId } = router.query;

  const { data: jobDetailData, isLoading } = useJobDetail({
    id: Number(jobId),
  });
  const { data: companyCommentDataArr } = useCompanyCommentArr({
    companyId: Number(jobDetailData?.company.companyId),
  });

  useEffect(() => {
    const jobViewStr = sessionStorage.getItem("jobViewArr");
    if (!jobDetailData) return;

    const isViewed = jobViewStr?.includes(String(jobDetailData?.id));
    if (isViewed) return;

    if (jobViewStr) {
      const jobViewArr: number[] = JSON.parse(jobViewStr);
      jobViewArr.push(jobDetailData.id);
      sessionStorage.setItem("jobViewArr", JSON.stringify(jobViewArr));
      addViewCount({ elemId: jobDetailData.id });
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("jobViewArr", JSON.stringify([jobDetailData.id]));
      addViewCount({ elemId: jobDetailData.id });
    }
  }, [jobDetailData, addViewCount]);

  useEffect(() => {
    if (jobDetailData) jdDetailFunnelEvent(jobDetailData.id);
  }, [jobDetailData]);

  if (!jobDetailData || isLoading || router.isFallback) {
    return (
      <main css={wrapper}>
        <Layout>
          <HeaderPart isSkeleton />
          <div css={flexBox}>
            <section css={containerSkeleton}>
              <SkeletonBox />
            </section>
            {companyCommentDataArr && (
              <DetailComment jdId={null} commentDataArr={companyCommentDataArr} userInfo={userData} />
            )}
          </div>
        </Layout>
      </main>
    );
  }

  return (
    <main css={wrapper}>
      <PageHead
        option={{
          id: jobDetailData.id,
          title: jobDetailData.title,
          companyName: jobDetailData.company.name,
          rotation: jobDetailData.positionArr[0].rotationArr[0],
          pay: jobDetailData.positionArr[0].payArr && jobDetailData.positionArr[0].payArr[0],
          place: jobDetailData.positionArr[0].place.addressArr && jobDetailData.positionArr[0].place.addressArr[0],
          possibleEdu: jobDetailData.positionArr[0].possibleEdu.summary,
          taskDetail: jobDetailData.positionArr[0].taskDetailArr[0],
        }}
      />
      <InvisibleH1 title={`[${jobDetailData.company.name}]${jobDetailData.title} - 고초대졸닷컴`} />

      <Layout>
        <InvisibleH2 title={jobDetailData.title} />
        <HeaderPart
          setCurrentPositionId={setCurrentPositionId}
          currentPositionId={currentPositionId}
          userId={userData?.id}
        />
        <div css={flexBox}>
          <section css={container}>
            <DetailSupportPart freshPosition={jobDetailData.positionArr[currentPositionId]} />
            <DetailWorkPart freshPosition={jobDetailData.positionArr[currentPositionId]} />
            <DetailPreferencePart freshPosition={jobDetailData.positionArr[currentPositionId]} />
          </section>
          {companyCommentDataArr && (
            <DetailComment jdId={jobDetailData.id} commentDataArr={companyCommentDataArr} userInfo={userData} />
          )}
        </div>
        <ReceptInfoPart jobDetailData={jobDetailData} />
      </Layout>
    </main>
  );
};

export default JobsDetail;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const queryClient = new QueryClient();

  if (Number.isNaN(Number(params?.jobId))) {
    return { notFound: true };
  }

  if (params) await queryClient.prefetchQuery(jobDetailKeyObj.detail({ id: Number(params.jobId) }), getJobDetail);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 600 : 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
