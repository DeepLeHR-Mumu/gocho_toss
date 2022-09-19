import Link from "next/link";
import { FunctionComponent } from "react";

import { Layout } from "@component/layout";

import { bannerArr } from "./constant";
import { changeBannerColor, descCSS, linkCSS, titleCSS } from "./style";

export const BannerPart: FunctionComponent = () => {
  return (
    <Layout>
      <section>
        <ul>
          {bannerArr.map((banner) => {
            return (
              <li css={changeBannerColor(banner.backgroundColor)} key={banner.title}>
                <Link href={banner.linkUrl} passHref>
                  <a css={linkCSS}>
                    <strong css={titleCSS}>{banner.title}</strong>
                    <p css={descCSS}>{banner.desc}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};
