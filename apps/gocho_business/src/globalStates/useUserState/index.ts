import create from "zustand";
import { useEffect } from "react";

import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { UserStateInfoProps, UseUserStateDef } from "./type";

const userStateInfo = create<UserStateInfoProps>((set) => ({
  userState: null,
  setUserState: (status) => set(() => ({ userState: status })),
}));

export const useUserState: UseUserStateDef = () => {
  const { userState: userInfoData, setUserState: setUserInfoData } = userStateInfo();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (userInfoData === null && token) {
      const { id, company_id, company_name, company_logo, iat, exp, email, name, department } =
        managerTokenDecryptor(token);

      setUserInfoData({
        id,
        companyId: company_id,
        companyName: company_name,
        companyLogo: company_logo,
        email,
        name,
        department,
        iat,
        exp,
      });
    }

    if (userInfoData === null && !token) {
      setUserInfoData(false);
    }
  }, [userInfoData, setUserInfoData]);

  if (userInfoData) {
    return { userInfoData, setUserInfoData };
  }

  return { setUserInfoData };
};
