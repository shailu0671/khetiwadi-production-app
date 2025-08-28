import client from "./client";

export const getBlogList = async () => {
    try {
        const response = await client.get("/api/blog/get_blogs");
        return response.data; // Adjust based on your backend response structure
    } catch (error) {
        console.error("Error fetching tips list:", error);
        throw error;
    }
};