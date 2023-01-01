import { FiGlobe } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { MdTravelExplore } from "react-icons/md";

export const rotationArr = [
  { data: "주간", name: "주간" },
  { data: "야간", name: "야간" },
  { data: "교대", name: "교대" },
  { data: "주간2교대", name: "주간 2교대" },
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
  { name: "공장 근무지", icon: BiMap },
  { name: "해외 근무지", icon: FiGlobe },
  { name: "기타 근무지", icon: MdTravelExplore },
] as const;

export const certificateArr = [
  "3D프린터개발",
  "3D프린터운용",
  "가구제작",
  "가스",
  "거푸집",
  "건설기계",
  "건설기계설비",
  "건설기계정비",
  "건설안전",
  "건설재료시험",
  "건축",
  "건축구조",
  "건축기계설비",
  "건축도장",
  "건축목공",
  "건축목재시공",
  "건축설비",
  "건축시공",
  "건축일반시공",
  "건축전기설비",
  "건축품질시험",
  "공유압",
  "공장관리",
  "공조냉동기계",
  "광고도장",
  "광산보안",
  "광학",
  "광학기기",
  "광해방지",
  "교통",
  "굴착기운전",
  "궤도장비정비",
  "귀금속가공",
  "그린전동자동차",
  "금속가공",
  "금속도장",
  "금속재료",
  "금속재료시험",
  "금속재창호",
  "금속제련",
  "금형",
  "금형제작",
  "기계",
  "기계가공",
  "기계가공조립",
  "기계설계",
  "기계안전",
  "기계정비",
  "기계조립",
  "기상",
  "기상감정",
  "기상예보",
  "기중기운전",
  "농기계운전",
  "농기계정비",
  "농림토양평가관리",
  "농어업토목",
  "농업기계",
  "농작업안전보건",
  "농화학",
  "누설비파괴검사",
  "대기관리",
  "대기환경",
  "도로 및 공학",
  "도배",
  "도시계획",
  "도자기공예",
  "도화",
  "동력기계정비",
  "떡제조",
  "로더운전",
  "로봇기구개발",
  "로봇소프트웨어개발",
  "로봇하드웨어개발",
  "롤러운전",
  "목공예",
  "무선설비",
  "미장",
  "바이오화학제품제조",
  "반도체설계",
  "반도체장비유지보수",
  "발송배전",
  "방사선관리",
  "방사선비파괴검사",
  "방송통신",
  "방수",
  "방재",
  "배관",
  "버섯",
  "버섯종균",
  "보석가공",
  "보석감정",
  "보석디자인",
  "복어조리",
  "불도저운전",
  "비계",
  "비파괴검사",
  "빅데이터분석",
  "사무자동화",
  "사진",
  "사출금형",
  "사출금형설계",
  "산림",
  "산업계측제어",
  "산업기계설비",
  "산업안전",
  "산업위생관리",
  "상하수도",
  "생물분류(동물)",
  "생물분류(식물)",
  "생산자동화",
  "서비스/경험디자인",
  "석공",
  "석공예",
  "선체건조",
  "설비보전",
  "섬유",
  "섬유디자인",
  "세라믹",
  "세탁",
  "소방",
  "소방설비(기계분야)",
  "소방설비(전기분야)",
  "소음진동",
  "수산양식",
  "수산제조",
  "수자원개발",
  "수질관리",
  "수질환경",
  "승강기",
  "시각디자인",
  "시설원예",
  "시추",
  "식물보호",
  "식육가공",
  "식육처리",
  "식품",
  "식품가공",
  "신발",
  "신발류제조",
  "신재생에너지발전설비",
  "신재생에너지발전설비(태양광)",
  "실내건축",
  "압연",
  "양복",
  "양식조리",
  "양장",
  "양화장치운전",
  "어로",
  "어업생산관리",
  "에너지관리",
  "열처리",
  "영사",
  "온수온돌",
  "온실가스관리",
  "와전류비파괴검사",
  "용접",
  "원예",
  "원자력",
  "원자력발전",
  "원형",
  "웹디자인",
  "위험물",
  "유기농농업",
  "유기농업",
  "유리시공",
  "응용지질",
  "의공",
  "의료전자",
  "의류",
  "인간공학",
  "인쇄",
  "일반기계",
  "일식조리",
  "임베디드",
  "임산가공",
  "임업종묘",
  "자기비파괴검사",
  "자동차보수도장",
  "자동차정비",
  "자동차차체수리",
  "자연생태복원",
  "자연환경관리",
  "자원관리",
  "잠수",
  "재료조작평가",
  "전기",
  "전기공사",
  "전기안전",
  "전기응용",
  "전기철도",
  "전산응용건축제도",
  "전산응용기계제도",
  "전산응용조선제도",
  "전산응용토목제도",
  "전자",
  "전자계산기",
  "전자계산기제어",
  "전자계산기조직응용",
  "전자기기",
  "전자부품장착",
  "전자부품장착(SMT)",
  "전자응용",
  "전자출판",
  "전자캐드기능사",
  "전파전자통신",
  "정밀측정",
  "정밀화학",
  "정보관리",
  "정보기기운용",
  "정보보안",
  "정보처리",
  "정보통신",
  "제강",
  "제과",
  "제빵",
  "제선",
  "제품디자인",
  "제품응용모델링",
  "조경",
  "조리",
  "조선",
  "조적",
  "조주",
  "종자",
  "주조",
  "중식조리",
  "지게차운전",
  "지도제작",
  "지적",
  "지질 및 지반",
  "차량",
  "천공기운전",
  "천장크레인운전",
  "철근",
  "철도",
  "철도신호",
  "철도운송",
  "철도전기신호",
  "철도차량",
  "철도차량정비",
  "철도토목",
  "초음파비파괴검사",
  "축로",
  "축산",
  "측량 및 지형공간",
  "측량 및 지형공간정보",
  "측량",
  "침투비파괴검사",
  "컨테이너크레인운전",
  "컬러리스트",
  "컴퓨터그래픽스운용",
  "컴퓨터시스템응용",
  "컴퓨터응용가공",
  "컴퓨터응용밀링",
  "컴퓨터응용선반",
  "콘크리트",
  "타워크레인설치/해체",
  "타워크레인운전",
  "타일",
  "토목",
  "토목구조",
  "토목시공",
  "토목품질시험",
  "토양환경",
  "토질 및 기초",
  "통신기기",
  "통신선로",
  "통신설비",
  "특수용접",
  "판금제관",
  "패션디자인",
  "패션머천다이징",
  "폐기물처리",
  "포장",
  "표면처리",
  "품질경영",
  "품질관리",
  "프레스금형",
  "프레스금형설계",
  "플라스틱창호",
  "피아노조율",
  "한복",
  "한식조리",
  "항공",
  "항공기관",
  "항공기관정비",
  "항공기체",
  "항공기체정비",
  "항공사진",
  "항공장비정비",
  "항공전자정비",
  "항로표지",
  "항만 및 해안",
  "해양",
  "해양공학",
  "해양자원개발",
  "해양조사",
  "해양환경",
  "화공",
  "화공안전",
  "화약류관리",
  "화약류제조",
  "화약취급",
  "화재감식평가",
  "화학분석",
  "화훼장식",
  "환경",
  "환경위해관리",
] as const;
