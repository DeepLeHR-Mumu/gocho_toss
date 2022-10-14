import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";

export default {
  title: "마이페이지/bookmarkPart/JobCard",
  component: BookmarkedJobCard,
  argTypes: {
    companyName: { description: "카드에 출력될 기업이름" },
    companyId: { description: "기업 이미지를 불러오기 위한 기업 Id" },
    title: { description: "카드에 출력되는 채용 공고 이름" },
    endDateNumber: { description: "D-Day 계산을 위해 받아오는 시작일 ms" },
  },
} as ComponentMeta<typeof BookmarkedJobCard>;

const Template: ComponentStory<typeof BookmarkedJobCard> = (args) => {
  return (
    <div
      css={css`
        width: 40rem;
      `}
    >
      <BookmarkedJobCard {...args} />
    </div>
  );
};

// 출력할 Variables 지정
export const 기본 = Template.bind({});
기본.args = {
  jobData: {
    id: 1234,
    title: "[반도체 오퍼레이터] 사원 0명 채용",
    endTime: new Date().getTime(),
    cut: false,
    companyName: "SK하이닉스",
    companyLogo: "https://d2nnzfahmszi6w.cloudfront.net/company_images/119/logo.png",
  },
};