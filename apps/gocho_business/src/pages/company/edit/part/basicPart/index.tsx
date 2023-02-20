import { FocusEvent, MouseEvent, FunctionComponent } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { BiUserVoice } from "react-icons/bi";
import { FiMap, FiMapPin, FiUsers } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { COLORS } from "shared-style/color";
import { NUMBER_REGEXP } from "shared-constant/regExp";

import { CommonRoundButton } from "@/components/common";
import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";

import { KakaoMap } from "../../component/kakaoMap";
import { MAX_LENGTH_ERROR_TEXT, ONLY_INT_ERROR_TEXT } from "./constant";
import { BasicPartProps } from "./type";
import { cssObj } from "./style";

export const BasicPart: FunctionComponent<BasicPartProps> = ({ companyForm }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = companyForm;
  const { userInfoData } = useUserState();

  const { data: companyDetailData } = useCompanyDetail({
    companyId: userInfoData?.companyId,
  });

  const openPostCodePopup = useDaumPostcodePopup();

  if (!companyDetailData) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  return (
    <div css={cssObj.wrapper} data-testid="company/edit/BasicPart">
      <div css={cssObj.rowBox}>
        <div css={cssObj.container(30)}>
          <strong css={cssObj.subTitle(Boolean(errors.employee_number), !companyDetailData.uploader.isMine)}>
            사원수
          </strong>
          <label htmlFor="employee_number" css={cssObj.employeeNumber(!companyDetailData.uploader.isMine)}>
            <FiUsers />
            <input
              type="number"
              onWheel={(event) => {
                event.currentTarget.blur();
              }}
              {...register("employee_number", {
                required: true,
                min: 1,
                pattern: NUMBER_REGEXP,
                disabled: !companyDetailData.uploader.isMine,
              })}
              css={cssObj.input(Boolean(errors.employee_number), !companyDetailData.uploader.isMine)}
            />
            <p css={cssObj.unit(!companyDetailData.uploader.isMine)}>명</p>
          </label>
        </div>
        <div css={cssObj.container(70)}>
          <strong css={cssObj.subTitle(Boolean(errors.intro), !companyDetailData.uploader.isMine)}>
            기업 한줄 소개
          </strong>
          <input
            type="text"
            {...register("intro", {
              required: true,
              maxLength: {
                value: 120,
                message: MAX_LENGTH_ERROR_TEXT,
              },
              disabled: !companyDetailData.uploader.isMine,
              onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                if (onBlurEvent.target.value.trim().length === 0) {
                  setValue("intro", "");
                }
              },
            })}
            placeholder="한 줄로 기업을 소개해주세요"
            css={cssObj.input(Boolean(errors.intro), !companyDetailData.uploader.isMine)}
          />
          <p css={cssObj.errorMsg}>{errors.intro?.message}</p>
        </div>
      </div>
      <div css={cssObj.container()}>
        <strong css={cssObj.subTitle(Boolean(errors.address), !companyDetailData.uploader.isMine)}>
          기업 본사 주소
        </strong>
        <label htmlFor="address" css={cssObj.address}>
          <CommonRoundButton
            Icon={FiMap}
            isDisabled={!companyDetailData?.uploader.isMine}
            text="주소찾기"
            onClickHandler={() =>
              openPostCodePopup({
                onComplete: (addressObj: Address) => {
                  setValue("address", addressObj.address);
                },
              })
            }
            backgroundColor={COLORS.GRAY80}
          />
          <div css={cssObj.inputBox(!companyDetailData.uploader.isMine)}>
            <FiMapPin />
            <input
              type="button"
              {...register("address", { required: true })}
              placeholder="좌측 버튼을 눌러 기업 주소를 입력해주세요"
              onClick={(onClickEvent: MouseEvent<HTMLInputElement>) => {
                if (!companyDetailData.uploader.isMine) {
                  onClickEvent.preventDefault();
                  return;
                }
                openPostCodePopup({
                  onComplete: (addressObj: Address) => {
                    setValue("address", addressObj.address);
                  },
                });
              }}
              css={cssObj.inputAddress(Boolean(errors.address), !companyDetailData.uploader.isMine)}
            />
          </div>
        </label>
        <KakaoMap address={watch("address")} />
      </div>
      <div css={cssObj.container(80)}>
        <strong css={cssObj.subTitle(Boolean(errors.nozo?.exists), !companyDetailData.uploader.isMine)}>노조</strong>
        <div css={cssObj.nozoBox(!companyDetailData.uploader.isMine)}>
          <BiUserVoice />
          <SharedRadioButton
            registerObj={register("nozo.exists", { required: true })}
            isDisabled={!companyDetailData.uploader.isMine}
            value="true"
            id="nozoTrue"
          >
            <p css={cssObj.unit(!companyDetailData.uploader.isMine)}>있음</p>
          </SharedRadioButton>
          <SharedRadioButton
            registerObj={register("nozo.exists", { disabled: !companyDetailData.uploader.isMine, required: true })}
            isDisabled={!companyDetailData.uploader.isMine}
            value="false"
            id="nozoFalse"
          >
            <p css={cssObj.unit(!companyDetailData.uploader.isMine)}>없음</p>
          </SharedRadioButton>
        </div>
        <input
          type="text"
          {...register("nozo.desc", {
            maxLength: {
              value: 70,
              message: MAX_LENGTH_ERROR_TEXT,
            },
            disabled: !companyDetailData.uploader.isMine,
            onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
              if (onBlurEvent.target.value.trim().length === 0) {
                setValue("nozo.desc", "");
              }
            },
          })}
          placeholder="보충설명(선택)"
          css={cssObj.input(Boolean(errors.nozo?.desc), !companyDetailData.uploader.isMine)}
        />
        <p css={cssObj.errorMsg}>{errors.nozo?.desc?.message}</p>
      </div>
      <div css={cssObj.container(80)}>
        <strong css={cssObj.subTitle(Boolean(errors.pay_start), !companyDetailData.uploader.isMine)}>연봉 정보</strong>
        <div css={cssObj.payContainer}>
          <div css={cssObj.payBox}>
            <strong css={cssObj.infoTitle(Boolean(errors.pay_start), !companyDetailData.uploader.isMine)}>
              평균 초봉
            </strong>
            <div css={cssObj.payLabel}>
              <input
                type="number"
                {...register("pay_start", {
                  required: true,
                  min: 1000,
                  pattern: {
                    value: NUMBER_REGEXP,
                    message: ONLY_INT_ERROR_TEXT,
                  },
                  disabled: !companyDetailData.uploader.isMine,
                  onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                    if (Number(onBlurEvent.target.value) <= 999) {
                      window.alert("월급이 아닌 연봉 기준입니다. 입력하신 정보가 맞나요?");
                    }
                  },
                })}
                placeholder="숫자만 입력해주세요"
                css={cssObj.input(Boolean(errors.pay_start), !companyDetailData.uploader.isMine)}
              />
              <p css={cssObj.textValue(!companyDetailData.uploader.isMine)}>만원</p>
            </div>
            <p css={cssObj.errorMsg}>{errors.pay_start?.message}</p>
          </div>
          <div css={cssObj.payBox}>
            <strong css={cssObj.infoTitle(Boolean(errors.pay_avg), !companyDetailData.uploader.isMine)}>
              평균 연봉
            </strong>
            <div css={cssObj.payLabel}>
              <input
                type="number"
                {...register("pay_avg", {
                  required: true,
                  min: 1000,
                  pattern: NUMBER_REGEXP,
                  disabled: !companyDetailData.uploader.isMine,
                  onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                    if (Number(onBlurEvent.target.value) <= 999) {
                      window.alert("월급이 아닌 연봉 기준입니다. 입력하신 정보가 맞나요?");
                    }
                  },
                })}
                placeholder="숫자만 입력해주세요"
                css={cssObj.input(Boolean(errors.pay_avg), !companyDetailData.uploader.isMine)}
              />
              <p css={cssObj.textValue(!companyDetailData.uploader.isMine)}>만원</p>
            </div>
            <p css={cssObj.errorMsg}>{errors.pay_avg?.message}</p>
          </div>
        </div>
        <div css={cssObj.container()}>
          <strong css={cssObj.infoTitle(Boolean(errors.pay_desc), !companyDetailData.uploader.isMine)}>
            기타 연봉 정보
          </strong>
          <input
            type="text"
            {...register("pay_desc", {
              maxLength: {
                value: 120,
                message: MAX_LENGTH_ERROR_TEXT,
              },
              disabled: !companyDetailData.uploader.isMine,
              onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                if (onBlurEvent.target.value.trim().length === 0) {
                  setValue("pay_desc", "");
                }
              },
            })}
            placeholder="상여금, 성과급 등의 정보를 적어주세요"
            css={cssObj.input(Boolean(errors.pay_desc), !companyDetailData.uploader.isMine)}
          />
          <p css={cssObj.errorMsg}>{errors.pay_desc?.message}</p>
        </div>
      </div>
    </div>
  );
};