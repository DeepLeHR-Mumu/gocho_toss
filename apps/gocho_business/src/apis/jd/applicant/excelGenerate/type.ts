import { AxiosError, AxiosResponse } from "axios";

export interface GetJdApplicantExcelDef {
  (jdId: number, applicantIdArr?: number[]): Promise<AxiosResponse<Blob> | AxiosError>;
}