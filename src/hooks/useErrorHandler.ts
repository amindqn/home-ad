import useToast from "./useToast";

const errorMessages: { [key: number]: string } = {
    400: "Bad Request. Please check the data you provided.",
    401: "Unauthorized. Please log in again.",
    403: "Forbidden. You do not have permission to perform this action.",
    404: "Not Found. The requested resource could not be found.",
    500: "Internal Server Error. Please try again later.",
};

function useErrorHandling<T extends (...args: any[]) => Promise<any>>(): (
    fn: T
) => T {
    const { addToast } = useToast();

    return (fn: T): T => {
        return (async (...args: Parameters<T>): Promise<ReturnType<T>> => {
            try {
                const result = await fn(...args);
                return result;
            } catch (error: any) {
                const statusCode = error.response?.status;
                const message =
                    (statusCode && errorMessages[statusCode]) ||
                    error.message ||
                    "An unexpected error occurred";

                addToast(message, "error");
                throw error;
            }
        }) as T;
    };
}

export default useErrorHandling;
