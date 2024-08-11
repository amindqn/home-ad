export interface AuthData {
    id: string;
    email: string;
    username: string;
    phone?: string;
}

export interface AuthContextProps {
    authData: AuthData | null;
    setAuthData: React.Dispatch<React.SetStateAction<AuthData | null>>;
}
