import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteCompanyDef, RequestObjDef, useDeleteCompanyProps } from "./type";

export const deleteCompany: DeleteCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/companies/${requestObj.companyId}`);
  return data;
};

export const useDeleteCompany: useDeleteCompanyProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteCompany });
