import axiosInstance from "./axiosInstance";

export const get = async (...args) => {
  try {
    const response = await axiosInstance.get(...args);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const post = async (url, body, config) => {
  try {
    const response = await axiosInstance.post(url, body, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
