import banner00 from "@public/images/global/MainCarousel/posco_ad.png";
import banner01 from "@public/images/global/MainCarousel/gocho_blog.png";
import banner02 from "@public/images/global/MainCarousel/factory_banner.jpg";
import banner03 from "@public/images/global/MainCarousel/openTalk_banner.jpg";

import checkIconImage from "shared-image/global/common/yellow_check.svg";
import { adClickEvent } from "shared-ga/home";

export const carouselArr = [
  {
    id: 0,
    topDesc: "OPEN",
    middleDesc: "포스코",
    title: "생산기술직 (포항/광양) 채용형 인턴 신입사원 모집",
    lastDesc: "랜선 리크루팅 신청하고 채용 꿀팁 알아가세요!",
    backgroundImage: banner00,
    backgroundColor: "#005890",
    buttonObj: {
      target: "_blank" as const,
      text: "공고 확인하기",
      color: "#fff",
      backgroundColor: "#111",
      url: "https://고초대졸.com/jd/detail/17228",
      onClick: adClickEvent,
    },
  },
  {
    id: 1,
    topDesc: "OPEN",
    middleDesc: "고초대졸 블로그",
    title: "고초대졸닷컴 공식 블로그",
    lastDesc: "생산직 취업에 필요한 모든 정보를 블로그에서 만나보세요",
    backgroundImage: banner01,
    iconImage: checkIconImage,
    backgroundColor: "#59adff",
    buttonObj: {
      target: "_blank" as const,
      text: "블로그 바로가기",
      color: "#fff",
      backgroundColor: "#333",
      url: "https://blog.gochodaejol.com/?utm_source=gochodaejoldotcom&utm_medium=main-banner",
    },
  },
  {
    id: 2,
    topDesc: "OPEN",
    middleDesc: "고초대졸닷컴",
    title: "공고에서 근무할 공장 정보 바로보기 서비스 시작",
    lastDesc: "이제 공장정보는 공고에서 바로 확인하세요!",
    backgroundImage: banner02,
    iconImage: checkIconImage,
    backgroundColor: "#2961cd",
    buttonObj: null,
  },
  {
    id: 3,
    topDesc: "OPEN",
    middleDesc: "고초대졸닷컴",
    title: "생산/기능직 관련 최대 규모 오픈카톡방",
    lastDesc: "다양한 취업정보 및 꿀팁을 물어보세요",
    backgroundImage: banner03,
    iconImage: checkIconImage,
    backgroundColor: "#fab60e",
    buttonObj: {
      target: "_blank" as const,
      text: "오픈카톡 바로가기",
      color: "#fff",
      backgroundColor: "#333",
      url: "https://open.kakao.com/o/gxquBCud",
    },
  },
];
