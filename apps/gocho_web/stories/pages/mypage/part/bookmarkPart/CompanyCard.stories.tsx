import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CompanyCard } from "shared-ui/common/companyCard";

export default {
  title: "마이페이지/bookmarkPart/CompanyCard",
  component: CompanyCard,
  argTypes: {
    companyName: { description: "카드에 출력될 기업이름" },
    companyId: { description: "기업 이미지를 불러오기 위한 기업 Id" },
    size: { description: "기업 규모" },
  },
} as ComponentMeta<typeof CompanyCard>;

const Template: ComponentStory<typeof CompanyCard> = (args) => {
  return <CompanyCard {...args} />;
};

// 출력할 Variables 지정
export const 기본 = Template.bind({});
기본.args = {
  companyData: {
    name: "SK하이닉스",
    id: 119,
    logoUrl: "https://d2nnzfahmszi6w.cloudfront.net/Fcompany_images/119/logo.png",
  },
};
