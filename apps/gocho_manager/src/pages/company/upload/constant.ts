import { welfareArrDef } from "./type";

export const industryArr = [
  "전체",
  "제약",
  "바이오",
  "반도체",
  "전자재료",
  "산업가스/특수가스",
  "디스플레이",
  "식품/식품원료",
  "음료/주류",
  "싸이로/사료",
  "탱크터미널",
  "정유석화",
  "철강",
  "비철/금속",
  "완성차",
  "자동차부품",
  "시설관리전문",
  "화학",
  "섬유",
  "발전소",
  "도시가스",
  "산업기계",
  "방산",
  "LPG",
  "제지",
  "2차전지",
  "조선",
  "화장품/헬스케어",
  "건설/토목",
  "무역",
  "물류",
  "전자제품",
  "기타",
];

export const sizeArr = ["대기업", "중견기업", "중소기업", "외국계", "공기업", "공공기관", "기타"];

export const welfareArr: welfareArrDef = [
  { title: "급여", data: "welfare.money" },
  { title: "의료", data: "welfare.health" },
  { title: "생활", data: "welfare.life" },
  { title: "시설", data: "welfare.facility" },
  { title: "명절", data: "welfare.holiday" },
  { title: "휴가", data: "welfare.vacation" },
  { title: "자기계발", data: "welfare.growth" },
  { title: "기타", data: "welfare.etc" },
];
