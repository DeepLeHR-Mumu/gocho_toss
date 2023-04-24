import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";

import { useCompanyArr } from "shared-api/company";
import { dummyArrCreator } from "shared-util";
import { NormalButton } from "shared-ui/common/atom/button";
import { COLORS } from "shared-style/color";

import { CompanyCard } from "@component/common/molecule/companyCard";
import { COMPANY_PREVIEW_RESULT_LIMIT } from "@pages/search/constant";
import { listContainer, noDataText, buttonBox } from "./style";

export const CompanyPreviewPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: companyDataObj, isLoading: isCompanyDataArrLoading } = useCompanyArr({
    q: router.query.q as string,
    order: "view",
    size: COMPANY_PREVIEW_RESULT_LIMIT,
  });

  if (!companyDataObj || isCompanyDataArrLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(COMPANY_PREVIEW_RESULT_LIMIT).map((dummy) => {
          return <CompanyCard isSkeleton key={`UnifiedSearchCompanyCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (companyDataObj.pageResult.totalElements === 0) {
    return (
      <div css={listContainer}>
        <p css={noDataText}>검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {companyDataObj.companyDataArr.map((companyData) => {
        return (
          <CompanyCard
            companyData={companyData}
            isBookmarked={companyData.isBookmark}
            key={`UnifiedSearchCompanyCard${companyData.id}`}
          />
        );
      })}

      {companyDataObj.pageResult.totalElements !== 0 && (
        <div css={buttonBox}>
          <NormalButton
            text="기업정보 더보기"
            iconObj={{
              icon: BsChevronRight,
              color: COLORS.BLUE_FIRST40,
              size: 0.75,
              position: "right",
            }}
            variant="outlined"
            buttonClick={() => {
              router.push({
                pathname: "/search",
                query: { q: router.query.q, page: 1, menu: "기업" },
              });
            }}
            wide={false}
          />
        </div>
      )}
    </section>
  );
};
