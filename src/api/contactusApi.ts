import { useCookies } from "react-cookie";
import { useMutation, useQueryClient } from "react-query";
import api from "./axiosInstance";
import useAuth from "../hooks/useAuth";
import useErrorHandling from "../hooks/useErrorHandler";
import useToast from "../hooks/useToast";
import { ContactFormData } from "../types/contactusTypes";

const useContactUsApi = () => {
    const { authData } = useAuth();
    const withErrorHandling = useErrorHandling();
    const { addToast } = useToast();

    const sendContactForm = async (
        formData: ContactFormData
    ): Promise<void> => {
        if (authData?.id) {
            formData.userId = authData.id;
        }
        const response = await api.post(`/contact`, formData);

        if (response.status === 201) {
            addToast("Contact form submitted successfully!", "success");
        } else {
            throw new Error("Failed to submit contact form");
        }
    };

    return {
        sendContactForm: withErrorHandling(sendContactForm),
    };
};

export default useContactUsApi;
