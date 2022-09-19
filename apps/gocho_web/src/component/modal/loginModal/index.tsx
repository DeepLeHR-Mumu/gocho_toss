import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { ModalComponent } from "@component/modal/modalBackground";
import { CloseButton } from "@component/common/atom/closeButton";
import { useDoLogin } from "@api/auth";
import { EMAIL_REGEXP, PWD_REGEXP } from "@constant/regExp";
import { useModal } from "@recoil/hook/modal";
import { AccountInput } from "@component/common/atom/accountInput";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE } from "@constant/errorMessage";
import { NormalButton } from "@component/common/atom/button";
import smallMono from "@public/images/global/deepLeLogo/smallMono.svg";
import { loginObjDef } from "@recoil/atom/modal";

import { wrapper, desc, formCSS, formArr, errorMsgCSS, closeBtn, errorBox, loginButton, logoContainer } from "./style";
import { ButtonProps, LoginFormValues } from "./type";

export const LoginBox: FunctionComponent<ButtonProps> = ({ button }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<LoginFormValues>({ mode: "onChange" });
  const queryClient = useQueryClient();

  const { mutate } = useDoLogin();
  const { closeModal, setCurrentModal } = useModal();

  const [errorMsg] = useState<null | string>(null);

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    mutate(loginObj, {
      onSuccess: (response) => {
        localStorage.setItem("token", `${response.data.token}`);
        queryClient.invalidateQueries();
        closeModal();
      },
    });
  };

  return (
    <div css={wrapper}>
      <div css={closeBtn}>
        {button === "home" ? <CloseButton size="S" isHome /> : <CloseButton size="S" buttonClick={closeModal} />}
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
                  message: "비밀번호 달라요",
                },
              })}
              placeholder="비밀번호를 입력해주세요"
              label="비밀번호"
              errorObj={errors.password}
              isDirty={dirtyFields.password}
              inputType="password"
            />
          </li>
        </ul>
        <div css={errorBox}>{errorMsg && <p css={errorMsgCSS}>{errorMsg}</p>}</div>
        <div css={loginButton}>
          <NormalButton wide variant="filled" text="로그인 하기" isSubmit />
        </div>
        <NormalButton
          wide
          variant="text"
          text="회원가입하기"
          buttonClick={() => {
            setCurrentModal("signUpModal");
          }}
        />
      </form>
    </div>
  );
};

export const LoginModal: FunctionComponent = () => {
  const { closeModal, currentModal } = useModal();

  const loginObj = currentModal?.modalContentObj as loginObjDef;
  return (
    <ModalComponent closeModal={closeModal}>
      <LoginBox button={loginObj.button} />
    </ModalComponent>
  );
};
