import { instance } from "./UserRequest";

import { PasswordFormValues } from "@/validation-schemas/profile-schema";

export const profileRequest = async (url: string, postData: any) => {
  try {
    const response = await instance.patch(`users/${url}`, postData);
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
  const response = await instance.patch(
    `users/${url}`, // укажи свой URL
    {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    }
  );
  return response.data;
};
