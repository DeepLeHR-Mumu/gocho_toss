import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { useCompanyArr } from "shared-api/company";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { CompanyCardList } from "../../component/companyCardList";
import { COMPANY_RESULT_LIMIT } from "../../constant";
import { title } from "./style";

export const CompanyListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: companyDataArr, isLoading: isCompanyDataArrLoading } = useCompanyArr({
    q: router.query.q as string,
    order: "recent",
    limit: COMPANY_RESULT_LIMIT,
    offset: (Number(router.query.page) - 1) * COMPANY_RESULT_LIMIT,
  });

  const totalPage = Math.ceil((companyDataArr?.count || 0) / COMPANY_RESULT_LIMIT);

  return (
    <section>
      <p css={title}>기업 정보 🏢</p>
      <CompanyCardList companyDataArr={companyDataArr?.companyDataArr} isLoading={isCompanyDataArrLoading} />
      <BottomPagination totalPage={totalPage} linkObj={{ pathname: "/search", q: router.query.q as string }} />
    </section>
  );
};
