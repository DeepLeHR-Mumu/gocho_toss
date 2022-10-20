import { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

import { useMySpecHistory } from "shared-api/spec/useMySpecHistory";
import { useUserInfo } from "shared-api/auth";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { mySpecListFunnelEvent } from "shared-ga/spec";
import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";

import { Layout } from "@component/layout";
import { useModal } from "@recoil/hook/modal";

import { META_SPEC_MY } from "shared-constant/meta";
import { AsideMenu } from "../component/asideMenu";
import { SimpleCard } from "./component/simpleCard";
import { Pagination } from "./component/pagination";

import { flexBox, wrapper, container, tableHead, cardBox, noMySpecDesc, totalMySpecCSS } from "./style";

export const MySpecHistory: NextPage = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { setCurrentModal, closeModal, currentModal } = useModal();
  const activeCardCount = 5;

  const router = useRouter();

  const { data: userInfoData, error } = useUserInfo();
  const { data: mySpecHistoryData, isLoading } = useMySpecHistory({
    id: userInfoData?.id,
  });

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setCurrentModal("loginModal", { button: "home" });
    }
    if (currentModal?.activatedModal === "signUpModal") {
      setCurrentModal("signUpModal");
    }
    return () => {
      closeModal();
    };
  }, [error, closeModal, setCurrentModal, currentModal?.activatedModal]);

  useEffect(() => {
    setActiveCardIndex(null);
  }, [currentPage]);

  useEffect(() => {
    mySpecListFunnelEvent();
  }, []);

  if (!mySpecHistoryData || isLoading) {
    return (
      <div css={wrapper}>
        <Head>
          <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
        </Head>
        <MetaHead metaData={META_SPEC_MY} />
        <Layout>
          <section>
            <div css={flexBox}>
              <AsideMenu isFix={false} />

              <article css={container}>
                <ul css={tableHead}>
                  <li>날짜</li>
                  <li>평균 점수</li>
                  <li>총 평가 수</li>
                  <li>상세보기</li>
                </ul>
              </article>
            </div>
          </section>
        </Layout>
      </div>
    );
  }

  const totalPage = Math.ceil(mySpecHistoryData.specArr.length / activeCardCount);
  const firstArrIndex = (currentPage - 1) * activeCardCount;
  const lastArrIndex = currentPage * activeCardCount;
  const filterMySpecHistoryArr = mySpecHistoryData.specArr.slice(firstArrIndex, lastArrIndex);

  return (
    <main css={wrapper}>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <MetaHead metaData={META_SPEC_MY} />
      <Layout>
        <section>
          <div css={flexBox}>
            <AsideMenu isFix={false} />

            <article css={container}>
              <p css={totalMySpecCSS}>등록된 전체스펙 : {filterMySpecHistoryArr.length.toLocaleString("Ko-KR")}개</p>
              <ul css={tableHead}>
                <li>날짜</li>
                <li>평균 점수</li>
                <li>총 평가 수</li>
                <li>상세보기</li>
              </ul>
              <div css={cardBox}>
                {filterMySpecHistoryArr.length === 0 && (
                  <p css={noMySpecDesc}>스펙을 등록하고 평가받아보시겠어요? 🧐</p>
                )}
                {filterMySpecHistoryArr.map((mySpecData, index) => {
                  return (
                    <SimpleCard
                      key={`나의스펙내역${mySpecData.id}`}
                      index={index}
                      mySpecData={mySpecData}
                      evalCount={mySpecHistoryData.EvalCount}
                      currentActiveIndex={activeCardIndex}
                      setActiveCardIndex={setActiveCardIndex}
                    />
                  );
                })}
              </div>
              {filterMySpecHistoryArr.length > activeCardCount && (
                <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              )}
            </article>
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default MySpecHistory;
