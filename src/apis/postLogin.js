import { post } from "./http";

export const postLogin = async (body) => {
  try {
    const response = await post("/api/v1/members", body);
    console.log("Login API response:", response);

    const { code, data, msg } = response;

    return {
      data,
      code,
      msg,
    };
  } catch (error) {
    console.error("Login API error:", error);

    const fallback = error?.response?.data;
    return {
      data: null,
      code: fallback?.code ?? null,
      msg: fallback?.msg ?? "로그인 중 오류가 발생했습니다.",
    };
  }
};
