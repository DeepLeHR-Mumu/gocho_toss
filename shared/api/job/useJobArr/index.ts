import { useQuery } from "@tanstack/react-query";

import { jobArrKeyObj, JobArrRequestObjDef } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetJobArrDef } from "./type";
import { selector } from "./util";

export const getJobArr: GetJobArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/jds", {
    params: requestObj,
  });
  return data;
};

export const useJobArr = (requestObj: JobArrRequestObjDef) => {
  const queryResult = useQuery(jobArrKeyObj.jobArr(requestObj), getJobArr, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
  return queryResult;
};