import { SERVER_URL as url } from "../../constant/url";

const headers = {
  "Content-Type": "application/json",
};

export const logoutUser = async () => {
  try {
    const res = await fetch(url + "/users/logout", {
      method: "POST",
      headers: headers,
      credentials: 'include',
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};