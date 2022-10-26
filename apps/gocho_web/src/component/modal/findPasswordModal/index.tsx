import { FunctionComponent } from "react";
import axios from "axios";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { useFindPassword } from "shared-api/auth";
import { EMAIL_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";
import { ModalComponent } from "@component/modal/modalBackground";
import { CloseButton } from "@component/common/atom/closeButton";
import { useModal } from "@recoil/hook/modal";
import { useToast } from "@recoil/hook/toast";

import { wrapper, desc, formCSS, formArr, closeBtn, loginButton, logoContainer } from "./style";
import { LoginFormValues } from "./type";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export const FindPasswordBox: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<LoginFormValues>({ mode: "onChange" });

  const { setCurrentToast } = useToast();
  const { mutate } = useFindPassword();
  const { closeModal } = useModal();

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    mutate(loginObj, {
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response?.status === 404)
          return setError("email", { type: "custom", message: "가입되지 않은 이메일 입니다." });
        if (axios.isAxiosError(error) && error.response?.status === 409)
          return setError("email", { type: "custom", message: "카카오 로그인으로만 가입된 회원입니다." });
        return null;
      },

      onSuccess: () => {
        setCurrentToast("메일이 전송됐습니다. 이메일을 확인해주세요.");
      },
    });
  };

  const closeFindPasswordModal = () => {
    closeModal();
  };

  return (
    <div css={wrapper}>
      <div css={closeBtn}>
        <CloseButton size="S" buttonClick={closeFindPasswordModal} />
      </div>
      <div css={logoContainer}>
        <Image objectFit="contain" src={smallMono} alt="고초대졸 로고" />
      </div>
      <p css={desc}>로그인이 필요한 서비스입니다.</p>
      <form css={formCSS} onSubmit={handleSubmit(loginSubmit)}>
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
        </ul>
        <div css={loginButton}>
          <NormalButton wide variant="filled" text="비밀번호 찾기" isSubmit />
        </div>
      </form>
    </div>
  );
};

export const FindPasswordModal: FunctionComponent = () => {
  return (
    <ModalComponent>
      <FindPasswordBox />
    </ModalComponent>
  );
};