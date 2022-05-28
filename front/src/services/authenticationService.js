import request from "../config/axios";

export const registerService = (data) => {
  return request.post("/auth/register", data).then((res) => res.data);
};

export const loginService = (data) => {
  return request.post("/auth/login", data).then((res) => res.data);
};

export const logoutService = (data) => {
  return request.get("/auth/logout").then((res) => res.data);
};

export const forgetPasswordService = (data) => {
  return request.post("/auth/forget_password", data).then((res) => res.data);
};
