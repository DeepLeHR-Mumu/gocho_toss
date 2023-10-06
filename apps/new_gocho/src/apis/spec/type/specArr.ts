import { ImageType } from "shared-type/ui/imageType";
import { IndustryType, LanguageType, TaskType } from "./common";

export interface SpecObjDef {
  id: number;
  image: ImageType;
  gender: "남" | "여";
  age: number;
  military: "군필" | "미필" | "면제-해당없음";
  uploader: {
    nickname: string;
    image: "default" | "default_work" | "jdi" | "jdi_safety" | "jdi_chat" | "jdi_play" | "jdi_teach";
    badge: "default" | "early_bird" | "admin";
  };
  desired_task: TaskType | null;
  desired_industry: IndustryType | null;
  last_education: "고졸" | "초대졸";
  score: number | null;
  score_count: number;
  created_time: number;
  highSchool: {
    type: string;
    naesin: number;
    absent: number;
    tardy: number;
    leave_early: number;
    class_miss: number;
  };
  // NOTMYFAULT undefined 수정하기 - null로 와야함
  college:
    | {
        department: string;
        grade: number; // 학점
        max_grade: 4.5 | 4.3;
        uturn: boolean;
      }
    | null
    | undefined;
  // NOTMYFAULT undefined 수정하기 - null로 와야함
  certificate: {
    data: string[] | null; // 자격증 raw data
    level1: number | null; // 기능사 개수
    level2: number | null; // 산업기사 개수
    level3: number | null; // 기사+ 개수
  } | null;
  language: LanguageType[] | null;
  award: string[] | null;
  career: string[] | null;
  etc: string[] | null;
}
