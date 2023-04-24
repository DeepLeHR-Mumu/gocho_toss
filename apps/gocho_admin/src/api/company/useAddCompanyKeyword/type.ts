import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

import { ErrorResponseDef } from "@/types";

export interface RequestObjDef {
  keyword: string;
  company_id: number;
}

export interface PostCompanyKeywordDef {
  ({ keyword, company_id }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddCompanyKeywordProps {
  (): UseMutationResult<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
