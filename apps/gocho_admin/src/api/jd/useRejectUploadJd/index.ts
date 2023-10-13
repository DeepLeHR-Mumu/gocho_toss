import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RejectUploadJdDef, RequestObjDef, UseRejectUploadJdProps } from "./type";

const patchRejectUploadJd: RejectUploadJdDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/jds/${requestObj.jdId}/requests/upload-reject`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useRejectUploadJd: UseRejectUploadJdProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: patchRejectUploadJd });
