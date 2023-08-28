import { SERVER_URL as url } from "../../constant/url";

const headers = {
  "Content-Type": "application/json"
};

export const fetchUserStories = async () => {
  try {
    const res = await fetch(url + "/stories/getStoriesofuser", {
      method: "GET",
      mode: 'cors',
      headers: headers,
      credentials: 'include',
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};