import { SERVER_URL as url } from "../../constant/url";

const headers = {
  "Content-Type": "application/json",
};

export const registerUser = async (FormData) => {
  try {
    const res = await fetch(url + "/users/register", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(FormData),
    });

    return res;
  } catch (error) {
    throw error;
  }
};
