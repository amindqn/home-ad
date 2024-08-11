import { useCookies } from "react-cookie";
import { useMutation, useQueryClient } from "react-query";
import api from "./axiosInstance";
import useAuth from "../hooks/useAuth";
import useErrorHandling from "../hooks/useErrorHandler";
import useToast from "../hooks/useToast";

const useAuthApi = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const queryClient = useQueryClient();
    const { setAuthData } = useAuth();
    const withErrorHandling = useErrorHandling();
    const { addToast } = useToast();

    const login = async (email: string, password: string) => {
        const response = await api.post(`/login`, { email, password });
        setCookie("token", response.data.accessToken, { path: "/" });
        setAuthData(response.data.user);
        addToast("You are successfully logged in", "success");
        return response.data;
    };

    const signup = async (
        email: string,
        password: string,
        username: string,
        phone?: string
    ) => {
        const response = await api.post(`/register`, {
            email,
            password,
            username,
            phone,
        });
        addToast("You are successfully signed up", "success");
        return response.data;
    };

    const updateUser = async (
        id: string | undefined,
        data: { username?: string; phone?: string; password?: string }
    ) => {
        if (id) {
            const response = await api.patch(`/users/${id}`, data);
            addToast("You are successfully update your profile", "success");
            return response.data;
        }
        throw new Error("id is invalid");

    };

    const logout = async () => {
        removeCookie("token", { path: "/" });
        queryClient.clear();
        setAuthData(null);
        addToast("You are successfully logged out", "success");
    };

    return {
        login: withErrorHandling(login),
        signup: withErrorHandling(signup),
        logout: withErrorHandling(logout),
        updateUser: withErrorHandling(updateUser),
    };
};

export default useAuthApi;
