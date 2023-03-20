import { FunctionComponent, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import { useDoSignUp, useUserInfo } from "shared-api/auth";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE, EMAIL_REGEXP, PWD_REGEXP } from "shared-constant";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";
import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { signupModalOpenEvent, signupModalCloseEvent, signupSuccessEvent } from "shared-ga/auth";

import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";
import { CloseButton } from "@component/common/atom/closeButton";
import { ErrorResponse } from "shared-api/auth/usePatchUserInfo/type";
import { useToast } from "@recoil/hook/toast";

import { tokenDecryptor } from "shared-util";
import { wrapper, desc, formCSS, closeBtn, formArr, logoContainer, sideErrorMsg } from "./style";
import { SignUpFormValues } from "./type";

export const SignUpBox: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<SignUpFormValues>({ mode: "onChange" });
  const { refetch } = useUserInfo();
  const { closeModal } = useModal();
  const { mutate } = useDoSignUp();
  const { setCurrentToast } = useToast();

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const signupAttempt = useRef(0);

  const signUpSubmit: SubmitHandler<SignUpFormValues> = (signUpObj) => {
    mutate(signUpObj, {
      onError: (error) => {
        const errorResponse = error.response?.data as ErrorResponse;
        setErrorMsg(errorResponse.error.errorMessage);
        signupAttempt.current += 1;
      },
      onSuccess: (response) => {
        localStorage.setItem("accessToken", `${response?.data.access_token}`);
        localStorage.setItem("refreshToken", `${response?.data.refresh_token}`);
        const { nickname } = tokenDecryptor(response.data.access_token);
        signupSuccessEvent();
        refetch();
        closeModal();
        setCurrentToast("님 환영합니다.", nickname);
      },
    });
  };

  useEffect(() => {
    setErrorMsg(null);
  }, [closeModal]);

  useEffect(() => {
    signupModalOpenEvent();
  }, []);

  return (
    <div css={wrapper}>
      <div css={closeBtn}>
        <CloseButton
          size="S"
          buttonClick={() => {
            signupModalCloseEvent(signupAttempt.current);
            closeModal();
          }}
        />
      </div>
      <div css={logoContainer}>
        <Image src={smallMono} alt="고초대졸 닷컴" fill />
      </div>
      <p css={desc}>가입은 5초면 가능!</p>

      <form css={formCSS} onSubmit={handleSubmit(signUpSubmit)}>
        <ul css={formArr}>
          <li>
            <AccountInput
              registerObj={register("email", {
                required: EMAIL_ERROR_MESSAGE.REQUIRED,
                maxLength: { value: 30, message: EMAIL_ERROR_MESSAGE.LOGIN_MIN_MAX },
                pattern: {
                  value: EMAIL_REGEXP,
                  message: EMAIL_ERROR_MESSAGE.REGEX,
                },
              })}
              setValue={() => {
                setValue("email", "");
              }}
              placeholder="이메일을 입력해주세요"
              label="이메일"
              errorObj={errors.email}
              isDirty={dirtyFields.email}
              inputType="email"
            />
          </li>
          <li>
            <AccountInput
              registerObj={register("password", {
                required: PWD_ERROR_MESSAGE.REQUIRED,
                minLength: { value: 8, message: PWD_ERROR_MESSAGE.MIN_MAX },
                maxLength: { value: 20, message: PWD_ERROR_MESSAGE.MIN_MAX },
                pattern: {
                  value: PWD_REGEXP,
                  message: PWD_ERROR_MESSAGE.NOT_SPACE,
                },
              })}
              setValue={() => {
                setValue("password", "");
              }}
              placeholder="비밀번호를 입력해주세요"
              label="비밀번호"
              errorObj={errors.password}
              isDirty={dirtyFields.password}
              inputType="password"
            />
          </li>
        </ul>

        <p css={sideErrorMsg}>{errorMsg && errorMsg}</p>
        <NormalButton isSubmit wide text="확인" variant="filled" />
      </form>
    </div>
  );
};

export const SignUpModal: FunctionComponent = () => {
  return (
    <ModalComponent>
      <SignUpBox />
    </ModalComponent>
  );
};
