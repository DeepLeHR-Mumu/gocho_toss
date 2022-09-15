import { axiosInstance } from "../../axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { userInfoKeyObj } from "@sharedConstant/queryKeyFactory/user/infoKeyObj";

import { selector } from "./util";

export const postUserAuth = async () => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/auth/check`,
    {},
    {
      headers: { "x-access-token": token },
    }
  );
  return data;
};

export const useUserInfo = () => {
  const queryResult = useQuery(userInfoKeyObj.userInfo, postUserAuth, {
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
