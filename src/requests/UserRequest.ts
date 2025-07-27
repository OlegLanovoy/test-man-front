import axios from "axios";

const isDev = import.meta.env.DEV;

const baseURL = isDev ? import.meta.env.VITE_API_URL + "/" : "/api/";

export const instance = axios.create({
  baseURL,
  withCredentials: true,
});

interface IResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

interface IUserData {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

export const authUser = async (url: string, postData: any) => {
  try {
    const response = await instance.post<IResponse<IUserData>>(
      `auth/${url}`,
      postData
    );

    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};

export const removeToken = async () => {
  try {
    const response = await instance.post(`auth/logout`);
    return response;
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
    const response = await instance.get(`users/${url}`);
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};

// instance.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const originalRequest = err.config;

//     if (err.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await instance.post("auth/refresh");
//         return instance(originalRequest); // повтор запроса
//       } catch {
//         // если refresh тоже не сработал
//         console.error("Unauthorized — need to login again");
//       }
//     }

//     return Promise.reject(err);
//   }
// );

export default instance;
