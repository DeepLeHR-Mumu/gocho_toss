import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

import { useFactoryArr } from "@api/factory/useFactoryArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { BUSINESS_FACTORY_LIST_URL } from "@constant/internalURL";
import { mainContainer, pageTitle } from "@style/commonStyles";

import FactoryCard from "./component/factoryCard";
import { FACTORY_SEARCH_LIMIT } from "./constant";

import { cssObj } from "./style";

const BusinessFactoryList: NextPage = () => {
  const [factoryStatus, setFactoryStatus] = useState<"upload-waiting" | "modify-waiting">("upload-waiting");
  const router = useRouter();

  const {
    data: factoryDataObj,
    isLoading,
    isError,
  } = useFactoryArr({
    status: factoryStatus,
    limit: FACTORY_SEARCH_LIMIT,
    offset: (Number(router.query.page) - 1) * FACTORY_SEARCH_LIMIT,
  });

  if (!factoryDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const changeFactoryStatusHandler = () => {
    setFactoryStatus((prev) => {
      return prev === "upload-waiting" ? "modify-waiting" : "upload-waiting";
    });
  };

  const totalPage = Math.ceil(factoryDataObj.count / FACTORY_SEARCH_LIMIT);

  return (
    <main css={mainContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={pageTitle}>{factoryStatus === "upload-waiting" ? "공장 등록 요청 목록" : "공장 수정 요청 목록"}</h2>
        <button
          type="button"
          css={cssObj.listChangeButton}
          onClick={() => {
            changeFactoryStatusHandler();
          }}
        >
          {factoryStatus === "upload-waiting" ? "수정 요청 목록 보기" : "등록 요청 목록 보기"}
        </button>
      </div>
      <section css={cssObj.sectionContainer}>
        <table css={cssObj.tableContainer}>
          <thead>
            <tr css={cssObj.factoryContainer}>
              <th css={cssObj.factoryIdBox}>공장 ID</th>
              <th css={cssObj.companyNameBox}>회사</th>
              <th css={cssObj.factoryNameBox}>공장 이름</th>
              <th css={cssObj.buttonContainer}> </th>
            </tr>
          </thead>
          <tbody>
            {factoryDataObj.factoryDataArr.map((factory) => {
              return <FactoryCard factory={factory} key={`ManagerBizFactoryCard${factory.id}`} />;
            })}
          </tbody>
        </table>
      </section>
      <BottomPagination totalPage={totalPage} url={BUSINESS_FACTORY_LIST_URL} />
    </main>
  );
};

export default BusinessFactoryList;
