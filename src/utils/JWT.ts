import { decodeJwt } from "jose";

export const getUserIdFromToken = (token: string): string | null => {
    try {
        const decoded = decodeJwt(token);
        return decoded.sub || null;
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
};
