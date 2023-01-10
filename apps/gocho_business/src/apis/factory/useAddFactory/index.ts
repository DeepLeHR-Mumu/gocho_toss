import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";

import { axiosInstance } from "../../useIsRefreshLock";
import { RequestObjDef, PostFactoryDef } from "./type";
import { factoryArrKeyObj } from "../useFactoryArr/type";

export const postAddFactory: PostFactoryDef = async (requestObj) => {
  if (requestObj.id) {
    const { data } = await axiosInstance.put(`/factories/${requestObj.id}`, requestObj);
    return data;
  }
  const { data } = await axiosInstance.post(`/factories`, requestObj);
  return data;
};

export const useAddFactory = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>(postAddFactory, {
    onSuccess: () => {
      queryClient.invalidateQueries(factoryArrKeyObj.all);
    },
  });
};