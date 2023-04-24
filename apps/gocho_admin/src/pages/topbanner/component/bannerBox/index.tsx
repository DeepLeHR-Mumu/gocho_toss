import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util";
import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";

import { useDeleteBanner } from "@/api/banner/useDeleteBanner";

import { bannerBox, bannerIdBox, companyNameBox, deleteBannerButton, expireDateBox, titleBox } from "./style";
import { BannerBoxProps } from "./type";

export const BannerBox: FunctionComponent<BannerBoxProps> = ({ banner }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useDeleteBanner();

  const bannerDeleteHandler = (id: number) => {
    deleteMutate(
      { bannerId: id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(bannerArrKeyObj.top);
        },
      }
    );
  };

  const { date } = dateConverter(banner.endTime);

  return (
    <tr css={bannerBox}>
      <td css={bannerIdBox}>{banner.id}</td>
      <td css={companyNameBox}>{banner.company.name}</td>
      <td css={titleBox}>{banner.jd.title}</td>
      <td css={expireDateBox}>{date}</td>
      <td>
        <button
          css={deleteBannerButton}
          type="button"
          onClick={() => {
            bannerDeleteHandler(banner.id);
          }}
        >
          배너 삭제
        </button>
      </td>
    </tr>
  );
};
