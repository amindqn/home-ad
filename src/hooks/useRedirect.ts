import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const useRedirect = (redirectTo = "/login") => {
    const [cookies] = useCookies(["token"]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookies.token) {
            navigate(redirectTo);
        }
    }, [cookies, navigate, redirectTo]);
};

export default useRedirect;
