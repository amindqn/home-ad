import React, { createContext, useState, ReactNode, useEffect } from "react";
import { AuthContextProps, AuthData } from "../types/authTypes";
import api from "../api/axiosInstance";
import { useCookies } from "react-cookie";
import { getUserIdFromToken } from "../utils/JWT";

export const AuthContext = createContext<AuthContextProps | undefined>(
    undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [authData, setAuthData] = useState<AuthData | null>(null);
    const [cookies] = useCookies(["token"]);

    useEffect(() => {
        if (cookies.token) {
            const userId = getUserIdFromToken(cookies.token);
            if (userId) {
                const fetchUserById = async (userId: string) => {
                    api.get(`/users/${userId}`)
                        .then((response) => {
                            let userData = response.data;
                            delete userData.password;
                            setAuthData(userData);
                            return userData;
                        })
                        .catch((error) => {
                            console.error("Error fetching profile:", error);
                        });
                };
                fetchUserById(userId);
            }
        }
    }, [cookies.token]);

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};
