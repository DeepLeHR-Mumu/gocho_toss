import { FunctionComponent } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import { useJdArr } from "@/apis/jd/useJdArr";
import { INTERNAL_URL } from "@/constants/url";

import { JdCard } from "../../component/jdCard";
import { cssObj } from "./style";

export const ListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: jdDataObj, isSuccess } = useJdArr(true, { order: "recent" });

  if (!isSuccess) {
    return null;
  }

  return (
    <section>
      {jdDataObj.jdDataArr.map((jd) => (
        <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />
      ))}
      <div css={cssObj.buttonWrapper}>
        <SharedButton
          radius="round"
          size="medium"
          text="공고 등록하러 가기"
          isFullWidth
          iconObj={{ icon: FiArrowRight, location: "right" }}
          backgroundColor="#E9EEF9"
          fontColor={`${COLORS.BLUE_FIRST40}`}
          onClickHandler={() => {
            router.push({
              pathname: INTERNAL_URL.JD_UPLOAD,
            });
          }}
        />
      </div>
    </section>
  );
};
