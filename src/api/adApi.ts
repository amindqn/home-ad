import api from "./axiosInstance";
import { Ad } from "../types/adTypes";

export const fetchAds = async (
    page: number = 1,
    limit: number = 100
): Promise<Ad[]> => {
    const response = await api.get(`/ads?_page=${page}&_limit=${limit}`);
    return response.data;
};

export const fetchAdById = async (id: string): Promise<Ad> => {
    const response = await api.get(`/ads/${id}`);
    return response.data;
};

export const createAd = async (ad: Ad): Promise<Ad> => {
    const response = await api.post(`/ads`, ad);
    return response.data;
};

export const updateAd = async (id: string, ad: Ad): Promise<Ad> => {
    const response = await api.put(`/ads/${id}`, ad);
    return response.data;
};

export const deleteAd = async (id: string): Promise<void> => {
    await api.delete(`/ads/${id}`);
};
