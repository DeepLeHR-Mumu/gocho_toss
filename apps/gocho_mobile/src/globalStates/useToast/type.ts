export type ToastMsgDef =
  | "비밀번호가 변경되었습니다."
  | "계정이 삭제되었습니다."
  | "프로필 사진이 변경되었습니다."
  | "댓글이 등록되었습니다."
  | "My필터가 저장되었습니다"
  | "위치가 복사되었습니다."
  | "접속해주셔서 감사합니다."
  | "로그인후 My 필터를 저장해주세요."
  | "로그인후 My 필터를 사용해주세요."
  | "My필터를 저장후 불러주세요."
  | "My필터를 불러왔습니다."
  | "링크가 복사되었습니다."
  | "주소가 복사되었습니다."
  | "이미 사용중인 닉네임 입니다."
  | "메일이 전송됐습니다. 이메일을 확인해주세요."
  | "검색어에 특수문자는 포함될 수 없습니다."
  | null;

export type ToastAuthMsgDef = "님 반갑습니다." | "님 환영합니다.";

export interface SetToastMessageDef {
  (toastMessage: ToastMsgDef, nickname?: never): void;
  (toastMessage: ToastAuthMsgDef, nickname: string): void;
}

export interface SetToastDef {
  (toastMessage: ToastAuthMsgDef | ToastMsgDef, nickname?: string | never): void;
}

export interface ToastAtomProps {
  toastMessage: ToastMsgDef | ToastAuthMsgDef;
  nickname?: string | never;
  setToastMessage: SetToastDef;
}