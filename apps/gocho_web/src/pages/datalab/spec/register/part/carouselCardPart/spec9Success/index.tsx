import { FunctionComponent } from "react";
import Link from "next/link";

import { SPEC_URL } from "@constant/internalURL";

import { SpecCardTitle } from "../common/component";

import { desc, successButton, specCardWrapper } from "./style";

export const Spec9Success: FunctionComponent = () => {
  return (
    <div css={specCardWrapper}>
      <SpecCardTitle title="스펙등록 완료" desc="축하드립니다!" />
      <div>
        <p css={desc}>
          스펙이 등록되었습니다.
          <br />
          다른 사용자들의 스펙을 5개 이상 평가하고 자신의 평가내역을
          확인해보세요
        </p>
      </div>

      <Link href={SPEC_URL} passHref>
        <a css={successButton}>스펙 리스트</a>
      </Link>
    </div>
  );
};