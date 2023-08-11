import { httpAxios } from "@/helper/httpHelper";

export const addTask = async (task) => {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);

  return result;
};

export const signUp = async (user) => {
  const result = await httpAxios.post("/api/users", user);
  const data = await result.data;
  return data;
};
