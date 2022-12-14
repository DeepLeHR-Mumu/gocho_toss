import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { DeleteJobDef, RequestObjDef, useDeleteJobProps } from "./type";

export const deleteJob: DeleteJobDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/jds/${requestObj.jdId}`);
  return data;
};

export const useDeleteJob: useDeleteJobProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(deleteJob);
};
