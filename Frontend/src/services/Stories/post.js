import { SERVER_URL as url } from "../../constant/url";

const headers = {
  "Content-Type": "application/json"
};

export const addStories = async (FormData) => {
  try {
    const res = await fetch(url + "/stories/add", {
      method: "PUT",
      mode: 'cors',
      headers: headers,
      credentials: 'include',
      body: JSON.stringify(FormData),
    });
    return res;
  } catch (error) {
    throw error;
  }
};