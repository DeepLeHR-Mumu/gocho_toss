import { useInfiniteQuery } from "@tanstack/react-query";

import {
  userBookmarkKeyObj,
  UserBookmarkArrRequestDef,
} from "shared-constant/queryKeyFactory/company/companyUserBookmarkArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetInfiniteJobArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteUserCompanyBookmarkArr: GetInfiniteJobArrDef = async ({
  queryKey: [{ requestObj }],
  pageParam,
}) => {
  const { data } = await axiosInstance.get(`/users/${requestObj.userId}/company-bookmarks`, {
    params: { ...requestObj, page: pageParam },
  });
  const nextPage = pageParam === undefined ? 1 : pageParam + 1;
  return { ...data, nextPage };
};

export const useInfiniteUserCompanyBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useInfiniteQuery({
    queryKey: userBookmarkKeyObj.infinite(requestObj),
    queryFn: getInfiniteUserCompanyBookmarkArr,
    getNextPageParam: (responseObj) => {
      if (responseObj.page_result.total_pages === 0) return undefined;
      return responseObj.page_result.total_pages === responseObj.page_result.page
        ? undefined
        : responseObj.page_result.page + 1;
    },
    enabled: Boolean(requestObj.userId),
    select: (data) => {
      return {
        pages: data.pages.map((page) => {
          return selector(page.data, page.page_result);
        }),
        pageParams: [...data.pageParams],
      };
    },
  });
};
