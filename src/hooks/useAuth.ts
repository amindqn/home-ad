import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContex";
import { AuthContextProps } from "../types/authTypes";

const useAuth = () => {
    const context = useContext(AuthContext) as AuthContextProps;
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default useAuth;
