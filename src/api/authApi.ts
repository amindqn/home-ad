import api from "./axiosInstance";

export const login = async (email: string, password: string) => {
    const response = await api.post(`/login`, { email, password });
    return response.data;
};

export const signup = async (email: string, password: string) => {
    const response = await api.post(`/register`, { email, password });
    return response.data;
};

export const logout = () => api.post("/logout");
