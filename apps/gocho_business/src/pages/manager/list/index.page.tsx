import { useEffect } from "react";
import { NextPage } from "next";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";

import { PageLayout } from "@/components";
import { useCompanyDetail, useManagerArr, useManagerProfile } from "@/apis";
import { managerListPageFunnelEvent } from "@/ga";

import { CompanySideNav } from "@/components/global/companySideNav";
import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const ManagerListPage: NextPage = () => {
  const { data: userInfoData } = useManagerProfile();
  const { data: companyData } = useCompanyDetail({ companyId: userInfoData?.company.id });
  const { data: managerDataArr } = useManagerArr({ companyId: userInfoData?.company.id });
  dayjs.locale("ko");

  useEffect(() => {
    managerListPageFunnelEvent();
  }, []);

  if (!managerDataArr || !companyData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <PageHead />
      <PageLayout>
        <div css={cssObj.contentWrapper}>
          <CompanySideNav />
          <div css={cssObj.partContainer}>
            <h2 css={cssObj.pageTitle}>기업 계정 목록</h2>
            <div css={cssObj.companyInfoContainer}>
              <p css={cssObj.companyName}>{companyData.name}</p>
              <p css={cssObj.businessNumber}>
                사업자 번호<span>{companyData.businessNumber}</span>
              </p>
            </div>
            <div css={cssObj.tableWrapper}>
              <div css={cssObj.tableHeader}>
                <strong css={cssObj.header(false)}>이름</strong>
                <strong css={cssObj.header(false)}>부서</strong>
                <strong css={cssObj.header(false)}>아이디(이메일)</strong>
                <strong css={cssObj.header(true)}>가입일자</strong>
              </div>
              <ul>
                {managerDataArr.map((managerData) => (
                  <li key={managerData.email} css={cssObj.rowContainer}>
                    <p css={cssObj.data(false)}>{managerData.name}</p>
                    <p css={cssObj.data(false)}>{managerData.department}</p>
                    <p css={cssObj.data(false)}>{managerData.email}</p>
                    <p css={cssObj.data(true)}>{dayjs(managerData.createdTime).format("YYYY-MM-DD ")}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ManagerListPage;
