import api from "./api";

export const registerUser = (userData) => {
  return api.post("/api/auth/register", userData);
};

export const loginUser = (userData) => {
  return api.post("/api/auth/login", userData);
};

export const getProfile = () => {
  return api.get("/api/users/profile");
};