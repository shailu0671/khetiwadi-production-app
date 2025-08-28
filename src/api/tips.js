import client from "./client";

export const getTipsList = async () => {
    try {
        const response = await client.get("/api/tips/get_tips");
        return response.data; // Adjust based on your backend response structure
    } catch (error) {
        console.error("Error fetching tips list:", error);
        throw error;
    }
};