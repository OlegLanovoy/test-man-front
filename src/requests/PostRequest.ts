

import {instance} from "./UserRequest"

export const postCreate = async (url: string, postData: any) => {
  try {
    const response = await instance.post(`posts/${url}`, postData);
    return response;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown Error");
    }
  }
};

export const getAllPosts = async (url: string) => {
  try {
    const response = await instance.get(url);
    return response;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error(`Unknown Error`);
    }
  }
};
