import api from "./axiosInstance";
import { Ad } from "../types/adTypes";

export const fetchAds = (page: number) =>
    api.get(`/ads?_page=${page}&_limit=10`);
export const fetchAdById = (id: string) => api.get(`/ads/${id}`);
export const createAd = (adData: Ad) => api.post("/ads", adData);
export const updateAd = (id: string, adData: Ad) =>
    api.put(`/ads/${id}`, adData);
export const deleteAd = (id: string) => api.delete(`/ads/${id}`);
