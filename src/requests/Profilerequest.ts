import axios from "axios";

import { PasswordFormValues } from "@/validation-schemas/profile-schema";
const BASE_URL = "http://localhost:5000/user/";

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

export const changePasswordRequest = async (
  url: string,
  data: PasswordFormValues
) => {
  const response = await axios.patch(
    `${BASE_URL}${url}`, // укажи свой URL
    {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    },
    { withCredentials: true }
  );
  return response.data;
};
