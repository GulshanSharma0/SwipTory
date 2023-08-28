import { SERVER_URL as url } from "../../constant/url";

const headers = {
  "Content-Type": "application/json",
};

export const loginUser = async (FormData) => {
  try {
    const res = await fetch(url + "/users/login", {
      method: "POST",
      mode: 'cors',
      headers: headers,
		  credentials: 'include',
      body: JSON.stringify(FormData),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};
