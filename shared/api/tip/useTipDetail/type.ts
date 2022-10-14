import { QueryFunctionContext } from "@tanstack/react-query";

import { TipObjDef } from "../../tip/type/tipArr";
import { tipDetailKeyObj } from "shared-constant/queryKeyFactory/tip/detailKeyObj";

interface ResponseObjDef {
  data: TipObjDef;
}

export interface GetTipDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof tipDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}