import { ChangeEvent, FunctionComponent, useRef } from "react";
import { useForm } from "react-hook-form";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiX } from "react-icons/fi";

import { useFocusTrap } from "shared-hooks";

import { useModal } from "@/globalStates";
import { useAddFactory } from "@/apis";
import { commonCssObj } from "@/styles";

import { factoryUploadConfirmEvent, factoryUploadDoneEvent } from "@/ga";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { ModalComponent } from "../modalBackground";

import { cssObj } from "./style";
import { FactoryRegisterFormValues } from "./type";

export const FactoryAddModal: FunctionComponent = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isLoading = useRef(false);
  const { closeModal } = useModal();

  const { register, handleSubmit, setValue } = useForm<FactoryRegisterFormValues>();

  useFocusTrap(modalRef);

  const { mutate: addFactoryMutation } = useAddFactory();
  const openPostCodePopup = useDaumPostcodePopup();

  const onClickAddress = () => {
    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("address", addressObj.address, { shouldDirty: true });
      },
    });
  };

  const addFactoryHandler = (factoryRequestObj: FactoryRegisterFormValues) => {
    if (isLoading.current) {
      return;
    }
    isLoading.current = true;
    factoryUploadConfirmEvent();
    addFactoryMutation(
      {
        ...factoryRequestObj,
        bus_bool: factoryRequestObj.bus_bool === "true",
        bus_etc: factoryRequestObj.bus_etc === "" ? null : factoryRequestObj.bus_etc,
        dormitory_bool: factoryRequestObj.dormitory_bool === "true",
        dormitory_etc: factoryRequestObj.dormitory_etc === "" ? null : factoryRequestObj.dormitory_etc,
      },
      {
        onSuccess: () => {
          factoryUploadDoneEvent();
          closeModal();
        },
        onSettled: () => {
          isLoading.current = false;
        },
      }
    );
    isLoading.current = false;
  };

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>공장 등록</h3>
          <button type="button" css={cssObj.closeButton} onClick={() => closeModal()}>
            <FiX />
          </button>
        </div>
        <form onSubmit={handleSubmit(addFactoryHandler)}>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>공장 명칭</strong>
            <input
              css={commonCssObj.input(37.5, false)}
              {...register("factory_name", { maxLength: 50, required: true })}
              placeholder="고초대졸 제1공장 (최대 50자)"
            />
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>생산품</strong>
            <input
              css={commonCssObj.input(37.5, false)}
              {...register("product", { maxLength: 50, required: true })}
              placeholder="공장 주 생산품 (최대 50자)"
            />
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>공장 주소</strong>
            <input css={commonCssObj.input(30.5, false)} disabled {...register("address", { required: true })} />
            <button css={cssObj.addAddressButton} type="button" onClick={onClickAddress}>
              주소찾기
            </button>
          </div>
          <div css={commonCssObj.container}>
            <strong css={commonCssObj.inputTitle(false)}>임직원</strong>
            <div css={cssObj.inputWrapper}>
              <input
                {...register("male_number", {
                  required: true,
                  valueAsNumber: true,
                  onChange: (value: ChangeEvent<HTMLInputElement>) => {
                    if (Number(value?.target?.value) > 100000) setValue("male_number", 99999);
                  },
                })}
                type="number"
                min="0"
                placeholder="남성"
                css={commonCssObj.input(5.5, false)}
              />
              <p>명</p>
            </div>
            <div css={cssObj.inputWrapper}>
              <input
                {...register("female_number", {
                  required: true,
                  valueAsNumber: true,
                  onChange: (value: ChangeEvent<HTMLInputElement>) => {
                    if (Number(value?.target?.value) > 100000) setValue("female_number", 99999);
                  },
                })}
                type="number"
                min="0"
                placeholder="여성"
                css={commonCssObj.input(5.5, false)}
              />
              <p>명</p>
            </div>
          </div>
          <div css={commonCssObj.longContainer}>
            <strong css={commonCssObj.inputTitle(false)}>통근버스</strong>
            <div>
              <div css={cssObj.labelContainer}>
                <SharedRadioButton id="busTrue" value="true" registerObj={register("bus_bool", { required: true })}>
                  <p css={cssObj.radioLabel}>있음</p>
                </SharedRadioButton>
                <SharedRadioButton id="busFalse" value="false" registerObj={register("bus_bool", { required: true })}>
                  <p css={cssObj.radioLabel}>없음</p>
                </SharedRadioButton>
              </div>
              <input
                {...register("bus_etc", {
                  maxLength: 70,
                  validate: (value) => {
                    if (value) {
                      return value.trim().length !== 0;
                    }
                    return true;
                  },
                })}
                css={commonCssObj.input(37.5, false)}
                placeholder="보충 설명(선택)"
                maxLength={70}
              />
            </div>
          </div>
          <div css={commonCssObj.longContainer}>
            <strong css={commonCssObj.inputTitle(false)}>기숙사</strong>
            <div>
              <div css={cssObj.labelContainer}>
                <SharedRadioButton
                  id="dormitoryTrue"
                  value="true"
                  registerObj={register("dormitory_bool", { required: true })}
                >
                  <p css={cssObj.radioLabel}>있음</p>
                </SharedRadioButton>
                <SharedRadioButton
                  id="dormitoryFalse"
                  value="false"
                  registerObj={register("dormitory_bool", { required: true })}
                >
                  <p css={cssObj.radioLabel}>없음</p>
                </SharedRadioButton>
              </div>
              <input
                {...register("dormitory_etc", {
                  maxLength: 70,
                  validate: (value) => {
                    if (value) {
                      return value.trim().length !== 0;
                    }
                    return true;
                  },
                })}
                css={commonCssObj.input(37.5, false)}
                placeholder="보충 설명(선택)"
                maxLength={70}
              />
            </div>
          </div>
          <div css={cssObj.buttonContainer}>
            <NewSharedButton onClickHandler={() => closeModal()} buttonType="outLineGray" text="취소" width={8.75} />
            <NewSharedButton onClickHandler="submit" buttonType="fillBlue" text="등록하기" width={8.75} />
          </div>
        </form>
      </div>
    </ModalComponent>
  );
};