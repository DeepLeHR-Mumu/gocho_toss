import { FunctionComponent } from "react";
import Link from "next/link";

import { container, iconCSS, linkCSS, wrapper } from "./style";
import { linkArr } from "./constant";
import { CompanyInfoBox } from "./component/companyInfoBox";
import { UserInfoBox } from "./component/userInfoBox";

export const SideBar: FunctionComponent = () => (
  <nav css={wrapper}>
    <div css={container}>
      <CompanyInfoBox name="긴이름입니다 긴이름입니다 긴이름입니다긴 이름입니" />
      {linkArr.map((linkObj) => (
        <Link href={linkObj.url} key={linkObj.url} passHref>
          <a css={linkCSS}>
            <div css={iconCSS}>
              <linkObj.icon />
            </div>
            {linkObj.name}
          </a>
        </Link>
      ))}
    </div>
    <UserInfoBox name="담당자이름" />
  </nav>
);
