import { useState, ReactElement } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useFactoryDetail, useEditFactoryRequest, useAcceptModifyFactory, useRejectModifyFactory } from "@/api";
import { factoryArrKeyObj } from "@/api/factory/useFactoryArr/type";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import { ErrorScreen, GlobalLayout, LoadingScreen } from "@/component";
import type { NextPageWithLayout } from "@/types";

import { FactoryPart } from "./part/factoryPart";
import { cssObj } from "./style";
import { RejectFormValues } from "./type";

const FactoryEditDetail: NextPageWithLayout = () => {
  const [checkMsg, setCheckMsg] = useState<string>();

  const queryClient = useQueryClient();
  const router = useRouter();
  const factoryId = Number(router.query.id);

  const { register, handleSubmit } = useForm<RejectFormValues>();

  const {
    data: factoryBeforeData,
    isLoading: isBeforeLoading,
    isError: isBeforeError,
  } = useFactoryDetail({ factoryId });

  const {
    data: factoryAfterData,
    isLoading: isAfterLoading,
    isError: isAfterError,
  } = useEditFactoryRequest({ factoryId });

  const { mutate: acceptFactoryMutate } = useAcceptModifyFactory();
  const { mutate: rejectFactoryMutate } = useRejectModifyFactory();

  const acceptFactoryHandler = () => {
    acceptFactoryMutate(
      { factoryId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(factoryArrKeyObj.all);
          setCheckMsg("공장 수정 요청이 승인되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
        },
      }
    );
  };

  const rejectFactoryHandler: SubmitHandler<RejectFormValues> = (formData) => {
    rejectFactoryMutate(
      { factoryId, reason: formData.reason },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(factoryArrKeyObj.all);
          setCheckMsg("공장 수정 요청이 반려되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
        },
      }
    );
  };

  if (!factoryBeforeData || !factoryAfterData || isBeforeLoading || isAfterLoading) {
    return <LoadingScreen />;
  }

  if (isBeforeError || isAfterError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공장 변경 요청 확인</h2>
      <div css={cssObj.companyNameContainer}>
        <strong css={cssObj.companyTitle}>회사 이름</strong>
        <p css={cssObj.companyName}>{factoryBeforeData.company.name}</p>
      </div>
      <div css={cssObj.factoryCompareContainer}>
        <div css={cssObj.factoryContainer}>
          <strong css={cssObj.label}>BEFORE</strong>
          <FactoryPart factory={factoryBeforeData} />
        </div>
        <div css={cssObj.factoryContainer}>
          <strong css={cssObj.label}>AFTER</strong>
          <FactoryPart factory={factoryAfterData} />
        </div>
      </div>
      <div css={cssObj.buttonContainer}>
        <button
          type="submit"
          css={cssObj.acceptButton}
          onClick={() => {
            acceptFactoryHandler();
          }}
        >
          수정 승인
        </button>
        <form css={cssObj.rejectForm} onSubmit={handleSubmit(rejectFactoryHandler)}>
          <textarea
            css={cssObj.rejectReasonBox}
            placeholder="반려사유를 입력해주세요."
            {...register("reason", { required: true })}
          />
          <button type="submit" css={cssObj.rejectButton}>
            수정 반려
          </button>
        </form>
      </div>
      <p css={cssObj.checkMessage}>{checkMsg}</p>
    </main>
  );
};

FactoryEditDetail.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default FactoryEditDetail;
