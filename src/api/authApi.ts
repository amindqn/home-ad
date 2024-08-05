import { LoginResponse, User } from "../types/authTypes";
import api from "./axiosInstance";

export const register = (userData: User) => api.post("/register", userData);
export const login = (userData: User) =>
    api.post<LoginResponse>("/login", userData);
export const logout = () => api.post("/logout");
