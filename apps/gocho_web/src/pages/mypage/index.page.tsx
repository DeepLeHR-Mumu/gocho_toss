import { NextPage } from "next";
import { useEffect } from "react";
import axios from "axios";

import { useUserProfile } from "shared-api/auth";
import { myPageFunnelEvent } from "shared-ga/myPage";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";

import { Layout } from "@component/layout";
import { useModal } from "@/globalStates";

import { SettingPart } from "./part/settingPart";
import { CalendarPart } from "./part/calendarPart";
import { BookmarkPart } from "./part/bookmarkPart";
import { PageHead } from "./pageHead";
import { mainContainer, title, colorPoint, mypagePosition, mypageBody } from "./style";

const MypageHome: NextPage = () => {
  const { setModal, modal, closeModal } = useModal();

  const { error } = useUserProfile();

  useEffect(() => {
    if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
      setModal("loginModal", { button: "home" });
    }
    if (modal === "signUpModal") {
      setModal("signUpModal");
    }
    if (modal === "findPasswordModal") {
      setModal("findPasswordModal");
    }
  }, [error, closeModal, setModal, modal]);

  useEffect(() => {
    myPageFunnelEvent();
  }, []);
  return (
    <main css={mainContainer}>
      <PageHead />
      <InvisibleH1 title="마이페이지 - 고초대졸닷컴" />

      <Layout>
        <strong css={title}>
          마이페이지 <span css={colorPoint}>홈</span>
        </strong>
        <div css={mypagePosition}>
          <SettingPart />
          <div css={mypageBody}>
            <CalendarPart />
            <BookmarkPart />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default MypageHome;
