import { httpAxios } from "@/helper/httpHelper";

export const login = async (user) => {
  const result = httpAxios
    .post("/api/login", user)
    .then((response) => response.data);
  return result;
};

export const currentUser = async () => {
  const result = await httpAxios
    .get("/api/current")
    .then((response) => response.data);
  return result;
};

export const logout = async () => {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
};
