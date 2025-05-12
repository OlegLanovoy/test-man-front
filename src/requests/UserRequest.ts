import axios from "axios";

const BASE_URL = "http://localhost:5000/";

export const authUser = async (url: string, postData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}${url}`, postData, {
      withCredentials: true,
    });

    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};

export const getMe = async (url: string) => {
  try {
    const response = await axios.get(`http://localhost:5000/${url}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};
