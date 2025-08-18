import axios from "axios";
import { API_BASE_URL } from "../config/constants";

const client = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// ✅ Optional: interceptors for auth token
client.interceptors.request.use(
    async (config) => {
        // Example: if you add JWT later
        // const token = await getToken();
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

export default client;
