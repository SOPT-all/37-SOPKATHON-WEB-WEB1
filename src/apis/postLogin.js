import { post } from "./http";

export const postLogin = async (body) => {
  try {
    const response = await post("/api/v1/members", body);
    console.log("Login API response:", response.data);
    return { success: response.data.code === 200, data: response.data.data };
  } catch (error) {
    console.error("Login API error:", error);
    return {
      success: false,
      data: null,
    };
  }
};
