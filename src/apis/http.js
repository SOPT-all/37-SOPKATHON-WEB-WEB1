import axiosInstance from "./axiosInstance";

export const get = async (...args) => {
  try {
    const response = await axiosInstance.get(...args);
    return response.data;
  } catch (error) {
    console.error("get Error", error);
    throw error;
  }
};

export const post = async (url, body, config) => {
  try {
    const response = await axiosInstance.post(url, body, config);
    console.log("post response:", response.data);
    return response.data;
  } catch (error) {
    console.error("post error:", error);
    throw error;
  }
};

export const del = async (url, config) => {
  try {
    const response = await axiosInstance.delete(url, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
