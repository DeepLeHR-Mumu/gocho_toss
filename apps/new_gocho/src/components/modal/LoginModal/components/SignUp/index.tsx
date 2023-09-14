import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

import { Input, Button, Divider } from "shared-ui/deeple-ds";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE, EMAIL_REGEXP, PWD_REGEXP } from "shared-constant";

import { useDoSignUp } from "@/apis/auth";
import { RequestObjDef as SignUpFormValues } from "@/apis/auth/useDoSignup/type";
import { useGetDeviceType, useToast } from "@/globalStates";

import ActionBar from "../ActionBar";
import { ActionBarHandlers } from "../ActionBar/type";

import { cssObj } from "./style";

const SignUp = ({ ...actionBarHandlers }: ActionBarHandlers) => {
  const { isMobile, browserSize } = useGetDeviceType();
  const { setToastMessage } = useToast();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpFormValues>({ mode: "onChange" });
  const { mutate: postSignUp } = useDoSignUp();

  const signUpSubmit: SubmitHandler<SignUpFormValues> = (signUpObj) => {
    postSignUp(signUpObj, {
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response) {
          switch (error.response.status) {
            case 409:
              setError("email", { type: "custom", message: "이미 가입된 메일입니다." });
              break;
            default:
              break;
          }
        }
      },
      onSuccess: (response) => {
        localStorage.setItem("accessToken", `${response?.data.access_token}`);
        localStorage.setItem("refreshToken", `${response?.data.refresh_token}`);

        setToastMessage("환영합니다.");

        if (actionBarHandlers.closeHandler) {
          actionBarHandlers.closeHandler();
        }

        // const { nickname } = tokenDecryptor(response.data.access_token);
        // signupSuccessEvent();
        // queryClient.invalidateQueries();
        // refetch();
        // closeModal();
        // setToastMessage("님 환영합니다.", nickname);
      },
    });
  };

  return (
    <div
      css={cssObj.wrapper}
      style={isMobile ? { width: `${browserSize.innerWidth}px`, height: `${browserSize.innerHeight}px` } : {}}
    >
      <ActionBar title="회원가입" {...actionBarHandlers} />
      <Divider css={cssObj.mobileDivider} />
      <div css={cssObj.signUpWrapper}>
        <form css={cssObj.form}>
          <Input
            label="이메일"
            {...register("email", {
              pattern: {
                value: EMAIL_REGEXP,
                message: EMAIL_ERROR_MESSAGE.REGEX,
              },
            })}
            underline={isMobile}
            state={errors.email ? { state: "error", message: errors.email.message } : undefined}
          />
          <Input
            label="비밀번호"
            type="password"
            maxLength={20}
            {...register("password", {
              minLength: { value: 8, message: PWD_ERROR_MESSAGE.MIN_MAX },
              pattern: {
                value: PWD_REGEXP,
                message: PWD_ERROR_MESSAGE.NOT_SPACE,
              },
            })}
            underline={isMobile}
            state={errors.password ? { state: "error", message: errors.password.message } : undefined}
          />
        </form>
      </div>
      <div css={cssObj.signUpButtonWrapper}>
        <Button type="submit" size="large" fill={isMobile} onClick={handleSubmit(signUpSubmit)}>
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default SignUp;