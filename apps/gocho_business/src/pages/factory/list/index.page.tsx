import { ReactElement, useState } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout, Footer } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

import { PageHead } from "./pageHead";
import { RegisterPart } from "./part/registerPart";
import { FactoryCardListPart } from "./part/factoryCardListPart";
import { cssObj } from "./style";

const FactoryListPage: NextPageWithLayout = () => {
  const [editingIndex, setEditingIndex] = useState<null | number>(null);

  return (
    <main>
      <PageLayout>
        <h2 css={cssObj.registerTitle}>{editingIndex === null ? "공장 등록" : "공장 수정"}</h2>
        <p css={cssObj.pageDescription}>
          간단히 공장을 등록해보세요! 등록한 공장은 공고 업로드시 불러와 사용할 수 있습니다
        </p>
        <RegisterPart editingIndex={editingIndex} setEditingIndex={setEditingIndex} />
        <h2 css={cssObj.listTitle}>공장 목록</h2>
        <div css={cssObj.factoryPartContainer}>
          <section css={cssObj.cardContainer}>
            <FactoryCardListPart setEditingIndex={setEditingIndex} editingIndex={editingIndex} />
          </section>
        </div>
      </PageLayout>
    </main>
  );
};

FactoryListPage.getLayout = (page: ReactElement) => (
  <>
    <PageHead />
    <GlobalLayout>
      <CompanyInfoPart />
      {page}
      <Footer />
    </GlobalLayout>
  </>
);

export default FactoryListPage;
