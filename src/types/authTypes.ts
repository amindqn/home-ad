export interface User {
    username: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    user: User;
}
