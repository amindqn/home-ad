import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5010",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
