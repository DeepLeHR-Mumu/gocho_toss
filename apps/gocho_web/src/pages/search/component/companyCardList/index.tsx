import { FunctionComponent } from "react";

import { useUserInfo } from "@api/auth";
import { useUserCompanyBookmarkArr } from "@api/bookmark";
import { CompanyCard } from "@component/card/companyCard";
import { dummyArrCreator } from "@util/dummyArrCreator";

import { listContainer } from "./style";
import { CompanyCardListProps } from "./type";

export const CompanyCardList: FunctionComponent<CompanyCardListProps> = ({ companyDataArr, isLoading }) => {
  const { data: userData } = useUserInfo();
  const { data: userCompanyBookmarkArr } = useUserCompanyBookmarkArr({ userId: userData?.id });

  if (!companyDataArr || isLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(6).map((dummy) => {
          return <CompanyCard isSkeleton key={`UnifiedSearchCompanyCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {companyDataArr.map((companyData) => {
        const isBookmarked = !!userCompanyBookmarkArr?.some((company) => {
          return company.id === companyData.id;
        });
        return (
          <CompanyCard
            companyData={companyData}
            isBookmarked={isBookmarked}
            key={`UnifiedSearchCompanyCard${companyData.id}`}
          />
        );
      })}
    </section>
  );
};
