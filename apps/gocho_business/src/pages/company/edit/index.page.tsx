import { ReactElement, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useAddCompanyDetail } from "@/apis/company/useAddCompany";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { CommonStatusChip } from "@/components/common";
import { PageLayout, GlobalLayout, Footer } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/_app.page";
import { useUserState } from "@/globalStates/useUserState";
import { useToast } from "@/globalStates/useToast";
import { useCompanyDetail } from "@/apis/company/useCompanyDetail";

import { BasicPart } from "./part/basicPart";
import { WelfalePart } from "./part/welfarePart";
import { COMPANY_MESSSAGE_OBJ } from "./constants";
import { PostSubmitValues } from "./type";
import { cssObj } from "./style";

const CompanyEditPage: NextPageWithLayout = () => {
  const { userInfoData } = useUserState();
  const { setToast } = useToast();
  const { data: companyData, isLoading: isCompanyDataLoading } = useCompanyDetail({
    companyId: userInfoData?.companyId,
  });
  const { mutate: putCompanyDetail } = useAddCompanyDetail();

  const companyForm = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty },
  } = companyForm;

  const addCompanyDetail = (formData: PostSubmitValues) => {
    if (!isDirty) {
      window.alert(COMPANY_MESSSAGE_OBJ.ISDIRTY);
      return;
    }
    if (window.confirm(COMPANY_MESSSAGE_OBJ.EDIT)) {
      putCompanyDetail(
        {
          companyId: userInfoData?.companyId as number,
          dto: {
            ...formData,
            welfare: {
              money: formData.welfare.money || null,
              health: formData.welfare.health || null,
              life: formData.welfare.life || null,
              holiday: formData.welfare.holiday || null,
              facility: formData.welfare.facility || null,
              etc: formData.welfare.etc || null,
              growth: formData.welfare.growth || null,
              vacation: formData.welfare.vacation || null,
            },
            nozo: {
              exists: formData.nozo.exists === "true",
              desc: formData.nozo.desc || null,
            },
          },
        },
        {
          onSuccess: () => {
            setToast("등록되었습니다");
          },
        }
      );
    }
  };

  useEffect(() => {
    if (companyData) {
      reset({
        employee_number: companyData.employeeNumber,
        intro: companyData.intro || "",
        address: companyData.address,
        nozo: {
          exists: companyData.nozo.exists ? "true" : "false",
          desc: companyData.nozo.desc || "",
        },
        pay_avg: companyData.payAvg,
        pay_start: companyData.payStart,
        pay_desc: companyData.payDesc || "",
        welfare: {
          money: companyData.welfare.money,
          health: companyData.welfare.health,
          life: companyData.welfare.life,
          holiday: companyData.welfare.holiday,
          facility: companyData.welfare.facility,
          vacation: companyData.welfare.vacation,
          growth: companyData.welfare.growth,
          etc: companyData.welfare.etc,
        },
      });
    }
  }, [companyData, reset]);

  if (isCompanyDataLoading || !companyData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <main css={cssObj.wrapper}>
      <PageLayout>
        <form
          css={cssObj.container}
          onSubmit={handleSubmit(addCompanyDetail)}
          onKeyDown={(onKeyDownEvent) => {
            if (onKeyDownEvent.key === "Enter") {
              onKeyDownEvent.preventDefault();
            }
          }}
          role="presentation"
        >
          <header css={cssObj.header}>
            <div>
              <h2 css={cssObj.title}>기업정보</h2>
              <p css={cssObj.desc}>기업 정보에 변화가 있다면 작성 후 수정완료를 눌러주세요</p>
            </div>
            <div css={cssObj.flexBox}>
              <CommonStatusChip status={companyData.status.name} />
              <button type="submit">
                <FiEdit /> 기업 정보 수정완료
              </button>
            </div>
          </header>
          <section css={cssObj.companyInfoBox}>
            <BasicPart companyForm={companyForm} />
            <WelfalePart companyForm={companyForm} />
          </section>
          <button type="submit">기업 정보 수정완료</button>
        </form>
      </PageLayout>
    </main>
  );
};

CompanyEditPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
    <Footer />
  </GlobalLayout>
);

export default CompanyEditPage;
