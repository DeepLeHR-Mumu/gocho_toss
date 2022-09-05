import { useInfiniteQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import { SpecArrInfinityRequestDef, specArrKeyObj } from "@constant/queryKeyFactory/spec/arrKeyObj";

import { GetInifiniteSpecArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteSpecArr: GetInifiniteSpecArrDef = async ({ queryKey: [{ requestObj }], pageParam }) => {
  const { data } = await axiosInstance.get(`/specs`, {
    params: { ...requestObj, offset: pageParam },
  });

  const nextPage = pageParam === undefined ? 20 : pageParam + 20;

  return { ...data, nextPage };
};

export const useInfiniteSpecArr = (requestObj: SpecArrInfinityRequestDef) => {
  const queryResult = useInfiniteQuery(specArrKeyObj.infinite(requestObj), getInfiniteSpecArr, {
    getNextPageParam: (responseObj) => {
      return responseObj.data.length !== 0 ? responseObj.nextPage : undefined;
    },
    select: (data) => {
      return {
        pages: data.pages.map((page) => {
          return selector(page.data);
        }),
        pageParams: [...data.pageParams],
      };
    },
  });
  return queryResult;
};
