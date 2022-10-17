import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { useDeleteFactoryProps, DeleteFactoryDef, RequestObjDef } from "./type";

export const deleteFactory: DeleteFactoryDef = async (requestObj) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkluZm8iLCJpZCI6MSwiZW1haWwiOiJhZG1pbkBkZWVwbGVoci5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY2NTExOTI3MywiZXhwIjoxNjY2MzI4ODczLCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.IMWOWTv33ARYK9xw-_QHU4s4B_GUVcQtnA3xeqwQdIdNuDhULXTcb304ACoUV92ys0yfe8brbOj-XxQy30CBDw";
  const { data } = await axiosInstance.delete(`/admin/companies/${requestObj.factoryId}`, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useDeleteFactory: useDeleteFactoryProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(deleteFactory);
  return mutationResult;
};
