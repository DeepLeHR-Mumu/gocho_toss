import { FunctionComponent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import { useDoSignUp, useUserInfo } from "shared-api/auth";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE, NICKNAME_ERROR_MESSAGE, PWD_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";
import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";

import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";
import { CloseButton } from "@component/common/atom/closeButton";
import { ErrorResponse } from "shared-api/auth/usePatchUserInfo/type";
import { useToast } from "@recoil/hook/toast";

import { wrapper, desc, formCSS, closeBtn, formArr, logoContainer, sideErrorMsg } from "./style";
import { SignUpFormValues } from "./type";
import { validateNickname } from "./util";

export const SignUpBox: FunctionComponent = () => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<SignUpFormValues>({ mode: "onChange" });

  const { refetch } = useUserInfo();
  const { closeModal } = useModal();
  const { mutate } = useDoSignUp();
  const { setCurrentToast } = useToast();

  const signUpSubmit: SubmitHandler<SignUpFormValues> = (signUpObj) => {
    mutate(signUpObj, {
      onError: (error) => {
        const errorResponse = error.response?.data as ErrorResponse;
        setErrorMsg(errorResponse.error.errorMessage);
      },
      onSuccess: (response) => {
        setCurrentToast("님 환영합니다.", watch("nickname"));
        localStorage.setItem("token", `${response?.data.token}`);
        refetch();
        closeModal();
      },
    });
  };

  useEffect(() => {
    setErrorMsg(undefined);
  }, [closeModal]);

  return (
    <div css={wrapper}>
      <div css={closeBtn}>
        <CloseButton size="S" buttonClick={closeModal} />
      </div>
      <div css={logoContainer}>
        <Image objectFit="contain" src={smallMono} alt="고초대졸 로고" />
      </div>
      <p css={desc}>가입은 5초면 가능!</p>

      <form css={formCSS} onSubmit={handleSubmit(signUpSubmit)}>
        <ul css={formArr}>
          <li>
            <AccountInput
              registerObj={register("email", {
                required: EMAIL_ERROR_MESSAGE.REQUIRED,
                pattern: {
                  value: EMAIL_REGEXP,
                  message: EMAIL_ERROR_MESSAGE.REGEX,
                },
              })}
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
              placeholder="비밀번호를 입력해주세요"
              label="비밀번호"
              errorObj={errors.password}
              isDirty={dirtyFields.password}
              inputType="password"
            />
          </li>
          <li>
            <AccountInput
              registerObj={register("nickname", {
                required: NICKNAME_ERROR_MESSAGE.REQUIRED,
                validate: validateNickname,
              })}
              placeholder="닉네임을 입력해주세요"
              label="닉네임"
              errorObj={errors.nickname}
              isDirty={dirtyFields.nickname}
              inputType="text"
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
