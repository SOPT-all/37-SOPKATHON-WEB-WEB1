import { get } from "./http";

export const getVideoData = async (videoId) => {
  try {
    const response = await get(`/api/v1/videos/${videoId}`);
    console.log("Get Video Data API response:", response);

    return response.data;
  } catch (error) {
    console.error("Get Video Data API error:", error);

    const fallback = error?.response?.data;
    return {
      data: null,
      code: fallback?.code ?? null,
      msg: fallback?.msg ?? "데이터 얻어오기 중 오류가 발생했습니다.",
    };
  }
};
