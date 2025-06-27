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
    const response = await axios.get(`${BASE_URL}user/${url}`, {
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

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await instance.post("/auth/refresh");
        return instance(originalRequest); // повтор запроса
      } catch {
        // если refresh тоже не сработал
        console.error("Unauthorized — need to login again");
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
