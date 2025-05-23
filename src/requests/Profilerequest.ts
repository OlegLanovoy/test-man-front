import axios from "axios";

const BASE_URL = "http://localhost:5000/";

export const profileRequest = async (url: string, postData: any) => {
  try {
    const response = await axios.patch(`${BASE_URL}${url}`, postData, {
      withCredentials: true,
    });
    return response;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error(`Unknown Error`);
    }
  }
};
