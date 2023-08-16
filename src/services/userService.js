import { httpAxios } from "@/helper/httpHelper";

export const login = async (user) => {
  const result = httpAxios
    .post("/api/login", user)
    .then((response) => response.data);
  return result;
};
