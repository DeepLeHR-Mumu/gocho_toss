import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/apis/useIsRefreshLock";
import { ErrorResponseDef } from "@/types/errorType";

import { countInfoKeyObj, GetCountInfoDef, RequestObjDef, ResponseObjDef } from "./type";
import { countInfoSelector } from "./util";

export const getCountInfo: GetCountInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}/count-info`);
  return data;
};

export const useCountInfo = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof countInfoSelector>,
    ReturnType<typeof countInfoKeyObj.detail>
  >(countInfoKeyObj.detail(requestObj), getCountInfo, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => countInfoSelector(data),
  });