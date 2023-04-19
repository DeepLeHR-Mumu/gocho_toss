import { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";

import { useUserProfile } from "shared-api/auth";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { myPageFunnelEvent } from "shared-ga/myPage";

import { Layout } from "@component/layout";
import { useModal } from "@/globalStates";

import { BookmarkCompanyPart } from "./part/bookmarkCompanyPart";
import { BookmarkJobPart } from "./part/bookmarkJobPart";
import { PageHead } from "./pageHead";

import { setBookmarkViewButtonArr } from "./constant";
import { mainContainer, headerContainer, title, buttonArrContainer, setBookmarkViewButton } from "./style";
import { activeButtonDef } from "./type";

const MyPage: NextPage = () => {
  const [activeButton, setActiveButton] = useState<activeButtonDef>("채용공고");
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
    return () => {
      closeModal();
    };
  }, [error, closeModal, setModal, modal]);

  useEffect(() => {
    myPageFunnelEvent();
  }, []);
  return (
    <main css={mainContainer}>
      <PageHead />
      <InvisibleH1 title="마이페이지 - 고초대졸닷컴" />

      <Layout>
        <div css={headerContainer}>
          <strong css={title}>MY 북마크</strong>

          <div css={buttonArrContainer}>
            {setBookmarkViewButtonArr.map((text) => {
              const isActive = text === activeButton;
              return (
                <button
                  type="button"
                  key={text}
                  css={setBookmarkViewButton(isActive)}
                  onClick={() => {
                    setActiveButton(text);
                  }}
                >
                  {text}
                </button>
              );
            })}
          </div>
        </div>
        {activeButton === "채용공고" ? <BookmarkJobPart /> : <BookmarkCompanyPart />}
      </Layout>
    </main>
  );
};

export default MyPage;
