export interface CommunityCommentArrReqObj {
  postingId: number;
}

export const communityCommentArrKeyObj = {
  all: [{ data: "communityCommentArr" }] as const,
  commentArr: (requestObj: CommunityCommentArrReqObj) => {
    return [{ data: "communityCommentArr", requestObj }] as const;
  },
};
