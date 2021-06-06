import { API_URL } from "../../Utils/constants";
import { get } from "axios";

export const getPosts = async () => {
  try {
    const data = await get(`${API_URL}/posts`);

    return data;
  } catch (error) {}
};
