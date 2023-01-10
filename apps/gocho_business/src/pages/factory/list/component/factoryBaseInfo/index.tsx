import { FunctionComponent } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiMap } from "react-icons/fi";
import { AiOutlineEnvironment } from "react-icons/ai";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { CommonStatusChip } from "@/components/common";
import { POSTCODE_SCRIPT_URL } from "@/constants/url";

import { cssObj } from "./style";
import { FactoryBaseInfoProps } from "./type";

export const FactoryBaseInfo: FunctionComponent<FactoryBaseInfoProps> = ({ formObj, reqeustStatus }) => {
  const { register, formState, setValue } = formObj;

  const openPostCodePopup = useDaumPostcodePopup(POSTCODE_SCRIPT_URL);

  return (
    <div css={cssObj.container} data-testid="factory/list/FactoryBaseInfo">
      <div css={cssObj.inputContainer}>
        <input
          {...register("factory_name", { maxLength: 30, required: true })}
          css={cssObj.textInput(formState.errors.factory_name?.type === "required")}
          placeholder="공장이름"
          maxLength={30}
        />
        <div css={cssObj.statusChip}>
          <CommonStatusChip status={reqeustStatus} />
        </div>
      </div>
      <div css={cssObj.inputContainer}>
        <SharedButton
          radius="circle"
          fontColor={COLORS.GRAY10}
          backgroundColor={COLORS.GRAY80}
          size="medium"
          text="주소찾기"
          onClickHandler={() =>
            openPostCodePopup({
              onComplete: (addressObj: Address) => {
                setValue("address", addressObj.address);
              },
            })
          }
          iconObj={{ icon: FiMap, location: "left" }}
        />
        <button
          type="button"
          css={cssObj.addrOpener}
          onClick={(buttonClickEvent) => {
            buttonClickEvent.stopPropagation();
            openPostCodePopup({
              onComplete: (addressObj: Address) => {
                setValue("address", addressObj.address);
              },
            });
          }}
        >
          <div css={cssObj.addressContainer}>
            <input
              {...register("address", { required: true })}
              disabled
              css={cssObj.addressTextInput(formState.errors.address?.type === "required")}
              placeholder="공장주소"
            />
            <div css={cssObj.addressIcon}>
              <AiOutlineEnvironment />
            </div>
          </div>
        </button>
      </div>
      <div css={cssObj.inputContainer}>
        <p css={cssObj.infoText}>생산품</p>
        <input
          {...register("product", { required: true, maxLength: 100 })}
          css={cssObj.textInput(formState.errors.product?.type === "required")}
          placeholder="공장 주 생산품"
          maxLength={100}
        />
      </div>
    </div>
  );
};