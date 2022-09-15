import { QueryFunctionContext } from "@tanstack/react-query";
import { TipObjDef } from "../../tip/type/tipArr";
import { tipArrKeyObj } from "@sharedConstant/queryKeyFactory/tip/arrKeyObj";

interface ResponseObjDef {
  data: TipObjDef[];
}

export interface GetTipArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof tipArrKeyObj.tipArr>>): Promise<ResponseObjDef>;
}
