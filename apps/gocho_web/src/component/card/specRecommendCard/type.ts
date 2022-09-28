export interface SpecRecommendCardProps {
  isSkeleton?: never;
  specData: {
    id: number;
    gender: "남" | "여";
    age: number;
    user: {
      nickname: string;
      image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
      badge: "default" | "early_bird" | "admin";
    };
    isMine: boolean;
    lastEducation: "고졸" | "초대졸";
    college: { maxGrade: 4.5 | 4.3; grade: number; department: string } | null;
    highschool: {
      naesin: number;
      type: string;
      absent: number;
      classMiss: number;
      tardy: number;
      leaveEarly: number;
    };
    certificate: {
      data: string[] | null;
      level1: number;
      level2: number;
      level3: number;
    } | null;
  };
}

export interface SkeletonCardProps {
  specData?: never;
  isSkeleton: boolean;
}
