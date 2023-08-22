export interface SearchJdRequestObj {
  page: string | string[] | undefined;
  searchWord: string | string[] | undefined;
  limit: number;
}

export const searchJdArrKeyObj = {
  all: [{ data: "searchJdArr" }] as const,
  searchArr: (requestObj: SearchJdRequestObj) => {
    return [{ data: "searchJdArr", requestObj }] as const;
  },
};
