// не стал выносить его в env, так как общедоступный
const token = "dZhzHlw8Flpsf8W9Duq4rsJ1UVT4dRlW";
const BASE_URL = "https://admin-ct.cargis.pro/api/client/";

export const fetcher = async (url: string) => {
  return await fetch(`${BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
