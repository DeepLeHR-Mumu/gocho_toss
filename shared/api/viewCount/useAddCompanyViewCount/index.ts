import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addCompanyViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(`/users/companies/${requestObj.elemId}/views`, null, { headers });
  return data;
};

export const useAddCompanyViewCount = () => {
  return useMutation({ mutationFn: addCompanyViewCount });
};
