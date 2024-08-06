export interface AuthData {
    email: string;
    token: string;
}

export interface AuthContextProps {
    authData: AuthData | null;
    setAuthData: React.Dispatch<React.SetStateAction<AuthData | null>>;
}