import React, { createContext, useState, ReactNode } from "react";
import { AuthContextProps, AuthData } from "../types/authTypes";



export const AuthContext = createContext<AuthContextProps | undefined>(
    undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [authData, setAuthData] = useState<AuthData | null>(null);

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};
