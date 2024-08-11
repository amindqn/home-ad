import { Ad } from "../types/adTypes";
import useAuth from "./useAuth";

export default function useIsOwner(ad: Ad | undefined) {
    const { authData } = useAuth();
    if (!authData || !ad) {
        return false;
    }
    return authData.id === ad.userId;
}
