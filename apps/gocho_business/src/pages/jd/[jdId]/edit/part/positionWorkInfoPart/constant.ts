import { FiGlobe } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { MdTravelExplore } from "react-icons/md";

export const rotationArr = [
  { data: "주간", name: "주간" },
  { data: "야간", name: "야간" },
  { data: "교대", name: "교대" },
  { data: "기타", name: "기타" },
  { data: "주간2교대", name: "주간2교대" },
  { data: "2교대", name: "2교대" },
  { data: "3교대", name: "3교대" },
  { data: "2;1", name: "2조 1교대" },
  { data: "2;2", name: "2조 2교대" },
  { data: "3;1", name: "3조 1교대" },
  { data: "3;2", name: "3조 2교대" },
  { data: "3;3", name: "3조 3교대" },
  { data: "4;2", name: "4조 2교대" },
  { data: "4;3", name: "4조 3교대" },
  { data: "4;4", name: "4조 4교대" },
  { data: "5;3", name: "5조 3교대" },
  { data: "5;4", name: "5조 4교대" },
] as const;

export const placeTypeArr = [
  { name: "공장 근무지", data: "일반", icon: BiMap },
  { name: "해외 근무지", data: "해외", icon: FiGlobe },
  { name: "기타 근무지", data: "기타", icon: MdTravelExplore },
] as const;

export const certificateArr = [
  "기타",
  "전기",
  "지게차운전",
  "산업안전",
  "기계",
  "공조냉동기계",
  "위험물",
  "가스",
  "에너지관리",
  "용접",
  "기계정비",
  "수질환경",
  "대기환경",
  "화학분석",
  "화공",
  "환경",
  "설비보전",
  "전자",
  "건설기계",
  "소방",
  "보일러",
  "생산자동화",
  "소방설비(기계분야)",
  "금형",
  "전기공사",
  "소방설비(전기분야)",
  "천장크레인운전",
  "건설안전",
  "식품",
  "컴퓨터응용선반",
  "기계설계",
  "산업위생관리",
  "일반기계",
  "배관",
  "자동차정비",
  "폐기물처리",
  "건축",
  "수질관리",
  "컴퓨터응용밀링",
  "압연",
  "승강기",
  "공유압",
  "굴삭기운전",
  "제어",
  "정보 없음",
  "금속재료",
  "메카트로닉스",
  "건설기계정비",
  "금속가공",
  "기계가공조립",
  "토목",
  "기계가공",
  "전자기기",
  "전산응용기계제도",
  "주조",
  "건축설비",
  "정밀측정",
  "제강",
  "특수용접",
  "대기관리",
  "프레스금형",
  "제빵",
  "볼도저운전",
  "동력기계정비",
  "정보통신",
  "컴퓨터응용가공",
  "금속도장",
  "제선",
  "콘크리트",
  "제과",
  "로더운전",
  "인간공학",
  "반도체",
  "식품가공",
  "보일러취급",
  "기중기운전",
  "금속재련",
  "철도",
  "건설재료시험",
  "금속재료시험",
  "컨테이너크레인운전",
  "타워크레인운전",
  "건설기계설비",
  "품질경영",
  "품질관리",
  "불도저운전",
  "기계조립",
  "사출금형",
  "건축기계설비",
  "전기안전",
  "전기응용",
  "보일러시공",
  "건축구조",
  "비파괴검사",
  "자동차보수도장",
  "방사선관리",
  "표면처리",
  "거푸집",
  "기계안전",
  "온수온돌",
  "전자계산기",
  "전자캐드",
  "실내건축",
  "자기비파괴검사",
  "소음진동",
  "광고도장",
  "자연상태복원",
  "장비유지보수",
  "연삭",
  "금형제작",
  "차량",
  "전파전자통신",
  "농기계정비",
  "궤도장비정비",
  "굴착기운전",
  "열처리",
  "천장크레인",
  "정보처리",
  "식물보호",
  "신재생에너지발전설비",
];

export const preferredEtcGuideArr = [
  "인근거주자",
  "해당 직무 근무 경험",
  "국가보훈대상자 및 장애인",
  "차량 소지자",
  "운전 가능자",
  "2교대 근무 가능자",
  "장기근무 가능자",
  "지방근무 가능자",
  "야간근무 가능자",
];
