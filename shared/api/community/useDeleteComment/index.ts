import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostDeleteCommentDef, useDeleteCommentProps, RequestObjDef } from "./type";

const postDeleteComment: PostDeleteCommentDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.delete(`/postings/${requestObj.postingId}/comments/${requestObj.commentId}`, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useDeleteComment: useDeleteCommentProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postDeleteComment);
  return mutationResult;
};