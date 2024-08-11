import api from "./axiosInstance";
import { Ad } from "../types/adTypes";
import useAuth from "../hooks/useAuth";
import useErrorHandling from "../hooks/useErrorHandler";
import useToast from "../hooks/useToast";

const useAdApi = () => {
    const { authData: user } = useAuth();
    const withErrorHandling = useErrorHandling();
    const {addToast}=useToast()
    const fetchAds = async (
        page: number = 1,
        limit: number = 100
    ): Promise<Ad[]> => {
        const response = await api.get(`/ads?_page=${page}&_limit=${limit}`);
        return response.data;
    };

    const fetchUserAds = async (
        page: number = 1,
        limit: number = 100
    ): Promise<Ad[]> => {
        if (!user) {
            return [];
        }

        const response = await api.get(
            `/ads?userId=${user.id}&_page=${page}&_limit=${limit}`
        );
        return response.data;
    };

    const fetchAdById = async (id: string | undefined): Promise<Ad> => {
        const response = await api.get(`/ads/${id}`);
        return response.data;
    };

    const createAd = async (ad: Ad): Promise<Ad> => {
        if (!user) {
            throw new Error("User is not authenticated");
        }

        const response = await api.post(`/ads`, { ...ad, userId: user.id });
        addToast("You are successfully add a new ad", "success");
        return response.data;
    };

    const updateAd = async (id: string | undefined, ad: Ad): Promise<Ad> => {
        if (!user) {
            throw new Error("User is not authenticated");
        }
        const response = await api.put(`/ads/${id}`, {
            ...ad,
            userId: user.id,
        });
        addToast("Your ad is successfully updated", "success");
        return response.data;
    };

    const deleteAd = async (id: string | undefined): Promise<void> => {
        await api.delete(`/ads/${id}`);
        addToast("Your ad is successfully deleted", "info");
    };

    return {
        fetchAds: withErrorHandling(fetchAds),
        fetchUserAds: withErrorHandling(fetchUserAds),
        fetchAdById: withErrorHandling(fetchAdById),
        createAd: withErrorHandling(createAd),
        updateAd: withErrorHandling(updateAd),
        deleteAd: withErrorHandling(deleteAd),
    };
};

export default useAdApi;
