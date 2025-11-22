import { post } from "./http";
import { API_URL } from "../constants/API_URL";

export const uploadVideo = async (videoFile, content, memberId) => {
  const formData = new FormData();
  formData.append("video", videoFile);
  formData.append("content", content);

  return await post(API_URL.VIDEOS, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      memberId: memberId,
    },
  });
};
